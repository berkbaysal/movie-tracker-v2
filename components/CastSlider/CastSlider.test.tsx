import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { mockMovieCreditsResponse } from '@services/models/mocks';
import '@testing-library/jest-dom';
import { CastSlider } from '@components';
import { MediaContentCredits } from '@utilities/interfacesApp';
import { getMovieCredits } from '@services/api';
import {
  getSlidesPerPage,
  getTargetWidth,
  ICastSliderState,
  INITIAL_SLIDE_STATE,
  ISliderUpdateParams,
  updateSliderState,
} from './castSliderConfig';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

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
});

describe('Cast slider sizing', () => {
  test('Correct value is returned for screen sizes', () => {
    expect(getSlidesPerPage(1920)).toBe(7);
    expect(getSlidesPerPage(999)).toBe(6);
    expect(getSlidesPerPage(799)).toBe(5);
    expect(getSlidesPerPage(767)).toBe(4);
    expect(getSlidesPerPage(399)).toBe(2);
  });
});

describe('Cast slider sliding', () => {
  test('Correct state is calculated on slide right', () => {
    const updateParams: ISliderUpdateParams = {
      slide: 'right',
      castSize: 99,
      castPictureWidth: 170,
      sliderWidth: 1238,
      styleGap: 8,
      currentState: INITIAL_SLIDE_STATE,
    };
    const newState: ICastSliderState = updateSliderState(updateParams);
    expect(newState.currentOffset).toBeCloseTo(1246, 0);
    expect(newState.currentPage).toBe(2);
    expect(newState.edgeVisible).toBe('both');
  });

  test('Correct state is calculated on slide left', () => {
    const updateParams: ISliderUpdateParams = {
      slide: 'left',
      castSize: 99,
      castPictureWidth: 170,
      sliderWidth: 1238,
      styleGap: 8,
      currentState: { currentOffset: 1246, currentPage: 2, edgeVisible: 'both' },
    };
    const newState: ICastSliderState = updateSliderState(updateParams);
    expect(newState.currentOffset).toBeCloseTo(0, 0);
    expect(newState.currentPage).toBe(1);
    expect(newState.edgeVisible).toBe('right');
  });

  test('Slider wont overshoot right', () => {
    const updateParams: ISliderUpdateParams = {
      slide: 'right',
      castSize: 7,
      castPictureWidth: 170,
      sliderWidth: 1238,
      styleGap: 8,
      currentState: INITIAL_SLIDE_STATE,
    };
    const newState: ICastSliderState = updateSliderState(updateParams);
    expect(newState.currentOffset).toBeCloseTo(0, 0);
    expect(newState.currentPage).toBe(1);
    expect(newState.edgeVisible).toBe('none');
  });

  test('Slider wont overshoot left', () => {
    const updateParams: ISliderUpdateParams = {
      slide: 'left',
      castSize: 10,
      castPictureWidth: 170,
      sliderWidth: 1238,
      styleGap: 8,
      currentState: { currentOffset: 534, currentPage: 2, edgeVisible: 'left' },
    };
    const newState: ICastSliderState = updateSliderState(updateParams);
    expect(newState.currentOffset).toBeCloseTo(0, 0);
    expect(newState.currentPage).toBe(1);
    expect(newState.edgeVisible).toBe('right');
  });

  test('Slider readjusts correctly on right edge', () => {
    const updateParams: ISliderUpdateParams = {
      slide: 'left',
      castSize: 17,
      castPictureWidth: 170,
      sliderWidth: 1238,
      styleGap: 8,
      currentState: { currentOffset: 1780, currentPage: 3, edgeVisible: 'left' },
    };
    const newState: ICastSliderState = updateSliderState(updateParams);
    expect(newState.currentOffset).toBeCloseTo(1246, 0);
    expect(newState.currentPage).toBe(2);
    expect(newState.edgeVisible).toBe('both');
  });

  test('Slider is unslideable if all cast fits', () => {
    const updateParams: ISliderUpdateParams = {
      slide: 'left',
      castSize: 5,
      castPictureWidth: 170,
      sliderWidth: 1238,
      styleGap: 8,
      currentState: INITIAL_SLIDE_STATE,
    };
    const newState: ICastSliderState = updateSliderState(updateParams);
    expect(newState.currentOffset).toBeCloseTo(0, 0);
    expect(newState.currentPage).toBe(1);
    expect(newState.edgeVisible).toBe('none');
  });
});

describe('Cast width calculation', () => {
  test('Correct target width is calculated', () => {
    expect(getTargetWidth(8, 1238)).toBe(170);
    expect(getTargetWidth(8, 736)).toBe(178);
    expect(getTargetWidth(8, 404)).toBe(95);
  });

  test('Correct target width is calculated for touch screens', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    expect(getTargetWidth(8, 390)).toBeCloseTo(151, 0);
  });
});
