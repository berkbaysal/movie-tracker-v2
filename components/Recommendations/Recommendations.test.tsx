import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { mockMovieRecommendationResponse } from '@services/models/mocks';
import { getMovieRecommendations } from '@services/api';
import Recommendations from './Recommendations';
import '@testing-library/jest-dom';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Recommendations Section Functionality', () => {
  afterEach(jest.clearAllMocks);
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: mockMovieRecommendationResponse });
  });

  test('Recommendations section renders', async () => {
    const mockRecommendations = await getMovieRecommendations(123456);
    render(<Recommendations recommendations={mockRecommendations} />);
    expect(screen.getByLabelText('Recommendations')).toBeInTheDocument();
  });

  test('Recommendations section has correct number of units', async () => {
    const mockRecommendations = await getMovieRecommendations(123456);
    render(<Recommendations recommendations={mockRecommendations} />);
    expect(screen.getAllByRole('link').length).toEqual(6);
  });
});
