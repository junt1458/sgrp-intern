import { NextPage } from 'next';
import Header from '../../components/header/header.component';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';

const StudentIndexPage: NextPage = () => {
  const { isLoading, isAllowed } = useAuthHook(['student'], true, true);
  return (
    <PageLoading isLoading={isLoading} isPermissionError={!isAllowed}>
      <>
        <Header />
        Student Index Page.
      </>
    </PageLoading>
  );
};

export default StudentIndexPage;
