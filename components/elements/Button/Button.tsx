import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'default' | 'reverse';
  role?: 'button' | 'link';
  disabled?: boolean;
}

function Button({
  label,
  variant = 'default',
  role = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      role={role}
      className={`c-button ${variant === 'reverse' ? 'c-button--reverse' : ''}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
