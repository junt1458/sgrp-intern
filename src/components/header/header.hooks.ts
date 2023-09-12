import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

export const useLogoutHook = () => {
  const { logout } = useAuth0();
  const onClickLogout = useCallback(() => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }, [logout]);

  return { onClickLogout };
};
