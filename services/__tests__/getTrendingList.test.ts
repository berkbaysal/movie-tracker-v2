import '@testing-library/jest-dom';
import { getTrendingList } from '@services/apiServices';
import { mockTrendingApiData } from '@utilities/mockData';

// Mock fetch to track API calls
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockTrendingApiData),
  })
) as jest.Mock;

describe('Trending List API call and interface tests', () => {
  afterEach(jest.clearAllMocks);
  test('API is called with correct parameters', async () => {
    await getTrendingList();
    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(
      expect.stringContaining('https://api.themoviedb.org/3/trending/all/')
    );
  });

  test('API request uses default parameters when there is no override', async () => {
    const trendingList = await getTrendingList();
    expect(trendingList).toHaveLength(20);
    expect(fetch).toBeCalledWith(expect.stringContaining('/week'));
  });

  test('API response is limited correctly on function return', async () => {
    let trendingList = await getTrendingList({ limit: 5 });
    expect(trendingList).toHaveLength(5);
    trendingList = await getTrendingList({ limit: 100 });
    expect(trendingList).toHaveLength(20);
  });

  test('API call is correctly modified if a period parameter is provided', async () => {
    await getTrendingList({ period: 'day' });
    expect(fetch).toBeCalledWith(expect.stringContaining('/day'));
  });
});
