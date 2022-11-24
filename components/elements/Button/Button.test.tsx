import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom';

describe('Test Button Functionality', () => {
  test('Button renders', () => {
    render(<Button label="Test button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Button has correct label', () => {
    render(<Button label="Test button" />);
    expect(screen.getByRole('button')).toHaveTextContent('Test button');
  });
});

describe('Test Button Variants', () => {
  test('Default button has correct class', () => {
    render(<Button label="Test button" />);
    expect(screen.getByRole('button')).toHaveClass('c-button');
    expect(screen.getByRole('button')).not.toHaveClass('c-button--reverse');
  });

  test('Reverse button has correct class', () => {
    render(<Button label="Test button" variant="reverse" />);
    expect(screen.getByRole('button')).toHaveClass('c-button');
    expect(screen.getByRole('button')).toHaveClass('c-button--reverse');
  });
});
