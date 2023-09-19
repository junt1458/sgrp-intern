import { NextPage } from 'next';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';
import Header from '../../components/header/header.component';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/button/button.component';
import {
  Applications,
  useAddApplicationMutation,
  useApproveRejectOpportunityMutation,
  useDeleteOpportunityMutation,
  useGetApplicationsQuery,
  useGetOpportunityQuery,
  useGetPartnerProfileQuery,
  useUpdateOpportunityStatusMutation,
} from '../../libs/graphql';
import ReactMarkdown from 'react-markdown';
import { formatDate, formatDateTime } from '../../libs/date';
import WarningIcon from '@mui/icons-material/Warning';

const useDetailHook = (status: number, partner_id: string) => {
  const [, createApplication] = useAddApplicationMutation();
  const [, approveReject] = useApproveRejectOpportunityMutation();
  const [, updateStatus] = useUpdateOpportunityStatusMutation();
  const [, deleteOpportunity] = useDeleteOpportunityMutation();

  const router = useRouter();
  const { id } = router.query;
  const { role, uid } = useAuthHook(
    ['student', 'partner', 'manager'],
    false,
    false
  );
  const onClickBack = useCallback(() => {
    router.push(`/${role}`);
  }, [router, role]);

  const onClickEdit = useCallback(() => {
    if (status <= 2 && role == 'partner') {
      router.push('/partner/detail?id=' + id);
    }
  }, [status, role, router, id]);

  const onClickAction = useCallback(async () => {
    if (
      !confirm(
        status <= 2
          ? 'Are you sure to delete this opportunity?'
          : status == 3
          ? 'Are you sure to close this opportunity?'
          : 'Are you sure to open this opportunity?'
      )
    )
      return;

    if (status <= 2) {
      await deleteOpportunity({ id });
      router.push('/' + role);
    } else if (status == 3) {
      await updateStatus({ opportunity_id: id, status: 4 });
    } else if (status == 4) {
      await updateStatus({ opportunity_id: id, status: 3 });
    }
  }, [status, deleteOpportunity, id, router, role, updateStatus]);

  const onClickApprove = useCallback(async () => {
    if (role !== 'manager') return;
    if (!confirm('Are you sure to approve this opportunity?')) return;
    await approveReject({ status: 3, opportunity_id: id, manager_id: uid });
  }, [role, id, approveReject, uid]);

  const onClickReject = useCallback(async () => {
    if (role !== 'manager') return;
    if (!confirm('Are you sure to approve this opportunity?')) return;
    await approveReject({ status: 1, opportunity_id: id, manager_id: uid });
    router.push('/' + role);
  }, [router, role, id, approveReject, uid]);

  const onClickApply = useCallback(async () => {
    if (status !== 3 || role !== 'student') return;
    if (!confirm('Are you sure to apply to this opportunity?')) return;

    const result = await createApplication({
      partner_id,
      student_id: uid,
      opportunity_id: id,
    });

    if (result.error) {
      alert('Error: ' + result.error);
      return;
    }

    router.push(
      '/application/' + result.data?.insert_applications_one?.application_id
    );
  }, [createApplication, id, partner_id, role, router, status, uid]);

  const onClickList = useCallback(() => {
    router.push('/list/' + id);
  }, [id, router]);

  return {
    onClickBack,
    onClickEdit,
    onClickAction,
    onClickApprove,
    onClickApply,
    onClickReject,
    onClickList,
  };
};

