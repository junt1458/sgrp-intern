import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { useState } from 'react';

interface FormInputOptions {
  id: string;
  disabled?: boolean;
  placeholder?: string;
  label: string;
  required?: boolean;
  type: 'text' | 'number' | 'tel' | 'date' | 'email' | 'option' | 'textarea';
  defaultValue?: string;
  error?: string;
  minValue?: number;
  options?: string[];
  rows?: number;
}

const FormInput: React.FC<FormInputOptions> = ({
  type,
  id,
  disabled,
  label,
  required,
  placeholder,
  defaultValue,
  error,
  minValue,
  options,
  rows,
}) => {
  const [telVal, setTelVal] = useState<string | undefined>(defaultValue);

  if (type === 'tel') {
    return (
      <div className='m-4'>
        {label} {required ? <span className='text-red-600'>*</span> : ''}
        <div
          className={
            'w-full rounded-md border bg-white px-4 py-2 ' +
            (error ? 'border-red-600' : 'border-gray-400')
          }
        >
          <PhoneInput
            international={true}
            defaultCountry='JP'
            value={telVal}
            disabled={disabled}
            onChange={setTelVal}
          />
          <input type='hidden' id={id} value={telVal} />
        </div>
        <span className='text-red-600'>{error}</span>
      </div>
    );
  }

  if (type === 'option') {
    return (
      <div className='m-4'>
        {label} {required ? <span className='text-red-600'>*</span> : ''}
        <div
          className={
            'w-full rounded-md border bg-white px-4 py-2 ' +
            (error ? 'border-red-600' : 'border-gray-400')
          }
        >
          <select
            required={required}
            id={id}
            className='h-full w-full'
            disabled={disabled}
            defaultValue={defaultValue}
          >
            {options?.map((opt) => (
              <option value={opt} key={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <span className='text-red-600'>{error}</span>
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className='m-4'>
        {label} {required ? <span className='text-red-600'>*</span> : ''}
        <div
          className={
            'w-full rounded-md border bg-white px-4 py-2 ' +
            (error ? 'border-red-600' : 'border-gray-400')
          }
        >
          <textarea
            required={required}
            id={id}
            className='h-full w-full'
            disabled={disabled}
            placeholder={placeholder}
            defaultValue={defaultValue}
            rows={rows}
          />
        </div>
        <span className='text-red-600'>{error}</span>
      </div>
    );
  }

  return (
    <div className='m-4'>
      {label} {required ? <span className='text-red-600'>*</span> : ''}
      <div
        className={
          'w-full rounded-md border bg-white px-4 py-2 ' +
          (error ? 'border-red-600' : 'border-gray-400')
        }
      >
        <input
          required={required}
          type={type}
          id={id}
          className='h-full w-full'
          disabled={disabled}
          placeholder={placeholder}
          defaultValue={defaultValue}
          min={minValue}
        />
      </div>
      <span className='text-red-600'>{error}</span>
    </div>
  );
};

export default FormInput;
