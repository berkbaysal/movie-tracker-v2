import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockCredits } from '@utilities/mockData';
import '@testing-library/jest-dom';
import { CastSlider } from '@components';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Cast slider functionality', () => {
  test('Cast is correctly rendered', () => {
    render(<CastSlider cast={mockCredits.cast} />);
    expect(screen.queryByText('Chris Hemsworth')).toBeInTheDocument();
  });
});
