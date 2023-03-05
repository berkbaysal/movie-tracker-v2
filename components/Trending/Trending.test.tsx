import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockTrendingApiData } from '@utilities/mockData';
import { TrendingResult } from '@utilities/interfacesApp';
import { filterTrendingResults } from '@services/apiServices';
import Trending from './Trending';
import '@testing-library/jest-dom';

const mockTrendingResults: TrendingResult[] = filterTrendingResults(
  mockTrendingApiData,
  10
);

describe('Trending Section Functionality', () => {
  test('Trending section renders', () => {
    render(<Trending trending={mockTrendingResults} />);
    expect(screen.getByLabelText('Trending films')).toBeInTheDocument();
  });
});
