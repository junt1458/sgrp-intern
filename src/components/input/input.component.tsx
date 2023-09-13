interface InputOptions {
  id: string;
  disabled?: boolean;
  placeholder?: string;
  type: 'text';
}

const Input: React.FC<InputOptions> = ({ type, id, disabled, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      className='mx-2 rounded-lg border border-gray-400 px-4 py-2 text-black'
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

export default Input;
