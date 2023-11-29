import { searchMediaContent } from '@services/api';
import { mockMultiSearchResponse } from '@services/models/mocks';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Multi Search API call and interface tests', () => {
  afterEach(jest.clearAllMocks);
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: mockMultiSearchResponse });
  });
  test('API is called with correct parameters', async () => {
    await searchMediaContent('test');
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(expect.stringContaining('https://api.themoviedb.org/3/search/multi'), {
      params: expect.objectContaining({
        language: expect.stringMatching('en-US'),
      }),
    });
  });

  test('API call takes correct query', async () => {
    await searchMediaContent('testQuery');
    expect(mockedAxios.get).toBeCalledWith(expect.stringContaining('testQuery'), {
      params: expect.objectContaining({
        language: expect.stringMatching('en-US'),
      }),
    });
  });
});
