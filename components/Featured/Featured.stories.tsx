import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../scss/main.scss';
import Featured from './Featured';
import { mockPostsData } from '../../util/mockData';

export default {
  title: 'Components/ Featured',
  component: Featured,
  argTypes: {
    posts: {
      table: { disable: true },
    },
    buttonText: {
      control: 'text',
      name: 'Button Text',
      defaultValue: 'Read more',
    },
  },
} as ComponentMeta<typeof Featured>;

const Template: ComponentStory<typeof Featured> = (args) => (
  <Featured {...args} posts={mockPostsData} />
);

export const Default = Template.bind({});
