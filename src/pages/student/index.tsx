import { NextPage } from 'next';
import Header from '../../components/header/header.component';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';
import Button from '../../components/button/button.component';
import OpportunitiesView from '../../components/opportunities/opportunities.component';

const StudentIndexPage: NextPage = () => {
  const { isLoading, isAllowed } = useAuthHook(['student'], true, true);

  return (
    <PageLoading isLoading={isLoading} isPermissionError={!isAllowed}>
      <>
        <Header />

        <h1 className='my-4 w-full text-center text-3xl'>Your Applications</h1>

        <h1 className='my-4 w-full text-center text-3xl'>Opportunities</h1>

        <OpportunitiesView />
      </>
    </PageLoading>
  );
};

export default StudentIndexPage;
