import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { filterTrendingResults } from '@services/apiServices';
import { mockTrendingApiData } from '@utilities/mockData';
import { TrendingResult } from '@utilities/interfacesApp';
import Trending from './Trending';
import '@styles';

const mockTrendingResults: TrendingResult[] = filterTrendingResults(
  mockTrendingApiData,
  10
);

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
