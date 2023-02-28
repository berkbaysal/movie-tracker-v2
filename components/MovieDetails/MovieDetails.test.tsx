import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';
import '@testing-library/jest-dom';

describe('Footer Functionality', () => {
  test('Footer renders', () => {
    render(<MovieDetails />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});
