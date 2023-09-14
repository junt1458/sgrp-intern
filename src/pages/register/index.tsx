import { NextPage } from 'next';
import Header from '../../components/header/header.component';
import Button from '../../components/button/button.component';
import Input from '../../components/input/input.component';
import { useCallback, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';

export const useRegister = () => {
  const { reloadRole } = useAuthHook(['register'], true);
  const router = useRouter();
  const { getAccessTokenSilently } = useAuth0();
  const [status, setStatus] = useState('');

  const onClick = useCallback(async () => {
    const regInput = document.querySelector('#reg_code') as HTMLInputElement;
    setStatus('Communicating with server...');

    const token = await getAccessTokenSilently();
    const req = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        code: regInput.value,
      }),
    });

    const res = await req.json();
    if (!req.ok) {
      setStatus(res.error);
      return;
    }

    await reloadRole();
    router.push(`/${res.role}/profile`);
  }, [getAccessTokenSilently, router, reloadRole]);

  return { onClick, status };
};

const RegisterIndexPage: NextPage = () => {
  const { onClick, status } = useRegister();
  const { isLoading, isAllowed } = useAuthHook(['register'], true);

  return (
    <PageLoading isLoading={isLoading} isPermissionError={!isAllowed}>
      <>
        <Header />
        <div className='my-4'>
          <h1 className='text-center text-3xl'>
            No account found in our system.
          </h1>
          <h2 className='text-center text-xl'>
            Please enter registration code provided by administrator.
          </h2>
        </div>

        <div className='my-8 flex items-center justify-center'>
          <Input type='text' id='reg_code' placeholder='Registration Code' />
          <Button
            color='primary'
            onClick={onClick}
            disabled={status === 'Communicating with server...'}
          >
            Submit
          </Button>
        </div>

        <div className='text-center'>{status}</div>
      </>
    </PageLoading>
  );
};

export default RegisterIndexPage;
