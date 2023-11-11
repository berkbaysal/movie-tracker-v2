import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockTrendingApiData } from '@utilities/mockData';
import Recommendations from './Recommendations';
import '@testing-library/jest-dom';

const testProps = mockTrendingApiData;

describe('Recommendations Section Functionality', () => {
  test('Recommendations section renders', () => {
    render(<Recommendations recommendations={testProps.results} />);
    expect(screen.getByLabelText('Recommendations')).toBeInTheDocument();
  });

  test('Recommendations section has correct number of units', () => {
    render(<Recommendations recommendations={testProps.results} />);
    expect(screen.getAllByRole('link').length).toEqual(6);
  });
});
