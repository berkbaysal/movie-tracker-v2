import React from 'react';
import { render, screen } from '@testing-library/react';
import EditorsPicks from './EditorsPicks';
import '@testing-library/jest-dom';
import { mockEditorsPicks } from '../../util/mockData';

const testProps = mockEditorsPicks;

describe('EditorsPicks Section Functionality', () => {
  test('EditorsPicks section renders', () => {
    render(<EditorsPicks editorsPicks={testProps} />);
    expect(screen.getByLabelText('Editors Picks')).toBeInTheDocument();
  });
});
