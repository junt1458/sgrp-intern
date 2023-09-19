import { NextPage } from 'next';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';
import Header from '../../components/header/header.component';
import {
  useGetApplicationQuery,
  useGetPartnerProfileQuery,
  useUpdateApplicationStatusMutation,
} from '../../libs/graphql';
import { useRouter } from 'next/router';
import { formatDate, formatDateTime } from '../../libs/date';
import ReactMarkdown from 'react-markdown';
import Button from '../../components/button/button.component';
import WarningIcon from '@mui/icons-material/Warning';
import { useCallback } from 'react';

const ApplicationDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, isAllowed, role, uid, getAccessTokenSilently } =
    useAuthHook(['student', 'partner', 'manager'], true, true);

  const toStateString = (state: Number) => {
    switch (state) {
      case 0:
        return 'Manager Reviewing';
      case 1:
        return 'Manager Rejected';
      case 3:
        return 'Partner Reviewing';
      case 4:
        return 'Partner Rejected';
      case 5:
        return 'Partnet Accepted';
      default:
        return 'Unknown';
    }
  };

  const [{ data, fetching }] = useGetApplicationQuery({ variables: { id } });
  const [result] = useGetPartnerProfileQuery({
    variables: { uid: data?.applications_by_pk?.partner_id },
  });

  const [, updateStatus] = useUpdateApplicationStatusMutation();

  const onClickApprove = useCallback(async () => {
    if (role === 'student') return;
    if (
      !confirm(
        'Are you sure to ' +
          (role === 'partner' ? 'accept' : 'approve') +
          ' this application?'
      )
    )
      return;
    await updateStatus({
      application_id: data?.applications_by_pk?.application_id,
      manager_id:
        role === 'manager' ? uid : data?.applications_by_pk?.manager_id,
      status: role === 'manager' ? 3 : 5,
    });

    const token = await getAccessTokenSilently();
    await fetch('/api/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        application_id: data?.applications_by_pk?.application_id,
      }),
    });
  }, [data, role, uid, updateStatus, getAccessTokenSilently]);

  const onClickReject = useCallback(async () => {
    if (role === 'student') return;
    if (!confirm('Are you sure to reject this application?')) return;
    await updateStatus({
      application_id: data?.applications_by_pk?.application_id,
      manager_id:
        role === 'manager' ? uid : data?.applications_by_pk?.manager_id,
      status: role === 'manager' ? 1 : 4,
    });

    const token = await getAccessTokenSilently();
    await fetch('/api/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        application_id: data?.applications_by_pk?.application_id,
      }),
    });
  }, [data, role, uid, updateStatus, getAccessTokenSilently]);

  return (
    <PageLoading
      isLoading={isLoading || fetching || result.fetching}
      isPermissionError={!isAllowed}
      isGeneralError={!isLoading && !fetching && !data?.applications_by_pk}
      errorMessage='Application Not Found'
    >
      <>
        <Header />
        <div className='screen-x mx-auto my-6 max-w-4xl'>
          {data?.applications_by_pk?.display_status == 1 ||
          data?.applications_by_pk?.display_status == 4 ? (
            <div className='text mx-4 my-2 flex rounded-md bg-[#f14646] px-3 py-1 text-white'>
              <div className='mr-3 flex items-center justify-center'>
                <WarningIcon />
              </div>
              <div>
                This application is rejected <br />
                (Rejected by{' '}
                {data?.applications_by_pk?.display_status == 1
                  ? data.applications_by_pk.manager?.name
                  : 'Partner'}
                )
              </div>
            </div>
          ) : data?.applications_by_pk?.display_status == 0 ||
            data?.applications_by_pk?.display_status == 3 ? (
            <div className='mx-4 my-2 flex rounded-md bg-[#dfdf41] px-3 py-1'>
              <div className='mr-3 flex items-center justify-center'>
                <WarningIcon />
              </div>
              <div>This opportunity is under reviewing.</div>
            </div>
          ) : (
            <></>
          )}
          {(role === 'manager' &&
            data?.applications_by_pk?.display_status === 0) ||
          (role === 'partner' &&
            data?.applications_by_pk?.display_status === 3) ? (
            <div className='mx-4 rounded-md border border-gray-400 p-3'>
              <div className='mb-2 text-red-600 underline'>
                This applications requires your approval
              </div>
              <div className='flex flex-wrap'>
                <div className='mr-2'>
                  <Button color='primary' onClick={onClickApprove}>
                    {role === 'partner' ? 'Accept' : 'Approve'}
                  </Button>
                </div>
                <div className=''>
                  <Button color='danger' onClick={onClickReject}>
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <h1 className='my-4 text-center text-3xl'>Application Detail</h1>
        <div className='my-2 flex justify-center'>
          <div className='flex flex-wrap'>
            <div>
              {' '}
              <Button color={'primary'} onClick={() => router.push('/')}>
                Back to Home
              </Button>
            </div>
            <div className='ml-2'>
              {role !== 'student' ? (
                <Button
                  color={'action'}
                  onClick={() =>
                    router.push(
                      '/list/' +
                        data?.applications_by_pk?.opportunity.opportunity_id
                    )
                  }
                >
                  Back to List
                </Button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className='screen-x mx-auto my-6 grid max-w-4xl grid-cols-2 px-3'>
          <h2 className='col-span-2 my-1 bg-gray-200 text-2xl font-bold'>
            Detail of Application
          </h2>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Application ID</h3>
            <span>{data?.applications_by_pk?.application_id}</span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Apply Date</h3>
            <span>
              {formatDateTime(new Date(data?.applications_by_pk?.applied_at))}
            </span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Status</h3>
            <span>
              {toStateString(data?.applications_by_pk?.display_status!)}{' '}
            </span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Approved Manager</h3>
            <span>{data?.applications_by_pk?.manager?.name || ''}</span>
          </div>
          <h2 className='col-span-2 mb-1 mt-4 bg-gray-200 text-2xl font-bold'>
            Detail of Partner
          </h2>
          <div className='col-span-2 mb-6'>
            <h3 className='text-lg font-bold'>Partner Name</h3>
            <span>{data?.applications_by_pk?.partner.display_name}</span>
          </div>
          <div className='col-span-2 mb-6'>
            <h3 className='text-lg font-bold'>Address</h3>
            <span>
              {data?.applications_by_pk?.partner.address_line1} <br />
              {data?.applications_by_pk?.partner.address_line2}{' '}
              {data?.applications_by_pk?.partner.address_line2 ? <br /> : <></>}
              {data?.applications_by_pk?.partner.address_zipcode},{' '}
              {data?.applications_by_pk?.partner.address_country}
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
          <h2 className='col-span-2 mb-1 mt-4  bg-gray-200 text-2xl font-bold'>
            Detail of Student
          </h2>
          <div className='col-span-2 mb-6'>
            <h3 className='text-lg font-bold'>Name</h3>
            <span>{data?.applications_by_pk?.student.name}</span>
          </div>

          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Phone</h3>
            <span className='markdown'>
              <a href={'tel:' + data?.applications_by_pk?.student.phone}>
                {data?.applications_by_pk?.student.phone}
              </a>
            </span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Email</h3>
            <span className='markdown'>
              <a href={'mailto:' + data?.applications_by_pk?.student.email}>
                {data?.applications_by_pk?.student.email}
              </a>
            </span>
          </div>

          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Gender</h3>
            <span>{data?.applications_by_pk?.student.gender}</span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Date of Birth</h3>
            <span>
              {!data?.applications_by_pk?.student.birthday
                ? ''
                : formatDate(
                    new Date(data?.applications_by_pk?.student.birthday)
                  )}
            </span>
          </div>

          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Passport No.</h3>
            <span>{data?.applications_by_pk?.student.passport_no}</span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Passport Expiry</h3>
            <span>
              {!data?.applications_by_pk?.student.passport_expires
                ? ''
                : formatDate(
                    new Date(data?.applications_by_pk?.student.passport_expires)
                  )}
            </span>
          </div>

          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Passport Country</h3>
            <span>{data?.applications_by_pk?.student.passport_country}</span>
          </div>
          <div className='mb-6'></div>

          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Department of School</h3>
            <span>{data?.applications_by_pk?.student.department}</span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Major field</h3>
            <span>{data?.applications_by_pk?.student.major}</span>
          </div>

          <div className='col-span-2 mb-6'>
            <h3 className='text-lg font-bold'>
              Self Introduction (Interests, Skils, etc...)
            </h3>
            <div className='markdown rounded-md border border-gray-300 p-2'>
              <ReactMarkdown>
                {data?.applications_by_pk?.student.self_introduction!}
              </ReactMarkdown>
            </div>
          </div>

          <h2 className='col-span-2 mb-1 mt-4  bg-gray-200 text-2xl font-bold'>
            Detail of Opportunity
          </h2>
          <div>
            <h3 className='text-lg font-bold'>Location</h3>
            <span>
              {data?.applications_by_pk?.opportunity.city},{' '}
              {data?.applications_by_pk?.partner.address_country}
            </span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Available Slots</h3>
            <span>{data?.applications_by_pk?.opportunity.slots}</span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Start Date</h3>
            <span>
              {formatDate(
                new Date(data?.applications_by_pk?.opportunity.date_from)
              )}
            </span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>End Date</h3>
            <span>
              {formatDate(
                new Date(data?.applications_by_pk?.opportunity.date_to)
              )}
            </span>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-bold'>Field</h3>
            <span>{data?.applications_by_pk?.opportunity.field}</span>
          </div>
          <div className='col-span-2 mb-6'>
            <h3 className='text-lg font-bold'>Description</h3>
            <div className='markdown rounded-md border border-gray-300 p-2'>
              <ReactMarkdown>
                {data?.applications_by_pk?.opportunity.detail!}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </>
    </PageLoading>
  );
};

export default ApplicationDetailPage;
