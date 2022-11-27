import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Featured from './Featured';
import slideFunctions from './featuredFunctions';
import '@testing-library/jest-dom';

const testProps = {
  posts: [
    {
      postTitle: 'Slide one demo title',
      backgroundImageUrl:
        'https://www.musicnotes.com/now/wp-content/uploads/Piano-Fingerings.png',
      id: 1,
    },
    {
      postTitle: 'Slide two demo title',
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1619099619226-f96e319e3732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlsbSUyMGNhbWVyYXxlbnwwfHwwfHw%3D&w=1000&q=80',
      id: 2,
    },
    {
      postTitle: 'Slide three demo title',
      backgroundImageUrl:
        'https://img.freepik.com/free-photo/happy-family-sitting-cinema_23-2148202053.jpg',
      id: 3,
    },
  ],
};

const mockSlide = jest.spyOn(slideFunctions, 'slide');

describe('Featured Section Functionality', () => {
  test('Featured section renders', () => {
    render(<Featured {...testProps} />);
    const featuredSection = screen.getByRole('region');
    expect(featuredSection).toBeInTheDocument();
  });

  test('Featured section has accessible name', () => {
    render(<Featured {...testProps} />);
    const featuredSection = screen.getByRole('region');
    expect(featuredSection).toHaveAccessibleName('featured posts');
  });

  test('Featured section has correct tab indexes', async () => {
    render(<Featured {...testProps} />);
    await userEvent.tab();
    expect(screen.getByLabelText('previous post')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByLabelText('next post')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByRole('link')).toHaveFocus();
  });

  test('Button text defaults to read more', () => {
    render(<Featured {...testProps} />);
    expect(screen.getByRole('link')).toHaveTextContent('Read more');
  });

  test('Button text can be overwritten with props', () => {
    render(<Featured {...testProps} buttonText="test button" />);
    expect(screen.getByRole('link')).toHaveTextContent('test button');
  });

  test('There is one button with link role on the screen', () => {
    render(<Featured {...testProps} />);
    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(document.getElementsByTagName('button').length).toBeGreaterThan(1);
  });

  test('Swipe right triggers correct callback', () => {
    jest.clearAllMocks();
    render(<Featured {...testProps} />);
    // Target featured slide with event listener which is the first child of the list item on the screen.
    const featuredSection = screen.getByRole('listitem').childNodes[0];
    fireEvent.touchStart(featuredSection, {
      touches: [{ clientX: 200, clientY: 0 }],
    });
    fireEvent.touchMove(featuredSection, {
      touches: [{ clientX: 0, clientY: 0 }],
    });
    fireEvent.touchEnd(featuredSection);
    expect(mockSlide).toBeCalledTimes(1);
    expect(mockSlide).toBeCalledWith(
      expect.anything(),
      expect.anything(),
      'right'
    );
  });

  test('Swipe left triggers correct callback', () => {
    jest.clearAllMocks();
    render(<Featured {...testProps} />);
    // Target featured slide with event listener which is the first child of the list item on the screen.
    const featuredSection = screen.getByRole('listitem').childNodes[0];
    fireEvent.touchStart(featuredSection, {
      touches: [{ clientX: 0, clientY: 0 }],
    });
    fireEvent.touchMove(featuredSection, {
      touches: [{ clientX: 200, clientY: 0 }],
    });
    fireEvent.touchEnd(featuredSection);
    expect(mockSlide).toBeCalledTimes(1);
    expect(mockSlide).toBeCalledWith(
      expect.anything(),
      expect.anything(),
      'left'
    );
  });

  test('Previous post button triggers correct callback', async () => {
    jest.clearAllMocks();
    render(<Featured {...testProps} />);
    const prevButton = screen.getByLabelText('previous post');
    await userEvent.click(prevButton);
    expect(mockSlide).toBeCalledTimes(1);
    expect(mockSlide).toBeCalledWith(
      expect.anything(),
      expect.anything(),
      'left'
    );
  });

  test('Next post button triggers correct callback', async () => {
    jest.clearAllMocks();
    render(<Featured {...testProps} />);
    const prevButton = screen.getByLabelText('next post');
    await userEvent.click(prevButton);
    expect(mockSlide).toBeCalledTimes(1);
    expect(mockSlide).toBeCalledWith(
      expect.anything(),
      expect.anything(),
      'right'
    );
  });

  test('Slides are correctly duplicated if there are less post than slides', () => {
    const { slides, keys } = slideFunctions.initSlides(testProps.posts, 5);
    const findDuplicates = (arr: number[]) => {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    };
    expect(slides).toHaveLength(11);
    expect(keys).toHaveLength(11);
    expect(slides).toStrictEqual([1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2]);
    expect(findDuplicates(keys)).toHaveLength(11);
    expect(findDuplicates(slides)).not.toHaveLength(11);
  });
});
