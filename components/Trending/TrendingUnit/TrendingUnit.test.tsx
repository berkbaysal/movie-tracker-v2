import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TrendingUnit from './TrendingUnit';
import '@testing-library/jest-dom';

const testProps = {
  title: 'Test movie title',
  posterPath: 'ekZobS8isE6mA53RAiGDG93hBxL.jpg',
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

  test('Modifier class is applied when hovered', () => {
    render(<TrendingUnit {...testProps} />);
    const title = screen.getByRole('heading');
    expect(title).not.toHaveClass('c-trending-unit__title--slide-up');
    fireEvent.mouseEnter(screen.getByRole('img'));
    expect(title).toHaveClass('c-trending-unit__title--slide-up');
    fireEvent.mouseLeave(screen.getByRole('img'));
    expect(title).not.toHaveClass('c-trending-unit__title--slide-up');
  });
});

describe('Trending Unit Variants', () => {
  test('Modifier class is NOT applied to title when deafult variant is selected', () => {
    render(<TrendingUnit {...testProps} variant="default" />);
    expect(screen.getByRole('heading')).not.toHaveClass(
      'c-trending-unit__title--top-trending'
    );
  });

  test('Modifier class is applied to title when large variant is selected', () => {
    render(<TrendingUnit {...testProps} variant="large" />);
    expect(screen.getByRole('heading')).toHaveClass(
      'c-trending-unit__title--top-trending'
    );
  });
});
