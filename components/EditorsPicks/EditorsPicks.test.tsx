import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockEditorsPicks } from '@utilities/mockData';
import EditorsPicks from './EditorsPicks';
import '@testing-library/jest-dom';

const testProps = mockEditorsPicks;

describe('EditorsPicks Section Functionality', () => {
  test('EditorsPicks section renders', () => {
    render(<EditorsPicks editorsPicks={testProps} />);
    expect(screen.getByLabelText('Editors Picks')).toBeInTheDocument();
  });
});
