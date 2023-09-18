import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

export const useHeaderHook = (role?: string) => {
  const router = useRouter();
  const { logout } = useAuth0();
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((open) => !open);
  }, [setOpen]);

  const onClickProfile = useCallback(() => {
    setOpen(false);
    router.push(`/${role}/profile`);
  }, [router, role]);

  const onClickLogout = useCallback(() => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }, [logout]);

  return { isOpen, onClickLogout, onClickProfile, toggleOpen };
};
