import '@testing-library/jest-dom';
import axios from 'axios';
import {
  getMovieCredits,
  getMovieInfo,
  getTrendingList,
} from '@services/apiServices';
import { mockTrendingApiData } from '@utilities/mockData';

// Mock fetch to track API calls
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(mockTrendingApiData),
//   })
// ) as jest.Mock;

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockResolvedValue({ data: mockTrendingApiData });

describe('Trending List API call and interface tests', () => {
  afterEach(jest.clearAllMocks);
  test('API is called with correct parameters', async () => {
    await getTrendingList();
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(
      expect.stringContaining('https://api.themoviedb.org/3/trending/all/'),
      {
        params: expect.objectContaining({
          api_key: expect.any(String),
        }),
      }
    );
  });

  test('API request uses default parameters when there is no override', async () => {
    const trendingList = await getTrendingList();
    expect(trendingList).toHaveLength(20);
    expect(mockedAxios.get).toBeCalledWith(expect.stringContaining('/week'), {
      params: expect.objectContaining({
        api_key: expect.any(String),
      }),
    });
  });

  test('API response is limited correctly on function return', async () => {
    let trendingList = await getTrendingList({ limit: 5 });
    expect(trendingList).toHaveLength(5);
    trendingList = await getTrendingList({ limit: 100 });
    expect(trendingList).toHaveLength(20);
  });

  test('API call is correctly modified if a period parameter is provided', async () => {
    await getTrendingList({ period: 'day' });
    expect(mockedAxios.get).toBeCalledWith(expect.stringContaining('/day'), {
      params: expect.objectContaining({
        api_key: expect.any(String),
      }),
    });
  });
});

describe('Movie API call and interface tests', () => {
  afterEach(jest.clearAllMocks);
  test('API is called with correct parameters', async () => {
    await getMovieInfo(123);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(
      expect.stringContaining('https://api.themoviedb.org/3/movie/123'),
      {
        params: expect.objectContaining({
          api_key: expect.any(String),
        }),
      }
    );
  });
});

describe('Movie Credits API call and interface tests', () => {
  afterEach(jest.clearAllMocks);
  test('API is called with correct parameters', async () => {
    await getMovieCredits(123);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(
      expect.stringContaining('https://api.themoviedb.org/3/movie/123/credits'),
      {
        params: expect.objectContaining({
          api_key: expect.any(String),
        }),
      }
    );
  });
});
