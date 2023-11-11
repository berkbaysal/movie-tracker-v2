import { mockRecommendations } from '@utilities/mockData';
import { Recommendations } from '@components';
import '@styles';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Recommendations',
  component: Recommendations,
  argTypes: {
    recommendations: {
      table: { disable: true },
    },
  },
} as Meta<typeof Recommendations>;

export const Default: StoryObj<typeof Recommendations> = {
  args: { recommendations: mockRecommendations.results },
};
