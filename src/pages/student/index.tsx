import { NextPage } from 'next';
import Header from '../../components/header/header.component';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';
import Button from '../../components/button/button.component';
import OpportunitiesView from '../../components/opportunities/opportunities.component';
import {
  Applications,
  Opportunities,
  useGetAllApplicationsQuery,
  useGetOpportunitiesQuery,
} from '../../libs/graphql';
import ApplicationsView from '../../components/applications/applications';

const StudentIndexPage: NextPage = () => {
  const { isLoading, isAllowed } = useAuthHook(['student'], true, true);

  const [{ data, fetching }] = useGetOpportunitiesQuery();
  const [result] = useGetAllApplicationsQuery();

  return (
    <PageLoading
      isLoading={isLoading || fetching || result.fetching}
      isPermissionError={!isAllowed}
    >
      <>
        <Header />

        <h1 className='my-4 w-full text-center text-3xl'>Your Applications</h1>
        <div className='screen-x mx-auto max-w-4xl py-2'>
          <ApplicationsView
            applications={result.data?.applications as Applications[]}
            key_prefix='my_'
            hide_control={true}
          />
        </div>

        <h1 className='my-4 w-full text-center text-3xl'>Opportunities</h1>

        <div className='screen-x mx-auto max-w-4xl py-2'>
          <OpportunitiesView
            opportunities={data?.opportunities as Opportunities[]}
            key_prefix='open'
          />
        </div>
      </>
    </PageLoading>
  );
};

export default StudentIndexPage;
