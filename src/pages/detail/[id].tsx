import { NextPage } from 'next';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';
import Header from '../../components/header/header.component';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/button/button.component';
import {
  useGetOpportunityQuery,
  useGetPartnerProfileQuery,
} from '../../libs/graphql';
import ReactMarkdown from 'react-markdown';
import { formatDate } from '../../libs/date';

const useDetailHook = () => {
  const router = useRouter();
  const { role } = useAuthHook(['student', 'partner', 'manager'], false, false);
  const onClickBack = useCallback(() => {
    router.push(`/${role}`);
  }, [router, role]);

  return { onClickBack };
};

const DetailPage: NextPage = () => {
  const router = useRouter();

  const { onClickBack } = useDetailHook();
  const { isLoading, isAllowed, role } = useAuthHook(
    ['student', 'partner', 'manager'],
    true,
    true
  );

  const { id } = router.query;
  const [{ data, fetching }] = useGetOpportunityQuery({
    variables: { id },
  });

  const [result] = useGetPartnerProfileQuery({
    variables: { uid: data?.opportunities_by_pk?.partner_id },
  });
  console.log(result);

  return (
    <PageLoading
      isLoading={isLoading || fetching || result.fetching}
      isPermissionError={!isAllowed}
      isGeneralError={!isLoading && !fetching && !data?.opportunities_by_pk}
      errorMessage='Opportunity Not Found'
    >
      <>
        <Header />
        {role === 'partner' ? (
          <div className='screen-x mx-auto my-4 max-w-4xl'>
            <div className='mx-4 rounded-md border border-gray-400 p-3'>
              Management Panel (Partner)
            </div>
          </div>
        ) : role === 'manager' ? (
          <div className='screen-x mx-auto my-4 max-w-4xl'>
            <div className='mx-4 rounded-md border border-gray-400 p-3'>
              Management Panel (Manager)
            </div>
          </div>
        ) : role === 'student' ? (
          <div className='screen-x mx-auto my-4 max-w-4xl'>
            <div className='mx-4 rounded-md border border-gray-400 p-3'>
              Management Panel (Student)
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
