import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { mockMovieCreditsResponse } from '@services/models/mocks';
import '@testing-library/jest-dom';
import { CastSlider } from '@components';
import { MediaContentCredits } from '@utilities/interfacesApp';
import { getMovieCredits } from '@services/api';
import { getTargetWidth } from './castSliderConfig';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedGetTargetWidth = getTargetWidth as jest.Mocked<typeof getTargetWidth>;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Cast slider functionality', () => {
  afterEach(jest.clearAllMocks);
  let mockCredits: MediaContentCredits = mockMovieCreditsResponse;
  beforeAll(async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockMovieCreditsResponse });
    mockCredits = await getMovieCredits(1);
  });

  test('Cast is correctly rendered', () => {
    render(<CastSlider cast={mockCredits.cast} />);
    expect(screen.queryByText('Gary Lockwood')).toBeInTheDocument();
  });

  test('Cast slider correctly slides right', () => {
    mockedGetTargetWidth.
    render(<CastSlider cast={mockCredits.cast} />);
  });
});
