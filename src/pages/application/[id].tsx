import { NextPage } from 'next';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';
import Header from '../../components/header/header.component';

const ApplicationDetailPage: NextPage = () => {
  const { isLoading, isAllowed, role } = useAuthHook(
    ['student', 'partner', 'manager'],
    true,
    true
  );
  return (
    <PageLoading isLoading={isLoading} isPermissionError={!isAllowed}>
      <>
        <Header />
        AA
      </>
    </PageLoading>
  );
};

export default ApplicationDetailPage;
