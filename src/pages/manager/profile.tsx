import { NextPage } from 'next';
import PageLoading from '../../components/pageloading/pageloading.component';
import { useAuthHook } from '../../libs/auth';
import Header from '../../components/header/header.component';
import { useState } from 'react';
import FormInput from '../../components/forminput/forminput.component';

const ManagerProfilePage: NextPage = () => {
  const { isLoading, isAllowed, uid } = useAuthHook(['manager'], true);

  return (
    <PageLoading isLoading={isLoading} isPermissionError={!isAllowed}>
      <>
        <Header />
        <h1 className='my-4 text-center text-3xl'>Edit profile</h1>
        <FormInput
          id={'test'}
          type={'tel'}
          label='Phone number'
          error='tes3t'
        />
        <FormInput
          id={'test'}
          type={'text'}
          placeholder='E'
          label='Name'
          required
          error='test'
        />
        <FormInput
          id={'test'}
          type={'date'}
          placeholder='E'
          label='Name'
          required
          error='test2'
        />
        <div className=''></div>
        <span>test</span>
      </>
    </PageLoading>
  );
};

export default ManagerProfilePage;
