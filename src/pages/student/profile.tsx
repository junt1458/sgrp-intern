import { NextPage } from 'next';
import PageLoading from '../../components/pageloading/pageloading.component';
import { useAuthHook } from '../../libs/auth';
import Header from '../../components/header/header.component';
import { useCallback, useMemo, useState } from 'react';
import FormInput from '../../components/forminput/forminput.component';
import Button from '../../components/button/button.component';
import { isValidPhoneNumber } from 'react-phone-number-input';
import {
  useAddStudentProfileMutation,
  useGetStudentProfileQuery,
  useUpdateStudentProfileMutation,
} from '../../libs/graphql';
import { useRouter } from 'next/router';
import { countries } from '../../libs/countries';

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
  const { reloadRole } = useAuthHook(['partner'], true);
  const [, addProfile] = useAddStudentProfileMutation();
  const [, updateProfile] = useUpdateStudentProfileMutation();

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [birthdayError, setBirthdayError] = useState('');
  const [expiryError, setExpiryError] = useState('');
  const [isSending, setSending] = useState(false);

  const validate = useCallback(() => {
    setNameError('');
    setEmailError('');
    setPhoneError('');
    setBirthdayError('');
    setExpiryError('');

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const nameInput = document.querySelector('#name') as HTMLInputElement;
    const emailInput = document.querySelector('#email') as HTMLInputElement;
    const phoneInput = document.querySelector('#tel') as HTMLInputElement;
    const birthdayInput = document.querySelector(
      '#birthday'
    ) as HTMLInputElement;
    const pExpInput = document.querySelector(
      '#passport_expiry'
    ) as HTMLInputElement;
    const pCntInput = document.querySelector(
      '#passport_country'
    ) as HTMLInputElement;

    let valid = true;
    if (!nameInput.value) {
      valid = false;
      setNameError('Name is required.');
    }

    if (emailInput.value && !emailInput.value.match(emailRegex)) {
      valid = false;
      setEmailError('Email is invalid.');
    }

    if (phoneInput.value && !isValidPhoneNumber(phoneInput.value)) {
      valid = false;
      setPhoneError('Phone is invalid.');
    }

    if (birthdayInput.valueAsDate && birthdayInput.valueAsDate > today) {
      valid = false;
      setBirthdayError('Cannot specify future date');
    }

    if (pExpInput.valueAsDate && pExpInput.valueAsDate < today) {
      valid = false;
      setExpiryError('Cannot specify past date');
    }

    return valid;
  }, [emailRegex]);

  const post = useCallback(async () => {
    const name = (document.querySelector('#name') as HTMLInputElement).value;
    const email = (document.querySelector('#email') as HTMLInputElement).value;
    const phone = (document.querySelector('#tel') as HTMLInputElement).value;
    const gender = (document.querySelector('#gender') as HTMLInputElement)
      .value;
    const birthday = (document.querySelector('#birthday') as HTMLInputElement)
      .valueAsDate;
    const dept = (document.querySelector('#department') as HTMLInputElement)
      .value;
    const major = (document.querySelector('#major') as HTMLInputElement).value;
    const pNo = (document.querySelector('#passport_no') as HTMLInputElement)
      .value;
    const pExp = (
      document.querySelector('#passport_expiry') as HTMLInputElement
    ).valueAsDate;
    const pCnt = (
      document.querySelector('#passport_country') as HTMLInputElement
    ).value;
    const selfIntro = (
      document.querySelector('#self_introduction') as HTMLInputElement
    ).value;

    setSending(true);
    if (!uid) {
      const result = await addProfile({
        name,
        email,
        phone,
        gender,
        birthday,
        department: dept,
        major,
        passport_no: pNo,
        passport_country: pCnt,
        passport_expires: pExp,
        auth0_uid: sid,
        self_introduction: selfIntro,
      });
      if (result.error) {
        alert('Error: ' + result.error);
        setSending(false);
        return;
      }

      const newUid = result.data?.insert_students_one?.client_id;
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
      router.push('/student');
    } else {
      const result = await updateProfile({
        name,
        email,
        phone,
        gender,
        birthday,
        department: dept,
        major,
        passport_no: pNo,
        passport_country: pCnt,
        passport_expires: pExp,
        uid,
        self_introduction: selfIntro,
      });
      if (result.error) {
        alert('Error: ' + result.error);
        setSending(false);
        return;
      }

      router.push('/student');
    }
    setSending(false);
  }, [
    uid,
    addProfile,
    sid,
    getAccessTokenSilently,
    reloadRole,
    router,
    updateProfile,
  ]);

  const onClickSubmit = useCallback(() => {
    validate() && post();
  }, [validate, post]);

  return {
    nameError,
    emailError,
    phoneError,
    expiryError,
    birthdayError,
    isSending,
    validate,
    post,
    onClickSubmit,
  };
};

