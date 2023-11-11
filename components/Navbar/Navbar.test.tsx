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

  test('Navbar logo renders and has correct link', () => {
    render(<Navbar />);
    expect(screen.getByRole('img').parentElement).toBeInTheDocument();
    expect(screen.getByRole('img').parentElement).toHaveAttribute('href', '/');
  });

  test('Log in desktop button has correct role', () => {
    render(<Navbar />);
    expect(screen.getByText('Log In')).toBeInTheDocument();
    expect(screen.getByText('Log In')).toHaveProperty('type', 'button');
    expect(screen.getByText('Log In')).toHaveAttribute('role', 'link');
  });

  test('Navbar has correct tab indexes', async () => {
    render(<Navbar />);
    await userEvent.tab();
    expect(screen.getByRole('img').parentElement).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByRole('searchbox')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByText('Log In')).toHaveFocus();
  });
});
