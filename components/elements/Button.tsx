import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'reverse';
  children: React.ReactNode;
}

function Button({ children, variant }: ButtonProps) {
  return (
    <div
      className={`c-button ${variant === 'reverse' ? 'c-button--reverse' : ''}`}
    >
      {children}
    </div>
  );
}

Button.defaultProps = {
  variant: 'default',
};

export default Button;
