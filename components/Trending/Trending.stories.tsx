import { filterTrendingResults } from '@services/apiServices';
import { mockTrendingApiData } from '@utilities/mockData';
import { TrendingResult } from '@utilities/interfacesApp';
import { Trending } from '@components';
import '@styles';
import { Meta, StoryObj } from '@storybook/react';

const mockTrendingResults: TrendingResult[] = filterTrendingResults(
  mockTrendingApiData,
  9
);

export default {
  title: 'Components/Trending',
  component: Trending,
  argTypes: {
    trending: {
      table: { disable: true },
    },
  },
} as Meta<typeof Trending>;

export const Default: StoryObj<typeof Trending> = {
  args: { trending: mockTrendingResults },
};
