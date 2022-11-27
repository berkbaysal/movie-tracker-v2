import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

describe('Navbar Functionality', () => {
  test('Navbar renders', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('Log in desktop button has correct role', () => {
    render(<Navbar />);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent(/log in/i);
  });

  test('Navbar has correct tab indexes', async () => {
    render(<Navbar />);
    await userEvent.tab();
    expect(screen.getByRole('searchbox')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByRole('link')).toHaveFocus();
  });
});
