import LogoutIcon from '@mui/icons-material/Logout';
import { useLogoutHook } from './header.hooks';
import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';

const Header: React.FC = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  const { onClickLogout } = useLogoutHook();

  return (
    <>
      <div className='fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between bg-slate-900 px-4 py-2 text-xl text-white'>
        <Link href='/'>Internship Application System</Link>
        {!isLoading && isAuthenticated ? (
          <button onClick={onClickLogout} title='Logout'>
            <LogoutIcon />
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className='h-14 w-full py-2'></div>
    </>
  );
};

export default Header;
