import React from 'react';
import { render, screen } from '@testing-library/react';
import ContentSummary from './ContentSummary';
import '@testing-library/jest-dom';

describe('Footer Functionality', () => {
  test('Content Summary renders', () => {
    render(<ContentSummary />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});
