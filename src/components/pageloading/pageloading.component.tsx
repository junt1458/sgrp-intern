import Button from '../button/button.component';
import ErrorIcon from '../error/erroricon.component';
import Header from '../header/header.component';
import Loading from '../loading/loading.component';

interface PageLoadingOptions {
  children: JSX.Element;
  isLoading: boolean;
  isPermissionError: boolean;
}

const PageLoading: React.FC<PageLoadingOptions> = ({
  children,
  isLoading,
  isPermissionError,
}) => {
  return isLoading ? (
    <>
      <Header />
      <Loading message='Loading...' />
    </>
  ) : isPermissionError ? (
    <>
      <Header />
      <ErrorIcon message='You do not have permission to view this page.' />
      <div className='my-2 flex justify-center'>
        <Button color={'primary'}>Back to home</Button>
      </div>
    </>
  ) : (
    children
  );
};

export default PageLoading;
