import { NextPage } from 'next';
import Header from '../components/header/header.component';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/loading/loading.component';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const useRedirectHook = () => {
  const router = useRouter();
  const { getAccessTokenSilently } = useAuth0();

  const redirectUser = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const payload = JSON.parse(atob(token.split('.')[1]));
    const role =
      payload['https://hasura.io/jwt/claims']['x-hasura-default-role'];

    router.push(`/${role}`);
  }, [getAccessTokenSilently, router]);

  return { redirectUser };
};

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
