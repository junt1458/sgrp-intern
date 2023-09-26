import { NextPage } from 'next';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';
import Header from '../../components/header/header.component';
import {
  Applications,
  Opportunities,
  useGetOpportunityApplicationsQuery,
} from '../../libs/graphql';
import { useRouter } from 'next/router';
import Button from '../../components/button/button.component';
import ApplicationsView from '../../components/applications/applications';
import { exportCSV } from '../../libs/export';

const ApplicationListPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, isAllowed, role } = useAuthHook(
    ['partner', 'manager'],
    true,
    true
  );

  const [{ data, fetching }] = useGetOpportunityApplicationsQuery({
    variables: { opportunity_id: id },
  });

  return (
    <PageLoading
      isLoading={isLoading || fetching}
      isPermissionError={!isAllowed}
      isGeneralError={!fetching && data?.opportunities_by_pk == null}
      errorMessage='Opportunity Not Found'
    >
      <>
        <Header />
        <h1 className='my-4 w-full text-center text-3xl'>
          Applications for &quot;
          {data?.opportunities_by_pk?.partner.display_name} -{' '}
          {data?.opportunities_by_pk?.field}&quot;
        </h1>
        <div className='my-2 flex justify-center'>
          <Button
            color='primary'
            onClick={() =>
              router.push(
                '/detail/' + data?.opportunities_by_pk?.opportunity_id
              )
            }
          >
            Back to Home
          </Button>
          <div className='ml-2'>
            <Button
              color='action'
              onClick={() =>
                exportCSV(
                  data?.opportunities_by_pk as Opportunities,
                  data?.applications as Applications[]
                )
              }
            >
              Export List
            </Button>
          </div>
        </div>
        <div className='screen-x mx-auto max-w-4xl py-2'>
          <ApplicationsView
            applications={data?.applications as Applications[]}
            key_prefix='all'
            role={role!}
          />
        </div>
      </>
    </PageLoading>
  );
};

export default ApplicationListPage;
