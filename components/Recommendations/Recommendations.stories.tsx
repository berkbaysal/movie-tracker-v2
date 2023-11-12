import { Recommendations } from '@components';
import '@styles';
import { Meta, StoryObj } from '@storybook/react';
import { mapMovieRecommendationResponseToMediaContent } from '@utilities/mappers';
import { mockMovieRecommendationResponse } from '@services/models/mocks';
import { MovieRecommendationResponse } from '@services/models';

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
  args: {
    recommendations: mapMovieRecommendationResponseToMediaContent(
      mockMovieRecommendationResponse.results as MovieRecommendationResponse[]
    ),
  },
};
