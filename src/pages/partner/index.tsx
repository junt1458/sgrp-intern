import { NextPage } from 'next';
import Header from '../../components/header/header.component';
import { useCallback, useMemo } from 'react';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';
import Button from '../../components/button/button.component';
import OpportunitiesView from '../../components/opportunities/opportunities.component';
import { useRouter } from 'next/router';
import {
  Applications,
  Opportunities,
  useGetAllApplicationsQuery,
  useGetOpportunitiesQuery,
} from '../../libs/graphql';
import ApplicationsView from '../../components/applications/applications';

const usePartnerHooks = () => {
  const router = useRouter();

  const onCreateNew = useCallback(() => {
    router.push('/partner/detail');
  }, [router]);

  return { onCreateNew };
};

const PartnerIndexPage: NextPage = () => {
  const { onCreateNew } = usePartnerHooks();
  const { isLoading, isAllowed } = useAuthHook(['partner'], true, true);

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
          Pending Applications
        </h1>
        <div className='screen-x mx-auto max-w-4xl py-2'>
          <ApplicationsView
            applications={
              result.data?.applications.filter(
                (f) => f.display_status === 3
              ) as Applications[]
            }
            key_prefix='pending_'
            hide_control={true}
          />
        </div>
        <h1 className='my-4 w-full text-center text-3xl'>Your Opportunities</h1>
        <div className='my-2 flex justify-center'>
          <Button color={'primary'} onClick={onCreateNew}>
            Create New
          </Button>
        </div>

        <div className='screen-x mx-auto max-w-4xl py-2'>
          <OpportunitiesView
            opportunities={data?.opportunities as Opportunities[]}
            key_prefix='my'
          />
        </div>
      </>
    </PageLoading>
  );
};

export default PartnerIndexPage;
