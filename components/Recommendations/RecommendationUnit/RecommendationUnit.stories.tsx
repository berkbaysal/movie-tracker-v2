import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@styles';
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
    title: 'Oppenheimer',
    posterPath: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    mediaType: 'movie',
    id: 313369,
  },
  render: ({ title, posterPath, id }) => (
    <div style={{ width: 'min(22vw, 300px)' }}>
      <RecommendationUnit title={title} posterPath={posterPath} mediaType="movie" id={id} />
    </div>
  ),
};
