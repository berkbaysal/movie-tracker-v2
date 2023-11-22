import '@testing-library/jest-dom';
import axios from 'axios';
import { getTvCredits, getTvRecommendations, getTvShowInfo } from '@services/api';
import { mockTvRecommendationResponse, mockTvCreditsResponse, mockTvDetailResponse } from '@services/models/mocks';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Movie API call and interface tests', () => {
  afterEach(jest.clearAllMocks);
  test('API is called with correct parameters', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockTvDetailResponse });
    await getTvShowInfo(123);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(expect.stringContaining('https://api.themoviedb.org/3/tv/123'), {
      params: expect.objectContaining({
        language: expect.stringMatching('en-US'),
      }),
    });
  });
});

describe('Movie Credits API call and interface tests', () => {
  afterEach(jest.clearAllMocks);
  test('API is called with correct parameters', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockTvCreditsResponse });
    await getTvCredits(123);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(expect.stringContaining('https://api.themoviedb.org/3/tv/123/credits'), {
      params: expect.objectContaining({
        language: expect.stringMatching('en-US'),
      }),
    });
  });
});

describe('Mobie recommendation API call and interface tests', () => {
  afterEach(jest.clearAllMocks);
  test('API is called with correct parameters', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockTvRecommendationResponse });
    await getTvRecommendations(123);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(
      expect.stringContaining('https://api.themoviedb.org/3/tv/123/recommendations'),
      {
        params: expect.objectContaining({
          language: expect.stringMatching('en-US'),
        }),
      }
    );
  });
});
