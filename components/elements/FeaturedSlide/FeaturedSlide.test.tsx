import React from 'react';
import { render, screen, renderHook, fireEvent } from '@testing-library/react';
import { useSwipeable } from 'react-swipeable';
import FeaturedSlide from './FeaturedSlide';
import '@testing-library/jest-dom';

const testProps = {
  postTitle: 'This is a test title',
  backgroundImageUrl:
    'https://www.musicnotes.com/now/wp-content/uploads/Piano-Fingerings.png',
  buttonText: 'Slide button',
  swipeHandler: undefined,
};

const mockSlide = jest.fn();

const swipeHook = renderHook(() =>
  useSwipeable({
    onSwipedLeft: () => mockSlide('left'),
    onSwipedRight: () => mockSlide('right'),
  })
).result.current;

describe('Featured Slide Functionality', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Slide renders', () => {
    render(
      <div data-testid="featured-slide">
        <FeaturedSlide {...testProps} swipeHandler={swipeHook} />
      </div>
    );
    expect(
      screen.getByTestId('featured-slide').childNodes[0]
    ).toBeInTheDocument();
  });

  test('Slide has button', () => {
    render(<FeaturedSlide {...testProps} />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  test('Slide button has correct label', () => {
    render(<FeaturedSlide {...testProps} />);
    expect(screen.getByRole('link')).toHaveTextContent('Slide button');
  });

  test('Slide has correct title', () => {
    render(<FeaturedSlide {...testProps} />);
    expect(screen.getByRole('heading')).toHaveTextContent(
      'This is a test title'
    );
  });

  test('Slide button is disabled if swipeHandler is not defined', () => {
    render(<FeaturedSlide {...testProps} />);
    expect(screen.getByRole('link')).toBeDisabled();
  });

  test('Slide button is enabled if swipeHandler is defined', () => {
    render(<FeaturedSlide {...testProps} swipeHandler={swipeHook} />);
    expect(screen.getByRole('link')).toBeEnabled();
  });

  test('If passed a swipe handler, swiping right works', () => {
    render(
      <div data-testid="featured-slide">
        <FeaturedSlide {...testProps} swipeHandler={swipeHook} />
      </div>
    );
    const slide = screen.getByTestId('featured-slide').childNodes[0];
    fireEvent.touchStart(slide, {
      touches: [{ clientX: 0, clientY: 0 }],
    });
    fireEvent.touchMove(slide, {
      touches: [{ clientX: 200, clientY: 0 }],
    });
    fireEvent.touchEnd(slide);
    expect(mockSlide).toBeCalledTimes(1);
    expect(mockSlide).toBeCalledWith('right');
  });

  test('If passed a swipe handler, swiping left works', () => {
    render(
      <div data-testid="featured-slide">
        <FeaturedSlide {...testProps} swipeHandler={swipeHook} />
      </div>
    );
    const slide = screen.getByTestId('featured-slide').childNodes[0];
    fireEvent.touchStart(slide, {
      touches: [{ clientX: 0, clientY: 0 }],
    });
    fireEvent.touchMove(slide, {
      touches: [{ clientX: -200, clientY: 0 }],
    });
    fireEvent.touchEnd(slide);
    expect(mockSlide).toBeCalledTimes(1);
    expect(mockSlide).toBeCalledWith('left');
  });
});
