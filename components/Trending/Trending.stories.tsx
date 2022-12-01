import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Trending from './Trending';
import '../../scss/main.scss';
import { mockTrendingResults } from '../../util/mockData';

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
