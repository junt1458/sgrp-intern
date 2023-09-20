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

  const onClickExport = useCallback(() => {
    alert('TODO: Process for Exporting.');

    // https://medium.com/@aalam-info-solutions-llp/how-to-excel-export-in-react-js-481b15b961e3
    // https://www.npmjs.com/package/sheetjs-style?source=post_page-----481b15b961e3--------------------------------
    // https://www.npmjs.com/package/file-saver?source=post_page-----481b15b961e3--------------------------------
  }, []);

  return { isOpen, onClickLogout, onClickProfile, toggleOpen, onClickExport };
};
