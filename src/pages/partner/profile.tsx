import { NextPage } from 'next';
import PageLoading from '../../components/pageloading/pageloading.component';
import { useAuthHook } from '../../libs/auth';
import Header from '../../components/header/header.component';
import { useCallback, useMemo, useState } from 'react';
import FormInput from '../../components/forminput/forminput.component';
import Button from '../../components/button/button.component';
import { isValidPhoneNumber } from 'react-phone-number-input';
import {
  useAddPartnerProfileMutation,
  useGetPartnerProfileQuery,
  useUpdatePartnerProfileMutation,
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
  const zipRegex = useMemo(() => /^[\d\-]+$/, []);

  const router = useRouter();
  const { reloadRole } = useAuthHook(['partner'], true);
  const [, addProfile] = useAddPartnerProfileMutation();
  const [, updateProfile] = useUpdatePartnerProfileMutation();

  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [zipError, setZipError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [cnameError, setCNameError] = useState('');
  const [cemailError, setCEmailError] = useState('');
  const [ctelError, setCTelError] = useState('');
  const [isSending, setSending] = useState(false);

  const validate = useCallback(() => {
    setNameError('');
    setAddressError('');
    setZipError('');
    setCountryError('');
    setCNameError('');
    setCEmailError('');
    setCTelError('');

    const nameInput = document.querySelector('#name') as HTMLInputElement;
    const address1Input = document.querySelector(
      '#address1'
    ) as HTMLInputElement;
    const address2Input = document.querySelector(
      '#address2'
    ) as HTMLInputElement;
    const zipInput = document.querySelector('#zipcode') as HTMLInputElement;
    const countryInput = document.querySelector('#country') as HTMLInputElement;
    const cnameInput = document.querySelector('#cname') as HTMLInputElement;
    const cemailInput = document.querySelector('#cemail') as HTMLInputElement;
    const ctelInput = document.querySelector('#ctel') as HTMLInputElement;

    let valid = true;
    if (!nameInput.value) {
      valid = false;
      setNameError('Display Name is required.');
    }

    if (!address1Input.value) {
      valid = false;
      setAddressError('Address 1 is required.');
    }

    if (!zipInput.value) {
      valid = false;
      setZipError('Zip Code is required.');
    } else if (zipInput.value && !zipInput.value.match(zipRegex)) {
      valid = false;
      setZipError('Zip Code is invalid.');
    }

    if (!countryInput.value) {
      valid = false;
      setCountryError('Country is required.');
    }

    if (!cnameInput.value) {
      valid = false;
      setCNameError('Contact Person Name is required.');
    }

    if (!cemailInput.value) {
      valid = false;
      setCEmailError('Contact Email is required.');
    } else if (cemailInput.value && !cemailInput.value.match(emailRegex)) {
      valid = false;
      setCEmailError('Contact Email is invalid.');
    }

    if (!ctelInput.value) {
      valid = false;
      setCTelError('Contact Phone is required.');
    } else if (ctelInput.value && !isValidPhoneNumber(ctelInput.value)) {
      valid = false;
      setCTelError('Contact Phone is invalid.');
    }

    return valid;
  }, [emailRegex, zipRegex]);

  const post = useCallback(async () => {
    const name = (document.querySelector('#name') as HTMLInputElement).value;
    const address1 = (document.querySelector('#address1') as HTMLInputElement)
      .value;
    const address2 = (document.querySelector('#address2') as HTMLInputElement)
      .value;
    const zip = (document.querySelector('#zipcode') as HTMLInputElement).value;
    const country = (document.querySelector('#country') as HTMLInputElement)
      .value;
    const cname = (document.querySelector('#cname') as HTMLInputElement).value;
    const cemail = (document.querySelector('#cemail') as HTMLInputElement)
      .value;
    const ctel = (document.querySelector('#ctel') as HTMLInputElement).value;

    setSending(true);
    if (!uid) {
      const result = await addProfile({
        display_name: name,
        address1,
        address2,
        zip_code: zip,
        country,
        c_name: cname,
        c_email: cemail,
        c_tel: ctel,
        auth0_uid: sid,
      });
      if (result.error) {
        alert('Error: ' + result.error);
        setSending(false);
        return;
      }

      const newUid = result.data?.insert_partners_one?.partner_id;
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
      router.push('/partner');
    } else {
      const result = await updateProfile({
        display_name: name,
        address1,
        address2,
        zip_code: zip,
        country,
        c_name: cname,
        c_email: cemail,
        c_tel: ctel,
        uid,
      });
      if (result.error) {
        alert('Error: ' + result.error);
        setSending(false);
        return;
      }

      router.push('/partner');
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
    addressError,
    zipError,
    countryError,
    cnameError,
    cemailError,
    ctelError,
    isSending,
    validate,
    post,
    onClickSubmit,
  };
};

const PartnerProfilePage: NextPage = () => {
  const { isLoading, isAllowed, uid, sid, getAccessTokenSilently } =
    useAuthHook(['partner'], true);
  const {
    nameError,
    addressError,
    zipError,
    countryError,
    cnameError,
    cemailError,
    ctelError,
    isSending,
    onClickSubmit,
  } = useProfileHook(getAccessTokenSilently, uid, sid);

  const context = useMemo(
    () => ({
      additionalTypenames: ['partner'],
    }),
    []
  );

  const [{ fetching, data }] = useGetPartnerProfileQuery({
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
              label='Display Name'
              placeholder='Example University'
              error={nameError}
              defaultValue={data?.partners[0].display_name!}
              required
            />
          </div>

          <div className='col-span-2'>
            <FormInput
              id='address1'
              type='text'
              label='Address 1'
              defaultValue={data?.partners[0].address_line1!}
              error={addressError}
              required
            />
          </div>

          <div className='col-span-2'>
            <FormInput
              id='address2'
              type='text'
              label='Address 2 (Optional)'
              defaultValue={data?.partners[0].address_line2!}
            />
          </div>

          <FormInput
            id='zipcode'
            type='text'
            label='Zip Code'
            defaultValue={data?.partners[0].address_zipcode!}
            error={zipError}
            required
          />

          <FormInput
            id='country'
            label='Country / Region'
            type='option'
            error={countryError}
            options={countries}
            defaultValue={data?.partners[0].address_country!}
            required
          />

          <div className='col-span-2'>
            <FormInput
              id='cname'
              type='text'
              label='Contact Person Name'
              placeholder='John Doe'
              error={cnameError}
              defaultValue={data?.partners[0].contact_name!}
              required
            />
          </div>

          <FormInput
            id='cemail'
            type='email'
            label='Contact Email'
            placeholder='john@example.com'
            defaultValue={data?.partners[0].contact_email!}
            error={cemailError}
            required
          />
          <FormInput
            id='ctel'
            type='tel'
            label='Contact Phone'
            error={ctelError}
            defaultValue={data?.partners[0].contact_phone!}
            required
          />

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

export default PartnerProfilePage;
