interface ButtonOptions {
  children: JSX.Element | string;
  onClick?(): void;
  disabled?: boolean;
  color: 'primary' | 'danger' | 'draft' | 'action' | 'list';
  full?: boolean;
}

const Button: React.FC<ButtonOptions> = ({
  onClick,
  children,
  color,
  disabled,
  full,
}) => {
  let bgColorHex = '';
  let txColorHex = '';
  let borderHex = '';
  switch (color) {
    case 'primary': {
      bgColorHex = '#78acff';
      txColorHex = '#000000';
      borderHex = '#78acff';
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
    case 'action': {
      bgColorHex = '#dfdf41';
      txColorHex = '#000000';
      borderHex = '#dfdf41';
      break;
    }
    case 'list': {
      bgColorHex = '#70e674';
      txColorHex = '#000000';
      borderHex = '#70e674';
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
        width: full ? '100%' : '',
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
