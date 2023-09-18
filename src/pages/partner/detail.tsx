import { NextPage } from 'next';
import { useAuthHook } from '../../libs/auth';
import PageLoading from '../../components/pageloading/pageloading.component';
import Header from '../../components/header/header.component';
import FormInput from '../../components/forminput/forminput.component';
import Button from '../../components/button/button.component';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import {
  useAddOpportunityMutation,
  useGetOpportunityQuery,
  useUpdateOpportunityMutation,
} from '../../libs/graphql';

const usePartnerDetailPageHook = () => {
  const { uid } = useAuthHook(['partner'], true, true);
  const [cityError, setCityError] = useState('');
  const [slotError, setSlotError] = useState('');
  const [date1Error, setDate1Error] = useState('');
  const [date2Error, setDate2Error] = useState('');
  const [detailError, setDetailError] = useState('');
  const [isSending, setSending] = useState(false);

  const [, addDetail] = useAddOpportunityMutation();
  const [, updateDetail] = useUpdateOpportunityMutation();

  const router = useRouter();
  const { id } = router.query;

  const onClickBack = useCallback(() => {
    router.push('/partner');
  }, [router]);

  const validate = useCallback(() => {
    setCityError('');
    setSlotError('');
    setDate1Error('');
    setDate2Error('');
    setDetailError('');

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const city = (document.querySelector('#city') as HTMLInputElement).value;
    const slots = Number.parseInt(
      (document.querySelector('#slots') as HTMLInputElement).value
    );
    const date_start = (
      document.querySelector('#date_start') as HTMLInputElement
    ).valueAsDate;
    const date_end = (document.querySelector('#date_end') as HTMLInputElement)
      .valueAsDate;
    const detail = (document.querySelector('#detail') as HTMLInputElement)
      .value;

    let valid = true;
    if (!city) {
      valid = false;
      setCityError('City is required.');
    }

    if (Number.isNaN(slots) || slots <= 0) {
      valid = false;
      setSlotError('Available Slots is invalid.');
    }

    if (!date_start) {
      valid = false;
      setDate1Error('Start Date is required.');
    } else if (date_start <= today) {
      valid = false;
      setDate1Error('Cannot specify past date.');
    }

    if (!date_end) {
      valid = false;
      setDate2Error('End Date is required.');
    } else if (date_start && date_start > date_end) {
      valid = false;
      setDate2Error('End Date is invalid.');
    }

    if (!detail) {
      valid = false;
      setDetailError('Detail is required.');
    }

    return valid;
  }, []);

  const post = useCallback(async () => {
    setSending(true);
    const city = (document.querySelector('#city') as HTMLInputElement).value;
    const slots = Number.parseInt(
      (document.querySelector('#slots') as HTMLInputElement).value
    );
    const date_start = (
      document.querySelector('#date_start') as HTMLInputElement
    ).valueAsDate;
    const date_end = (document.querySelector('#date_end') as HTMLInputElement)
      .valueAsDate;
    const detail = (document.querySelector('#detail') as HTMLInputElement)
      .value;

    if (id == undefined) {
      const data = await addDetail({
        city,
        slots,
        date_start: date_start || new Date(),
        date_end: date_end || new Date(),
        detail,
        partner_id: uid,
        status: 1,
      });

      if (data.error) {
        alert('Error: ' + data.error);
        setSending(false);
        return;
      }
      router.push(
        '/detail/' + data.data?.insert_opportunities_one?.opportunity_id
      );
    } else {
      const data = await updateDetail({
        opportunity_id: id,
        city,
        slots,
        date_start: date_start || new Date(),
        date_end: date_end || new Date(),
        detail,
        status: 0,
      });

      if (data.error) {
        alert('Error: ' + data.error);
        setSending(false);
        return;
      }
      router.push(
        '/detail/' + data.data?.update_opportunities_by_pk?.opportunity_id
      );
    }

    setSending(false);
  }, [addDetail, id, router, uid, updateDetail]);

  const onClickPost = useCallback(() => {
    validate() && post();
  }, [validate, post]);

  const onClickDraft = useCallback(async () => {
    setSending(true);
    const city = (document.querySelector('#city') as HTMLInputElement).value;
    let slots = Number.parseInt(
      (document.querySelector('#slots') as HTMLInputElement).value
    );
    slots = Number.isNaN(slots) ? 0 : slots;
    const date_start = (
      document.querySelector('#date_start') as HTMLInputElement
    ).valueAsDate;
    const date_end = (document.querySelector('#date_end') as HTMLInputElement)
      .valueAsDate;
    const detail = (document.querySelector('#detail') as HTMLInputElement)
      .value;

    if (id == undefined) {
      const data = await addDetail({
        city,
        slots,
        date_start: date_start || new Date(),
        date_end: date_end || new Date(),
        detail,
        partner_id: uid,
        status: 0,
      });

      if (data.error) {
        alert('Error: ' + data.error);
        setSending(false);
        return;
      }
      router.push('/partner');
    } else {
      const data = await updateDetail({
        opportunity_id: id,
        city,
        slots,
        date_start: date_start || new Date(),
        date_end: date_end || new Date(),
        detail,
        status: 0,
      });

      if (data.error) {
        alert('Error: ' + data.error);
        setSending(false);
        return;
      }
      router.push('/partner');
    }

    setSending(false);
  }, [addDetail, id, router, uid, updateDetail]);

  return {
    isSending,
    cityError,
    slotError,
    date1Error,
    date2Error,
    detailError,
    onClickBack,
    onClickPost,
    onClickDraft,
    validate,
    post,
  };
};

const PartnerDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    isSending,
    cityError,
    slotError,
    date1Error,
    date2Error,
    detailError,
    onClickBack,
    onClickDraft,
    onClickPost,
  } = usePartnerDetailPageHook();
  const { isLoading, isAllowed } = useAuthHook(['partner'], true, true);

  const [{ data, fetching }, executeQuery] = useGetOpportunityQuery({
    variables: { id },
  });

  return (
    <PageLoading
      isLoading={isLoading || fetching}
      isPermissionError={
        !isAllowed || data?.opportunities_by_pk?.display_status! > 1
      }
    >
      <>
        <Header />

        <h1 className='my-4 w-full text-center text-3xl'>
          {id == undefined ? 'Create New' : 'Edit'} Opportunity
        </h1>

        <div className='screen-x mx-auto grid max-w-4xl grid-cols-2'>
          <FormInput
            id='city'
            type='text'
            label='City'
            error={cityError}
            defaultValue={data?.opportunities_by_pk?.city}
            required
          />
          <FormInput
            id='slots'
            type='number'
            minValue={0}
            label='Available Slots'
            error={slotError}
            defaultValue={`${data?.opportunities_by_pk?.slots}`}
            required
          />
          <FormInput
            id='date_start'
            type='date'
            label='Start Date'
            error={date1Error}
            defaultValue={data?.opportunities_by_pk?.date_from!}
            required
          />
          <FormInput
            id='date_end'
            type='date'
            label='End Date'
            error={date2Error}
            defaultValue={data?.opportunities_by_pk?.date_to!}
            required
          />
          <div className='col-span-2'>
            <FormInput
              id='detail'
              type='textarea'
              label='Internship Detail (Markdown)'
              rows={10}
              error={detailError}
              defaultValue={data?.opportunities_by_pk?.detail!}
              required
            />
          </div>
          <div className='col-span-2 flex justify-between px-4 py-2'>
            <div>
              <Button color='draft' onClick={onClickDraft} disabled={isSending}>
                Save as Draft
              </Button>
            </div>
            <div>
              <Button color='danger' onClick={onClickBack} disabled={isSending}>
                Back
              </Button>
              <div className='inline px-2'></div>
              <Button
                color='primary'
                onClick={onClickPost}
                disabled={isSending}
              >
                {id == undefined ? 'Create' : 'Edit'}
              </Button>
            </div>
          </div>
          <div className='col-span-2 flex justify-end px-4'>
            {isSending ? 'Saving...' : ''}
          </div>
        </div>
      </>
    </PageLoading>
  );
};

export default PartnerDetailPage;
