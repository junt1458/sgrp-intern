import { NextPage } from 'next';
import Header from '../../components/header/header.component';
import { useCallback, useMemo } from 'react';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';
import Button from '../../components/button/button.component';
import OpportunitiesView from '../../components/opportunities/opportunities.component';
import { useRouter } from 'next/router';
import { Opportunities, useGetOpportunitiesQuery } from '../../libs/graphql';

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

  return (
    <PageLoading
      isLoading={isLoading || fetching}
      isPermissionError={!isAllowed}
    >
      <>
        <Header />
        <h1 className='my-4 w-full text-center text-3xl'>
          Pending Applications
        </h1>
        <h1 className='my-4 w-full text-center text-3xl'>Your Opportunities</h1>
        <div className='my-2 flex justify-center'>
          <Button color={'primary'} onClick={onCreateNew}>
            Create New
          </Button>
        </div>

        <div className='screen-x mx-auto max-w-4xl py-2'>
          {!data?.opportunities.length ? (
            <div className='text-center text-xl'>- Nothing to show -</div>
          ) : (
            ''
          )}
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
