import { NextPage } from 'next';
import Header from '../components/header/header.component';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/loading/loading.component';
import { useRouter } from 'next/router';
import { useRedirectHook } from './index.hooks';

const IndexPage: NextPage = () => {
  const { redirectUser } = useRedirectHook();
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  const loadMessage = isLoading
    ? 'Loading...'
    : !isAuthenticated
    ? 'Redirecting to login page...'
    : 'Redirecting to home...';

  if (!isLoading && !isAuthenticated) {
    loginWithRedirect();
  }

  if (!isLoading && isAuthenticated) {
    redirectUser();
  }

  return (
    <>
      <Header />
      <Loading message={loadMessage} />
    </>
  );
};

export default IndexPage;
