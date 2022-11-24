import React from 'react';

interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'default' | 'reverse';
  role?: 'button' | 'link';
  type?: 'button' | 'submit' | 'reset';
}

function Button({
  label,
  variant = 'default',
  role = 'button',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`c-button ${variant === 'reverse' ? 'c-button--reverse' : ''}`}
      {...props}
      // Lint rule for disallowing dynamic types has been disabled as the variable in this case is limited by type and assigned a default value.
      // Read more about this at: https://github.com/jsx-eslint/eslint-plugin-react/issues/1555
      // eslint-disable-next-line react/button-has-type
      type={type} // Overwrite type
      role={role}
    >
      {label}
    </button>
  );
}

export default Button;
