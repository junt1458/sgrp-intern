import { NextPage } from 'next';
import Header from '../../components/header/header.component';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';
import {
  Applications,
  Opportunities,
  useGetAllApplicationsQuery,
  useGetOpportunitiesQuery,
} from '../../libs/graphql';
import OpportunitiesView from '../../components/opportunities/opportunities.component';
import ApplicationsView from '../../components/applications/applications';

const ManagerIndexPage: NextPage = () => {
  const { isLoading, isAllowed, role } = useAuthHook(['manager'], true, true);
  const [{ data, fetching }] = useGetOpportunitiesQuery();
  const [result] = useGetAllApplicationsQuery();

  return (
    <PageLoading
      isLoading={isLoading || fetching || result.fetching}
      isPermissionError={!isAllowed}
    >
      <>
        <Header />
        <h1 className='my-4 w-full text-center text-3xl'>
          Pending Opportunities
        </h1>
        <div className='screen-x mx-auto max-w-4xl py-2'>
          <OpportunitiesView
            opportunities={
              data?.opportunities.filter(
                (f) => f.display_status === 2
              ) as Opportunities[]
            }
            key_prefix='pending'
            hide_control={true}
            role={role!}
          />
        </div>
        <h1 className='my-4 w-full text-center text-3xl'>
          Pending Applications
        </h1>
        <div className='screen-x mx-auto max-w-4xl py-2'>
          <ApplicationsView
            applications={
              result.data?.applications.filter(
                (f) => f.display_status === 0
              ) as Applications[]
            }
            key_prefix='pending_'
            hide_control={true}
            role={role!}
          />
        </div>
        <h1 className='my-4 w-full text-center text-3xl'>Opportunities</h1>
        <div className='screen-x mx-auto max-w-4xl py-2'>
          <OpportunitiesView
            opportunities={data?.opportunities as Opportunities[]}
            key_prefix='open'
            role={role!}
          />
        </div>
      </>
    </PageLoading>
  );
};

export default ManagerIndexPage;
