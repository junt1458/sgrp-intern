import { NextPage } from 'next';
import Header from '../../components/header/header.component';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';

const ManagerIndexPage: NextPage = () => {
  const { isLoading, isAllowed } = useAuthHook(['manager'], true, true);
  return (
    <PageLoading isLoading={isLoading} isPermissionError={!isAllowed}>
      <>
        <Header />
        Manager Index Page.
      </>
    </PageLoading>
  );
};

export default ManagerIndexPage;
