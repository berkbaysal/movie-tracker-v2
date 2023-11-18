import React from 'react';
import axios from 'axios';
import { fireEvent, render, screen } from '@testing-library/react';
import { mockMovieCreditsResponse } from '@services/models/mocks';
import '@testing-library/jest-dom';
import { CastSlider } from '@components';
import { MediaContentCredits } from '@utilities/interfacesApp';
import { getMovieCredits } from '@services/api';
import { getTargetWidth, ICastSliderState, updateSliderState } from './castSliderConfig';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('./castSliderConfig');
const mockedUpdateSlider = updateSliderState as jest.MockedFunction<typeof updateSliderState>;
const mockTargetWidth = getTargetWidth as jest.MockedFunction<typeof getTargetWidth>;

Element.prototype.scrollTo = () => {};

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

  test('Cast picture size is correctly set', () => {
    mockTargetWidth.mockReturnValue(170);
    render(<CastSlider cast={mockCredits.cast} />);
    const castPicture = screen.getByAltText('Gary Lockwood profile image');
    expect(castPicture.parentElement).toHaveStyle('width: 170px');
  });
});

describe('Slider interaction', () => {
  beforeEach(() => {
    mockedUpdateSlider.mockReturnValue({
      currentOffset: 1280,
      currentPage: 2,
      edgeVisible: 'both',
    } as ICastSliderState);
  });
  afterEach(jest.clearAllMocks);

  test('Slider handles button inputs correctly', () => {
    render(<CastSlider cast={mockMovieCreditsResponse.cast} />);

    const sliderButtons = screen.getAllByRole('button');
    const slider = screen.getByTestId('slider-frame');
    expect(sliderButtons).toHaveLength(2);

    fireEvent.click(sliderButtons[1]);
    expect(mockedUpdateSlider).toHaveBeenCalledTimes(1);
    expect(slider).toHaveStyle('transform: translateX(-1280px)');

    mockedUpdateSlider.mockReturnValue({
      currentOffset: 0,
      currentPage: 1,
      edgeVisible: 'right',
    } as ICastSliderState);

    fireEvent.click(sliderButtons[0]);
    expect(mockedUpdateSlider).toHaveBeenCalledTimes(2);
    expect(slider).toHaveStyle('transform: translateX(-0px)');
  });

  test('Slider resets position on resize', () => {
    render(<CastSlider cast={mockMovieCreditsResponse.cast} />);

    const sliderButtons = screen.getAllByRole('button');
    const slider = screen.getByTestId('slider-frame');
    expect(sliderButtons).toHaveLength(2);

    fireEvent.click(sliderButtons[1]);
    expect(mockedUpdateSlider).toHaveBeenCalledTimes(1);
    expect(slider).toHaveStyle('transform: translateX(-1280px)');

    fireEvent.resize(window);
    expect(slider).toHaveStyle('transform: translateX(-0px)');
  });
});
