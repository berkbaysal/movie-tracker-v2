import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { mockTrendingResults } from '@utilities/mockData';
import Trending from './Trending';
import '@styles';

export default {
  title: 'Components/Trending',
  component: Trending,
  argTypes: {
    trending: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof Trending>;

const Template: ComponentStory<typeof Trending> = () => (
  <Trending trending={mockTrendingResults} />
);

export const Default = Template.bind({});
