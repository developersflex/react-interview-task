import './Button.scss';
export const Button = ({
  className = '',
  children,
  variant = 'default' || 'secondary' || 'cancel',
  onClick,
  ...props
}) => {
  return (
    // <button
    //   {...props}
    //   className={`kit-button ${className}`}
    //   onClick={onClick}
    //   style={{ backgroundColor: bgColor }}
    // >
    //   <p className='kit-button-text'>{children}</p>
    //   <div className='kit-button-separator' />
    //   <span className='kit-button__icon'>{icon}</span>
    // </button>
    <button
      className={`kit-button ${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
