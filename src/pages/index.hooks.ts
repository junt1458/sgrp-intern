import { useAuth0 } from '@auth0/auth0-react';
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
