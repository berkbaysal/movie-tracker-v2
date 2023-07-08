import { Meta, StoryObj } from '@storybook/react';
import '@styles';
import { mockMovieContentSummary } from '@utilities/mockData';
import { ContentSummary } from '@components';

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
    contentInfo: mockMovieContentSummary.contentInfo,
    credits: mockMovieContentSummary.credits,
  },
};