const StudentProfilePage: NextPage = () => {
  const { isLoading, isAllowed, uid, sid, getAccessTokenSilently } =
    useAuthHook(['student'], true);
  const {
    nameError,
    emailError,
    phoneError,
    expiryError,
    birthdayError,
    isSending,
    onClickSubmit,
  } = useProfileHook(getAccessTokenSilently, uid, sid);

  const context = useMemo(
    () => ({
      additionalTypenames: ['students'],
    }),
    []
  );

  const [{ fetching, data }] = useGetStudentProfileQuery({
    context,
    variables: { uid },
  });

  return (
    <PageLoading
      isLoading={isLoading || fetching}
      isPermissionError={!isAllowed}
    >
      <>
        <Header />
        <h1 className='my-4 text-center text-3xl'>Your profile</h1>

        <div className='screen-x mx-auto grid max-w-4xl grid-cols-2'>
          <div className='col-span-2'>
            <FormInput
              id='name'
              type='text'
              label='Name'
              placeholder='John Doe'
              error={nameError}
              defaultValue={data?.students[0].name!}
              required
            />
          </div>

          <FormInput
            id='email'
            type='email'
            label='Email'
            placeholder='john@example.com'
            defaultValue={data?.students[0].email!}
            error={emailError}
          />
          <FormInput
            id='tel'
            type='tel'
            label='Phone'
            error={phoneError}
            defaultValue={data?.students[0].phone!}
          />

          <FormInput
            id='gender'
            label='Gender'
            type='option'
            options={['', 'Male', 'Female', 'Other']}
            defaultValue={data?.students[0].gender!}
          />
          <FormInput
            id='birthday'
            label='Date of Birth'
            type='date'
            error={birthdayError}
            defaultValue={data?.students[0].birthday!}
          />

          <FormInput
            id='passport_no'
            label='Passport No.'
            type='text'
            defaultValue={data?.students[0].passport_no!}
          />
          <FormInput
            id='passport_expiry'
            label='Passport Expiry'
            type='date'
            error={expiryError}
            defaultValue={data?.students[0].passport_expires!}
          />

          <FormInput
            id='passport_country'
            label='Passport Country'
            type='option'
            options={countries}
            defaultValue={data?.students[0].passport_country!}
          />

          <div></div>

          <FormInput
            id='department'
            label='Department of School'
            type='text'
            placeholder='Department of Computer Engineering'
            defaultValue={data?.students[0].department!}
          />
          <FormInput
            id='major'
            label='Major field'
            type='text'
            placeholder='Computer Science'
            defaultValue={data?.students[0].major!}
          />

          <div className='col-span-2'>
            <FormInput
              id='self_introduction'
              label='Self Introduction (Interests, Skils, etc...) (Markdown)'
              type='textarea'
              rows={5}
              defaultValue={data?.students[0].self_introduction!}
            />
          </div>

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

export default StudentProfilePage;
