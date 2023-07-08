import { Meta, StoryObj } from '@storybook/react';
import '@styles';
import { mockEditorsPicks } from '@utilities/mockData';
import { EditorsPicks } from '@components';

export default {
  title: 'Components/ EditorsPicks',
  component: EditorsPicks,
  argTypes: {
    editorsPicks: {
      table: { disable: true },
    },
  },
} as Meta<typeof EditorsPicks>;

export const Default: StoryObj<typeof EditorsPicks> = {
  args: { editorsPicks: mockEditorsPicks },
};
