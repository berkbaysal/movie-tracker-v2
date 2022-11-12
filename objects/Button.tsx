import React from 'react';

interface ButtonProps {
  className?: string;
  variant?: 'default' | 'reverse';
}

const Button = ({ className, variant = 'default' }: ButtonProps) => {
  return <div className="o-button">Button</div>;
};

export default Button;
