import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@styles';
import { mockMovieRecommendationResponse } from '@services/models/mocks';
import { mapMovieRecommendationResponseToMediaContent } from '@utilities/mappers';
import { MovieRecommendationResponse } from '@services/models';
import RecommendationUnit from './RecommendationUnit';

export default {
  title: 'Sub-Components/RecommendationUnit',
  component: RecommendationUnit,
  argTypes: {
    title: {
      control: 'text',
      name: 'Content Title',
      defaultValue: 'Oppenheimer',
    },
    posterPath: {
      control: 'text',
      name: 'TMDB Poster Image Path (relative)',
      defaultValue: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    },
    id: {
      table: { disable: true },
      defaultValue: 872585,
    },
  },
} as Meta<typeof RecommendationUnit>;

export const Default: StoryObj<typeof RecommendationUnit> = {
  args: {
    reccomendation: mapMovieRecommendationResponseToMediaContent(
      mockMovieRecommendationResponse.results as MovieRecommendationResponse[]
    )[0],
  },
  render: ({ reccomendation }) => (
    <div style={{ width: 'min(22vw, 300px)' }}>
      <RecommendationUnit reccomendation={reccomendation} />
    </div>
  ),
};
