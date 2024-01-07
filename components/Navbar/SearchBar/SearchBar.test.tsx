import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom';

let mockQuery = '';
const mockedSetQuery: React.Dispatch<React.SetStateAction<string>> = jest.fn((input) => {
  mockQuery += input;
});

describe('Search Bar Functionality', () => {
  test('Search bar renders', () => {
    render(<SearchBar query="" setQuery={() => {}} />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  test('Search bar has placeholder text', () => {
    render(<SearchBar query="" setQuery={() => {}} />);
    expect(screen.getByRole('searchbox')).toHaveProperty('placeholder', 'Search...');
  });

  test('Correct utility classes are applied for rendering search UI separately on mobile', () => {
    render(<SearchBar query="" setQuery={() => {}} />);
    expect(screen.getByRole('searchbox')).toHaveClass('u-display-none@sm-down');
    expect(screen.getByRole('button')).toHaveClass('u-display-none@md-up');
  });

  test('Search bar is responsive to keyboard inputs', async () => {
    render(<SearchBar query="" setQuery={mockedSetQuery} />);
    const input = screen.getByRole('searchbox');
    await userEvent.type(input, 'This is a test message.');
    expect(mockedSetQuery).toHaveBeenCalledTimes('This is a test message.'.length);
    expect(mockQuery).toBe('This is a test message.');
  });
});
