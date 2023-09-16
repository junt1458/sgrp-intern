import ErrorIcn from '@mui/icons-material/Error';

interface ErrorOptions {
  message: string;
}

const ErrorIcon: React.FC<ErrorOptions> = ({ message }) => {
  return (
    <div className='my-8'>
      <div className='flex flex-wrap items-center justify-center'>
        <ErrorIcn
          className='text-red-700'
          style={{ width: '128px', height: '128px' }}
        />
        <div className='w-full text-center'>{message}</div>
      </div>
    </div>
  );
};

export default ErrorIcon;
