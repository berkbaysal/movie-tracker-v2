import { Trending } from '@components';
import '@styles';
import { Meta, StoryObj } from '@storybook/react';
import { mapTrendingResponseToMediaContent } from '@utilities/mappers';
import { mockTrendingResponse } from '@services/models/mocks';
import { TrendingResponse } from '@services/models';

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
  args: { trending: mapTrendingResponseToMediaContent(mockTrendingResponse.results as TrendingResponse[]) },
};
