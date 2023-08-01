import { Meta, StoryObj } from '@storybook/react';
import '@styles';
import { mockCredits } from '@utilities/mockData';
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
    cast: mockCredits.cast,
  },
};
