import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'reverse';
  label: string;
}

function Button({ label, variant = 'default' }: ButtonProps) {
  return (
    <button
      type="button"
      className={`c-button ${variant === 'reverse' ? 'c-button--reverse' : ''}`}
    >
      {label}
    </button>
  );
}

export default Button;
