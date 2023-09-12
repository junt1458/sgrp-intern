interface LoadingOptions {
  message: string;
}

const Loading: React.FC<LoadingOptions> = ({ message }) => {
  return (
    <div className='my-8'>
      <div className='flex flex-wrap items-center justify-center'>
        <img src='/loading.gif' alt='Loading icon' width={200} height={200} />
        <div className='w-full text-center'>{message}</div>
      </div>
    </div>
  );
};

export default Loading;
