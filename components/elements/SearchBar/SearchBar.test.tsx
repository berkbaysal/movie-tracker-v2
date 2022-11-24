import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom';

describe('Search Bar Functionality', () => {
  test('Search bar renders', () => {
    render(<SearchBar />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  test('Search bar has placeholder text', () => {
    render(<SearchBar />);
    expect(screen.getByRole('searchbox')).toHaveProperty(
      'placeholder',
      'Search...'
    );
  });

  test('Correct utility classes are applied for rendering search UI separately on mobile', () => {
    render(<SearchBar />);
    expect(screen.getByRole('searchbox')).toHaveClass('u-display-none@sm-down');
    expect(screen.getByRole('button')).toHaveClass('u-display-none@md-up');
  });
});
