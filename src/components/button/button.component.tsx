interface ButtonOptions {
  children: JSX.Element | string;
  onClick?(): void;
  disabled?: boolean;
  color: 'primary';
}

const Button: React.FC<ButtonOptions> = ({
  onClick,
  children,
  color,
  disabled,
}) => {
  let bgColorHex = '';
  let txColorHex = '';
  switch (color) {
    case 'primary': {
      bgColorHex = '#18a8d9';
      txColorHex = '#000000';
      break;
    }
  }
  return (
    <button
      className='rounded-lg px-4 py-2'
      onClick={onClick}
      style={{ backgroundColor: bgColorHex, color: txColorHex }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;