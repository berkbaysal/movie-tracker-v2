import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../scss/main.scss';
import { mockEditorsPicks } from '../../util/mockData';
import EditorsPicks from './EditorsPicks';

export default {
  title: 'Components/ EditorsPicks',
  component: EditorsPicks,
  argTypes: {
    editorsPicks: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof EditorsPicks>;

const Template: ComponentStory<typeof EditorsPicks> = () => (
  <EditorsPicks editorsPicks={mockEditorsPicks} />
);

export const Default = Template.bind({});