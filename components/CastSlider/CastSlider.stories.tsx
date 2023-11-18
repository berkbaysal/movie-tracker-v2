import { Meta, StoryObj } from '@storybook/react';
import '@styles';
import { mockMovieCreditsResponse } from '@services/models/mocks';
import { CastSlider } from '@components';

export default {
  title: 'Components/CastSlider',
  component: CastSlider,
  argTypes: {
    contentInfo: {
      table: { disable: true },
    },
    credits: {
      table: { disable: true },
    },
  },
} as Meta<typeof CastSlider>;

export const Movie: StoryObj<typeof CastSlider> = {
  args: {
    cast: mockMovieCreditsResponse.cast,
  },
};