const DetailPage: NextPage = () => {
  const router = useRouter();

  const { isLoading, isAllowed, role } = useAuthHook(
    ['student', 'partner', 'manager'],
    true,
    true
  );

  const { id } = router.query;
  const [{ data, fetching }] = useGetOpportunityQuery({
    variables: { id },
  });

  const {
    onClickBack,
    onClickEdit,
    onClickAction,
    onClickApply,
    onClickApprove,
    onClickReject,
    onClickList,
  } = useDetailHook(
    data?.opportunities_by_pk?.display_status!,
    data?.opportunities_by_pk?.partner_id!
  );

  const [result] = useGetPartnerProfileQuery({
    variables: { uid: data?.opportunities_by_pk?.partner_id },
  });

  const [stuResult] = useGetApplicationsQuery({
    variables: { opportunity_id: id },
  });

  const toStateString = (state: number) => {
    switch (state) {
      case 0:
        return 'Manager Reviewing';
      case 1:
        return 'Manager Rejected';
      case 3:
        return 'Partner Reviewing';
      case 4:
        return 'Partner Accepted';
      case 5:
        return 'Partner Rejected';
    }
    return 'Unknown Status';
  };

  const pendingState = (applications: Applications[]) => {
    for (var app of applications) {
      let state = app.display_status;
      if (state === 0 || state === 3) {
        return toStateString(state);
      }
    }
    return false;
  };

  const isPending = (applications: Applications[]) => {
    for (var app of applications) {
      let state = app.display_status;
      if (state === 0 || state === 3) return true;
    }
    return false;
  };

  return (
    <PageLoading
      isLoading={isLoading || fetching || result.fetching || stuResult.fetching}
      isPermissionError={!isAllowed}
      isGeneralError={!isLoading && !fetching && !data?.opportunities_by_pk}
      errorMessage='Opportunity Not Found'
    >
      <>
        <Header />
        {role === 'partner' ? (
          <div className='screen-x mx-auto my-4 max-w-4xl'>
            {data?.opportunities_by_pk?.display_status == 0 ? (
              <div className='mx-4 my-2 flex rounded-md bg-[#dadaca] px-3 py-1'>
                <div className='mr-3 flex items-center justify-center'>
                  <WarningIcon />
                </div>
                <div>
                  This opportunity is in Draft state. Other people cannot see
                  this opportunity.
                </div>
              </div>
            ) : data?.opportunities_by_pk?.display_status == 1 ? (
              <div className='text mx-4 my-2 flex rounded-md bg-[#f14646] px-3 py-1 text-white'>
                <div className='mr-3 flex items-center justify-center'>
                  <WarningIcon />
                </div>
                <div>
                  Your opportunity is rejected. <br />
                  You can submit again by editing this opportunity. <br />
                  (Rejected by {data.opportunities_by_pk.manager?.name})
                </div>
              </div>
            ) : data?.opportunities_by_pk?.display_status == 2 ? (
              <div className='mx-4 my-2 flex rounded-md bg-[#dfdf41] px-3 py-1'>
                <div className='mr-3 flex items-center justify-center'>
                  <WarningIcon />
                </div>
                <div>
                  Your opportunity is under reviewing. <br />
                  It will be shown to students after approved by managers.
                </div>
              </div>
            ) : data?.opportunities_by_pk?.display_status == 4 ? (
              <div className='mx-4 my-2 flex rounded-md bg-[#dfdf41] px-3 py-1'>
                <div className='mr-3 flex items-center justify-center'>
                  <WarningIcon />
                </div>
                <div>
                  This opportunity is closed <br />
                  You can open this opportunity again.
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className='mx-4 flex flex-wrap rounded-md border border-gray-400 p-3'>
              {(data?.opportunities_by_pk?.display_status || 0) <= 2 ? (
                <div className='my-1 mr-2'>
                  <Button color='primary' onClick={onClickEdit}>
                    Edit
                  </Button>
                </div>
              ) : (
                <></>
              )}
              <div className='my-1 mr-2'>
                <Button color='action' onClick={onClickAction}>
                  {(data?.opportunities_by_pk?.display_status || 0) <= 2
                    ? 'Delete'
                    : (data?.opportunities_by_pk?.display_status || 0) == 3
                    ? 'Close Opportunity'
                    : 'Open Opportunity'}
                </Button>
              </div>
              {(data?.opportunities_by_pk?.display_status || 0) >= 3 ? (
                <div className='my-1 '>
                  <Button color='list' onClick={onClickList}>
                    List of Applications
                  </Button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : role === 'manager' ? (
          <div className='screen-x mx-auto my-4 max-w-4xl'>
            {data?.opportunities_by_pk?.display_status == 2 ? (
              <div className='mx-4 my-2 flex rounded-md bg-[#dfdf41] px-3 py-1'>
                <div className='mr-3 flex items-center justify-center'>
                  <WarningIcon />
                </div>
                <div>
                  This opportunity is under reviewing. <br />
                  It will not be shown to students until approved by managers.
                </div>
              </div>
            ) : data?.opportunities_by_pk?.display_status == 4 ? (
              <div className='mx-4 my-2 flex rounded-md bg-[#dfdf41] px-3 py-1'>
                <div className='mr-3 flex items-center justify-center'>
                  <WarningIcon />
                </div>
                <div>
                  This opportunity is closed. <br />
                  You can open this opportunity again.
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className='mx-4 flex flex-wrap rounded-md border border-gray-400 p-3'>
              {(data?.opportunities_by_pk?.display_status || 0) <= 2 ? (
                <div className='my-1 mr-2'>
                  <Button color='primary' onClick={onClickApprove}>
                    Approve
                  </Button>
                </div>
              ) : (
                <></>
              )}
              {(data?.opportunities_by_pk?.display_status || 0) <= 2 ? (
                <div className='my-1 mr-6'>
                  <Button color='danger' onClick={onClickReject}>
                    Reject
                  </Button>
                </div>
              ) : (
                <></>
              )}
              {(data?.opportunities_by_pk?.display_status || 0) >= 3 ? (
                <div className='my-1 mr-2'>
                  <Button color='action' onClick={onClickAction}>
                    {(data?.opportunities_by_pk?.display_status || 0) == 3
                      ? 'Close Opportunity'
                      : 'Open Opportunity'}
                  </Button>
                </div>
              ) : (
                <></>
              )}
              {(data?.opportunities_by_pk?.display_status || 0) >= 3 ? (
                <div className='my-1'>
                  <Button color='list' onClick={onClickList}>
                    List of Applications
                  </Button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : role === 'student' ? (
          <div className='screen-x mx-auto my-4 max-w-4xl'>
            {isPending(
              (stuResult.data?.applications as Applications[]) || []
            ) ? (
              <div className='mx-4 my-2 flex rounded-md bg-[#dfdf41] px-3 py-1'>
                <div className='mr-3 flex items-center justify-center'>
                  <WarningIcon />
                </div>
                <div>
                  Your application is in progress.
                  <br />
                  Current Status:{' '}
                  {pendingState(
                    (stuResult.data?.applications as Applications[]) || []
                  )}
                </div>
              </div>
            ) : data?.opportunities_by_pk?.display_status == 4 ? (
              <div className='mx-4 my-2 flex rounded-md bg-[#dfdf41] px-3 py-1'>
                <div className='mr-3 flex items-center justify-center'>
                  <WarningIcon />
                </div>
                <div>
                  This opportunity is closed. <br />
                  You cannot apply to this opportunity.
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className='mx-4 rounded-md border border-gray-400 p-3'>
              <div className='mb-2'>
                <div>Your Applications</div>
                <ul className='list-inside list-disc'>
                  {!stuResult.data?.applications.length ? (
                    <li>No applications found</li>
                  ) : (
                    stuResult.data?.applications.map((a) => (
                      <li key={a.application_id} className='markdown'>
                        <a href={'/application/' + a.application_id}>
                          Application at{' '}
                          {formatDateTime(new Date(a.applied_at!))}
                        </a>
                        : {toStateString(a.display_status!)}
                      </li>
                    ))
                  )}
                </ul>
              </div>
              {data?.opportunities_by_pk?.display_status == 3 &&
              !isPending(
                (stuResult.data?.applications as Applications[]) || []
              ) ? (
                <Button color='action' onClick={onClickApply}>
                  Apply to this opportunity
                </Button>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
        <h1 className='my-4 text-center text-3xl'>Opportunity Detail</h1>
        <div className='my-2 flex justify-center'>
          <Button color={'primary'} onClick={onClickBack}>
            Back to Home
          </Button>
        </div>
        <div className='screen-x mx-auto my-6 grid max-w-4xl grid-cols-2 px-3'>
          <h2 className='col-span-2 my-1 text-2xl font-bold'>
            Detail of Opportunity
          </h2>
          <div>
            <h3 className='text-lg font-bold'>Location</h3>
            <span>
              {data?.opportunities_by_pk?.city},{' '}
              {data?.opportunities_by_pk?.partner.address_country}
            </span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Available Slots</h3>
            <span>{data?.opportunities_by_pk?.slots}</span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Start Date</h3>
            <span>
              {formatDate(new Date(data?.opportunities_by_pk?.date_from))}
            </span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>End Date</h3>
            <span>
              {formatDate(new Date(data?.opportunities_by_pk?.date_to))}
            </span>
          </div>
          <div className='col-span-2 mb-6'>
            <h3 className='text-lg font-bold'>Description</h3>
            <div className='markdown rounded-md border border-gray-300 p-2'>
              <ReactMarkdown>
                {data?.opportunities_by_pk?.detail!}
              </ReactMarkdown>
            </div>
          </div>
          <h2 className='col-span-2 my-1 text-2xl font-bold'>
            Detail of Partner
          </h2>
          <div className='col-span-2 mb-6'>
            <h3 className='text-lg font-bold'>Partner Name</h3>
            <span>{data?.opportunities_by_pk?.partner.display_name}</span>
          </div>
          <div className='col-span-2 mb-6'>
            <h3 className='text-lg font-bold'>Address</h3>
            <span>
              {data?.opportunities_by_pk?.partner.address_line1} <br />
              {data?.opportunities_by_pk?.partner.address_line2}{' '}
              {data?.opportunities_by_pk?.partner.address_line2 ? (
                <br />
              ) : (
                <></>
              )}
              {data?.opportunities_by_pk?.partner.address_zipcode},{' '}
              {data?.opportunities_by_pk?.partner.address_country}
            </span>
          </div>

          {!result.data?.partners.length ? (
            <></>
          ) : (
            <>
              <div className='col-span-2 mb-6'>
                <h3 className='text-lg font-bold'>Contact Person Name</h3>
                <span>{result.data.partners[0].contact_name}</span>
              </div>

              <div className='mb-6'>
                <h3 className='text-lg font-bold'>Contact Phone</h3>
                <span className='markdown'>
                  <a href={'tel:' + result.data.partners[0].contact_phone}>
                    {result.data.partners[0].contact_phone}
                  </a>
                </span>
              </div>
              <div className='mb-6'>
                <h3 className='text-lg font-bold'>Contact Email</h3>
                <span className='markdown'>
                  <a href={'mailto:' + result.data.partners[0].contact_email}>
                    {result.data.partners[0].contact_email}
                  </a>
                </span>
              </div>
            </>
          )}
        </div>
      </>
    </PageLoading>
  );
};

export default DetailPage;
