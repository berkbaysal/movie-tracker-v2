import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { mockMovieDetailResponse, mockMovieCreditsResponse } from '@services/models/mocks';
import { MediaContentCredits, MediaContentDetails } from '@utilities/interfacesApp';
import { getMovieCredits, getMovieInfo } from '@services/api';
import ContentSummary from './ContentSummary';
import '@testing-library/jest-dom';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Content Summary Functionality', () => {
  afterEach(jest.clearAllMocks);
  let contentInfo: MediaContentDetails;
  let credits: MediaContentCredits;

  beforeAll(async () => {
    mockedAxios.get.mockResolvedValue({ data: mockMovieDetailResponse });
    contentInfo = await getMovieInfo(1);
    mockedAxios.get.mockResolvedValue({ data: mockMovieCreditsResponse });
    credits = await getMovieCredits(1);
  });

  test('Content Summary renders', () => {
    render(<ContentSummary contentInfo={contentInfo} credits={credits} />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});

describe('Credits filter functionality', () => {
  afterEach(jest.clearAllMocks);
  let contentInfo: MediaContentDetails;
  let credits: MediaContentCredits;

  beforeAll(async () => {
    mockedAxios.get.mockResolvedValue({ data: mockMovieDetailResponse });
    contentInfo = await getMovieInfo(1);
    mockedAxios.get.mockResolvedValue({ data: mockMovieCreditsResponse });
    credits = await getMovieCredits(1);
  });
  test('Credits is correctly filtered for directing', () => {
    render(<ContentSummary contentInfo={contentInfo} credits={credits} />);
    expect(screen.getByText('Directing:')).toHaveTextContent('Directing: Stanley Kubrick');
  });
  test('Credits is correctly filtered for screenplay', () => {
    render(<ContentSummary contentInfo={contentInfo} credits={credits} />);
    expect(screen.getByText('Screenplay:')).toHaveTextContent('Screenplay: Stanley Kubrick, Arthur C. Clarke');
  });
  test('Credits is correctly filtered for directing', () => {
    const filteredCrew = credits.crew.filter((credit) => credit.job.toLowerCase() !== 'director');
    const filteredCredits = {
      cast: [],
      credits,
      crew: filteredCrew,
    };
    render(<ContentSummary contentInfo={contentInfo} credits={filteredCredits} />);
    expect(screen.queryByText('Directing:')).toBeNull();
  });
  test('Credits is correctly filtered for screenplay', () => {
    const filteredCrew = credits.crew.filter((credit) => credit.job.toLowerCase() !== 'screenplay');
    const filteredCredits = {
      ...credits,
      crew: filteredCrew,
    };
    render(<ContentSummary contentInfo={contentInfo} credits={filteredCredits} />);
    expect(screen.queryByText('Screenplay:')).toBeNull();
  });
  test('Tagline is displayed if provided', () => {
    render(<ContentSummary contentInfo={contentInfo} credits={credits} />);
    expect(screen.queryByText('The Ultimate Trip.')).toBeInTheDocument();
  });
  test('Empty line is displayed of tagline is lacking', () => {
    const modifiedContentInfo = {
      ...contentInfo,
      tagline: undefined,
    };

    render(<ContentSummary contentInfo={modifiedContentInfo} credits={credits} />);
    expect(screen.getByTestId('content-tagline')).toContainHTML('<br />');
  });
});
