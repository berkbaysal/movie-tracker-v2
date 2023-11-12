import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { getTrendingList } from '@services/api';
import { mockTrendingResponse } from '@services/models/mocks';
import Trending from './Trending';
import '@testing-library/jest-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Trending Section Functionality', () => {
  afterEach(jest.clearAllMocks);
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: mockTrendingResponse });
  });
  test('Trending section renders', async () => {
    const mockTrendingResults = await getTrendingList();
    render(<Trending trending={mockTrendingResults} />);
    expect(screen.getByLabelText('Trending films')).toBeInTheDocument();
  });
});
