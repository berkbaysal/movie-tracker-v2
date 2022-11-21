import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'reverse';
  children: React.ReactNode;
}

function Button({ children, variant }: ButtonProps) {
  return (
    <button
      type="button"
      className={`c-button ${variant === 'reverse' ? 'c-button--reverse' : ''}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'default',
};

export default Button;
