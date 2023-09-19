import Button from '../button/button.component';
import ErrorIcon from '../error/erroricon.component';
import Header from '../header/header.component';
import Loading from '../loading/loading.component';
import { useBackButton } from './pageloading.hooks';

interface PageLoadingOptions {
  children: JSX.Element;
  isLoading: boolean;
  isPermissionError: boolean;
  isGeneralError?: boolean;
  errorMessage?: string;
}

const PageLoading: React.FC<PageLoadingOptions> = ({
  children,
  isLoading,
  isPermissionError,
  isGeneralError,
  errorMessage,
}) => {
  const { onBackClicked } = useBackButton();

  return isGeneralError ? (
    <>
      <Header />
      <ErrorIcon message={errorMessage!} />
      <div className='my-2 flex justify-center'>
        <Button color={'primary'} onClick={onBackClicked}>
          Back to Home
        </Button>
      </div>
    </>
  ) : isLoading ? (
    <>
      <Header />
      <Loading message='Loading...' />
    </>
  ) : isPermissionError ? (
    <>
      <Header />
      <ErrorIcon message='You do not have permission to view this page.' />
      <div className='my-2 flex justify-center'>
        <Button color={'primary'} onClick={onBackClicked}>
          Back to Home
        </Button>
      </div>
    </>
  ) : (
    children
  );
};

export default PageLoading;
