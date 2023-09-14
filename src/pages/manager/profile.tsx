import { NextPage } from 'next';
import PageLoading from '../../components/pageloading/pageloading.component';
import { useAuthHook } from '../../libs/auth';
import Header from '../../components/header/header.component';
import { useCallback, useMemo, useState } from 'react';
import FormInput from '../../components/forminput/forminput.component';
import Button from '../../components/button/button.component';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { useAddManagerProfileMutation } from '../../libs/graphql';
import { useRouter } from 'next/router';

export const useProfileHook = (
  getAccessTokenSilently: () => Promise<string>,
  uid?: string,
  sid?: string
) => {
  const emailRegex = useMemo(
    () =>
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    []
  );

  const router = useRouter();
  const { reloadRole } = useAuthHook(['manager'], true);
  const [, addProfile] = useAddManagerProfileMutation();

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSending, setSending] = useState(false);

  const validate = useCallback(() => {
    setNameError('');
    setEmailError('');
    setPhoneError('');

    const nameBox = document.querySelector('#name') as HTMLInputElement;
    const emailBox = document.querySelector('#email') as HTMLInputElement;
    const phoneBox = document.querySelector('#tel') as HTMLInputElement;

    let valid = true;
    if (!nameBox.value) {
      valid = false;
      setNameError('Name is required.');
    }

    if (emailBox.value && !emailBox.value.match(emailRegex)) {
      valid = false;
      setEmailError('Email is invalid.');
    }

    if (phoneBox.value && !isValidPhoneNumber(phoneBox.value)) {
      valid = false;
      setPhoneError('Phone is invalid.');
    }

    return valid;
  }, [emailRegex]);

  const post = useCallback(async () => {
    const name = (document.querySelector('#name') as HTMLInputElement).value;
    const email = (document.querySelector('#email') as HTMLInputElement).value;
    const phone = (document.querySelector('#tel') as HTMLInputElement).value;

    setSending(true);
    if (!uid) {
      const result = await addProfile({
        name,
        email,
        phone,
        auth0_uid: sid,
      });
      if (result.error) {
        alert('Error: ' + result.error);
        setSending(false);
        return;
      }

      const newUid = result.data?.insert_managers_one?.manager_id;
      await fetch('/api/uid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + (await getAccessTokenSilently()),
        },
        body: JSON.stringify({
          uid: newUid,
        }),
      });

      await reloadRole();
      router.push('/manager');
    } else {
      console.log('edit');
    }
    setSending(false);

    console.log({ name, email, phone });
  }, [uid, sid, router, reloadRole, addProfile, getAccessTokenSilently]);

  const onClickSubmit = useCallback(() => {
    validate() && post();
  }, [validate, post]);

  return {
    nameError,
    emailError,
    phoneError,
    isSending,
    validate,
    post,
    onClickSubmit,
  };
};

const ManagerProfilePage: NextPage = () => {
  const { isLoading, isAllowed, uid, sid, getAccessTokenSilently } =
    useAuthHook(['manager'], true);
  const { nameError, emailError, phoneError, isSending, onClickSubmit } =
    useProfileHook(getAccessTokenSilently, uid, sid);

  return (
    <PageLoading isLoading={isLoading} isPermissionError={!isAllowed}>
      <>
        <Header />
        <h1 className='my-4 text-center text-3xl'>Your profile</h1>

        <div className='mx-auto grid max-w-4xl grid-cols-2'>
          <div className='col-span-2'>
            <FormInput
              id='name'
              type='text'
              label='Name'
              placeholder='John Doe'
              error={nameError}
              required
            />
          </div>
          <FormInput
            id='email'
            type='email'
            label='Email'
            placeholder='john@example.com'
            error={emailError}
          />
          <FormInput id='tel' type='tel' label='Phone' error={phoneError} />

          <div className='col-span-2 flex justify-end px-4'>
            <span className='text-red-800'>*</span>&nbsp;Required
          </div>
          <div className='col-span-2 flex justify-end px-4'>
            <Button
              color={'primary'}
              onClick={onClickSubmit}
              disabled={isSending}
            >
              Save
            </Button>
          </div>
          <div className='col-span-2 flex justify-end px-4'>
            {isSending ? 'Saving...' : ''}
          </div>
        </div>
      </>
    </PageLoading>
  );
};

export default ManagerProfilePage;
