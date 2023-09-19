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
        <h1 className='my-4 w-full text-center text-3xl'>
          Pending Opportunities
        </h1>
        <h1 className='my-4 w-full text-center text-3xl'>
          Pending Applications
        </h1>
        <h1 className='my-4 w-full text-center text-3xl'>Open Opportunities</h1>
        <h1 className='my-4 w-full text-center text-3xl'>
          Closed Opportunities
        </h1>
      </>
    </PageLoading>
  );
};

export default ManagerIndexPage;
