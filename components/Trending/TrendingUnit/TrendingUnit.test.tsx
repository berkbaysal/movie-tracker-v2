import React from 'react';
import { render, screen } from '@testing-library/react';
import { MediaType } from '@utilities/interfacesApp';
import TrendingUnit from './TrendingUnit';
import '@testing-library/jest-dom';

const testProps = {
  title: 'Test movie title',
  posterPath: 'ekZobS8isE6mA53RAiGDG93hBxL.jpg',
  id: 123456,
  mediaType: 'movie' as MediaType,
};

describe('Trending Unit Functionality', () => {
  test('Trending unit renders', () => {
    render(
      <div data-testid="trending-unit">
        <TrendingUnit {...testProps} />
      </div>
    );
    const trendingUnit = screen.getByTestId('trending-unit').childNodes[0];
    expect(trendingUnit).toBeInTheDocument();
  });

  test('Trending unit has correct title', () => {
    render(<TrendingUnit {...testProps} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Test movie title');
  });

  test('Trending unit has correct link', () => {
    render(<TrendingUnit {...testProps} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/movie/123456');
  });

  test('Trending unit has correct image', () => {
    render(<TrendingUnit {...testProps} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('ekZobS8isE6mA53RAiGDG93hBxL.jpg'));
  });

  test('Trending unit displays fallback image if path is undefined', () => {
    render(<TrendingUnit {...testProps} posterPath={undefined} />);
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      expect.not.stringContaining('ekZobS8isE6mA53RAiGDG93hBxL.jpg')
    );
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('.jpg'));
  });
});

describe('Trending Unit Variants', () => {
  test('Modifier class is NOT applied to title when deafult variant is selected', () => {
    render(<TrendingUnit {...testProps} variant="default" />);
    expect(screen.getByRole('heading')).not.toHaveClass('c-trending-unit__title--top-trending');
  });

  test('Modifier class is applied to title when large variant is selected', () => {
    render(<TrendingUnit {...testProps} variant="large" />);
    expect(screen.getByRole('heading')).toHaveClass('c-trending-unit__title--top-trending');
  });
});
