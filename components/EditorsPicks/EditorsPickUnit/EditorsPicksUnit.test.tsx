import React from 'react';
import { render, screen } from '@testing-library/react';
import { EditorsPick } from '@utilities/interfacesApp';
import EditorsPicksUnit from './EditorsPicksUnit';
import '@testing-library/jest-dom';

const testProps: EditorsPick = {
  title: 'Test Title',
  posterPath: '/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
  year: '9999',
  id: 313369,
  mediaType: 'movie',
};

describe('EditorsPicks Unit Functionality', () => {
  test('EditorsPicksUnit renders', () => {
    render(
      <div data-testid="editors-pick-unit">
        <EditorsPicksUnit {...testProps} />
      </div>
    );
    const editorsPickUnit = screen.getByTestId('editors-pick-unit');
    expect(editorsPickUnit).toBeInTheDocument();
  });
  test('Title and year are correctly displayed', () => {
    render(<EditorsPicksUnit {...testProps} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Test Title (9999)');
  });
  test('EditorsPickUnit has correct link', () => {
    render(<EditorsPicksUnit {...testProps} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/movie/313369');
  });
});
