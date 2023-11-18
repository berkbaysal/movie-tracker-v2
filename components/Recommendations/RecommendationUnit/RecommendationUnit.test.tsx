import React from 'react';
import { render, screen } from '@testing-library/react';
import { MediaType } from '@utilities/interfacesApp';
import RecommendationUnit from './RecommendationUnit';
import '@testing-library/jest-dom';

const testReccomendation = {
  title: 'Test movie title',
  posterPath: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
  id: 123456,
  mediaType: 'movie' as MediaType,
  year: '2021',
};

describe('Recommendation Unit Functionality', () => {
  test('Recommendation unit renders', () => {
    render(
      <div data-testid="recommendation-unit">
        <RecommendationUnit reccomendation={testReccomendation} />
      </div>
    );
    const recommendationUnit = screen.getByTestId('recommendation-unit').childNodes[0];
    expect(recommendationUnit).toBeInTheDocument();
  });

  test('Recommendation unit has correct title', () => {
    render(<RecommendationUnit reccomendation={testReccomendation} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Test movie title');
  });

  test('Recommendation unit has correct link', () => {
    render(<RecommendationUnit reccomendation={testReccomendation} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/movie/123456');
  });
});
