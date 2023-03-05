import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockMovieContentSummary } from '@utilities/mockData';
import ContentSummary from './ContentSummary';
import '@testing-library/jest-dom';

describe('Footer Functionality', () => {
  test('Content Summary renders', () => {
    render(
      <ContentSummary
        contentInfo={mockMovieContentSummary.contentInfo}
        credits={mockMovieContentSummary.credits}
      />
    );
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});

describe('Credits filter functionality', () => {
  test('Credits is correctly filtered for directing', () => {
    render(
      <ContentSummary
        contentInfo={mockMovieContentSummary.contentInfo}
        credits={mockMovieContentSummary.credits}
      />
    );
    expect(screen.getByText('Directing:')).toHaveTextContent(
      'Directing: Stanley Kubrick'
    );
  });
  test('Credits is correctly filtered for screenplay', () => {
    render(
      <ContentSummary
        contentInfo={mockMovieContentSummary.contentInfo}
        credits={mockMovieContentSummary.credits}
      />
    );
    expect(screen.getByText('Screenplay:')).toHaveTextContent(
      'Screenplay: Stanley Kubrick, Arthur C. Clarke'
    );
  });
  test('Credits is correctly filtered for directing', () => {
    const filteredCrew = mockMovieContentSummary.credits.crew.filter(
      (credit) => credit.job.toLowerCase() !== 'director'
    );
    const filteredCredits = {
      ...mockMovieContentSummary.credits,
      crew: filteredCrew,
    };
    render(
      <ContentSummary
        contentInfo={mockMovieContentSummary.contentInfo}
        credits={filteredCredits}
      />
    );
    expect(screen.queryByText('Directing:')).toBeNull();
  });
  test('Credits is correctly filtered for screenplay', () => {
    const filteredCrew = mockMovieContentSummary.credits.crew.filter(
      (credit) => credit.job.toLowerCase() !== 'screenplay'
    );
    const filteredCredits = {
      ...mockMovieContentSummary.credits,
      crew: filteredCrew,
    };
    render(
      <ContentSummary
        contentInfo={mockMovieContentSummary.contentInfo}
        credits={filteredCredits}
      />
    );
    expect(screen.queryByText('Screenplay:')).toBeNull();
  });
});
