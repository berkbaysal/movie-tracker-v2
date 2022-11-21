import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'reverse';
  label: string;
}

function Button({ label, variant }: ButtonProps) {
  return (
    <button
      type="button"
      className={`c-button ${variant === 'reverse' ? 'c-button--reverse' : ''}`}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  variant: 'default',
};

export default Button;
