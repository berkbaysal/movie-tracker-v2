import { Meta, StoryObj } from '@storybook/react';
import '@styles';

import { ContentSummary } from '@components';
import { mockMovieCreditsResponse, mockMovieDetailResponse } from '@services/models/mocks';
import { mapMovieDetailResponseToMediaContent } from '@utilities/mappers';

export default {
  title: 'Components/ContentSummary',
  component: ContentSummary,
  argTypes: {
    contentInfo: {
      table: { disable: true },
    },
    credits: {
      table: { disable: true },
    },
  },
} as Meta<typeof ContentSummary>;

export const Movie: StoryObj<typeof ContentSummary> = {
  args: {
    contentInfo: mapMovieDetailResponseToMediaContent(mockMovieDetailResponse),
    credits: mockMovieCreditsResponse,
  },
};
