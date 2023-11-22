import { getTrendingList } from '@services/api';
import { mockTrendingResponse } from '@services/models/mocks';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Trending List API call and interface tests', () => {
  afterEach(jest.clearAllMocks);
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: mockTrendingResponse });
  });
  test('API is called with correct parameters', async () => {
    await getTrendingList();
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(expect.stringContaining('https://api.themoviedb.org/3/trending/all/'), {
      params: expect.objectContaining({
        language: expect.stringMatching('en-US'),
      }),
    });
  });

  test('API request uses default parameters when there is no override', async () => {
    const trendingList = await getTrendingList();
    expect(trendingList).toHaveLength(20);
    expect(mockedAxios.get).toBeCalledWith(expect.stringContaining('/week'), {
      params: expect.objectContaining({
        language: expect.stringMatching('en-US'),
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
        language: expect.stringMatching('en-US'),
      }),
    });
  });
});
