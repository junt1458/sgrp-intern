import { NextPage } from 'next';
import Header from '../../components/header/header.component';
import { useMyQueryQuery } from '../../libs/graphql';
import { useMemo } from 'react';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';

const PartnerIndexPage: NextPage = () => {
  const { isLoading, isAllowed } = useAuthHook(['partner'], true);

  const context = useMemo(
    () => ({
      additionalTypenames: [],
    }),
    []
  );

  const [result] = useMyQueryQuery({
    context,
  });

  console.log(result);
  return (
    <PageLoading isLoading={isLoading} isPermissionError={!isAllowed}>
      <>
        <Header />
        Partner Index Page.
      </>
    </PageLoading>
  );
};

export default PartnerIndexPage;
