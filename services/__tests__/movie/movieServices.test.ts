import '@testing-library/jest-dom';
import axios from 'axios';
import { getMovieCredits, getMovieInfo, getMovieRecommendations } from '@services/api';
import { mockMovieRecommendationResponse, mockMovieCreditsResponse } from '@services/models/mocks';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Movie API call and interface tests', () => {
  afterEach(jest.clearAllMocks);
  test('API is called with correct parameters', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockMovieCreditsResponse });
    await getMovieInfo(123);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(expect.stringContaining('https://api.themoviedb.org/3/movie/123'), {
      params: expect.objectContaining({
        language: expect.stringMatching('en-US'),
      }),
    });
  });
});

describe('Movie Credits API call and interface tests', () => {
  afterEach(jest.clearAllMocks);
  test('API is called with correct parameters', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockMovieCreditsResponse });
    await getMovieCredits(123);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(expect.stringContaining('https://api.themoviedb.org/3/movie/123/credits'), {
      params: expect.objectContaining({
        language: expect.stringMatching('en-US'),
      }),
    });
  });
});

describe('Mobie recommendation API call and interface tests', () => {
  afterEach(jest.clearAllMocks);
  test('API is called with correct parameters', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockMovieRecommendationResponse });
    await getMovieRecommendations(123);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(
      expect.stringContaining('https://api.themoviedb.org/3/movie/123/recommendations'),
      {
        params: expect.objectContaining({
          language: expect.stringMatching('en-US'),
        }),
      }
    );
  });
});
