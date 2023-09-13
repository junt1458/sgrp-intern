import { NextPage } from 'next';
import PageLoading from '../../components/pageloading/pageloading.component';
import { useAuthHook } from '../../libs/auth';
import Header from '../../components/header/header.component';

const ManagerProfilePage: NextPage = () => {
  const { isLoading, isAllowed } = useAuthHook(['manager'], true);

  return (
    <PageLoading isLoading={isLoading} isPermissionError={!isAllowed}>
      <>
        <Header />
        <span>test</span>
      </>
    </PageLoading>
  );
};

export default ManagerProfilePage;
