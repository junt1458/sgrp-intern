interface ButtonOptions {
  children: JSX.Element | string;
  onClick?(): void;
  disabled?: boolean;
  color: 'primary' | 'danger' | 'draft';
}

const Button: React.FC<ButtonOptions> = ({
  onClick,
  children,
  color,
  disabled,
}) => {
  let bgColorHex = '';
  let txColorHex = '';
  let borderHex = '';
  switch (color) {
    case 'primary': {
      bgColorHex = '#619eff';
      txColorHex = '#000000';
      borderHex = '#619eff';
      break;
    }
    case 'danger': {
      bgColorHex = '#ff2626';
      txColorHex = '#ffffff';
      borderHex = '#ff2626';
      break;
    }
    case 'draft': {
      bgColorHex = 'whitesmoke';
      txColorHex = '#000000';
      borderHex = '#000000';
      break;
    }
  }
  return (
    <button
      className='rounded-lg border px-4 py-2 font-bold'
      onClick={onClick}
      style={{
        backgroundColor: bgColorHex,
        color: txColorHex,
        borderColor: borderHex,
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
