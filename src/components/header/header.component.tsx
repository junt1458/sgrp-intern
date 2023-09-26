import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useHeaderHook } from './header.hooks';
import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';
import { useAuthHook } from '../../libs/auth';

const Header: React.FC = () => {
  const { role, icon, name } = useAuthHook(
    ['register', 'partner', 'student', 'manager'],
    false,
    false
  );
  const { isLoading, isAuthenticated } = useAuth0();
  const { isOpen, onClickLogout, onClickProfile, toggleOpen } =
    useHeaderHook(role);

  return (
    <>
      <div className='fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between bg-slate-900 px-4 py-2 text-xl text-white'>
        <Link href='/'>Internship Application System</Link>
        {!isLoading && isAuthenticated ? (
          <button onClick={toggleOpen} title='Menu'>
            <img src={icon} alt='icon' className='my-2 h-10 w-10 rounded-3xl' />
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className='h-14 w-full py-2'></div>
      <div
        className='fixed right-0 top-14 w-64 rounded-b-xl border border-gray-500 bg-white'
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className='mx-2 w-full border-gray-500 py-2 text-left'>
          Hi, {name}
        </div>
        <button
          onClick={onClickProfile}
          title='Profile'
          className='mx-2 w-full border-t border-gray-500 py-2 text-left'
        >
          <AccountBoxIcon /> Profile
        </button>
        <button
          onClick={onClickLogout}
          title='Logout'
          className='mx-2 w-full border-t border-gray-500 py-2 text-left'
        >
          <LogoutIcon /> Logout
        </button>
      </div>
    </>
  );
};

export default Header;
