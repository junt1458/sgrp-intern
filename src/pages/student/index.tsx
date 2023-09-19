import { NextPage } from 'next';
import Header from '../../components/header/header.component';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';
import Button from '../../components/button/button.component';
import OpportunitiesView from '../../components/opportunities/opportunities.component';
import { Opportunities, useGetOpportunitiesQuery } from '../../libs/graphql';

const StudentIndexPage: NextPage = () => {
  const { isLoading, isAllowed } = useAuthHook(['student'], true, true);

  const [{ data, fetching }] = useGetOpportunitiesQuery();

  return (
    <PageLoading
      isLoading={isLoading || fetching}
      isPermissionError={!isAllowed}
    >
      <>
        <Header />

        <h1 className='my-4 w-full text-center text-3xl'>Your Applications</h1>

        <h1 className='my-4 w-full text-center text-3xl'>Opportunities</h1>

        <div className='screen-x mx-auto max-w-4xl py-2'>
          {!data?.opportunities.length ? (
            <div className='text-center text-xl'>- Nothing to show -</div>
          ) : (
            ''
          )}
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
