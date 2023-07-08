import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@styles';
import EditorsPicksUnit from './EditorsPicksUnit';

export default {
  title: 'Sub-Components/EditorsPicksUnit',
  component: EditorsPicksUnit,
  argTypes: {
    title: {
      control: 'text',
      name: 'Film Title',
      defaultValue: 'La La Land',
    },
    posterPath: {
      control: 'text',
      name: 'TMDB Poster Image Path (relative)',
      defaultValue: '/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
    },
    year: {
      control: 'text',
      name: 'Year',
      defaultValue: '2016',
    },
    id: {
      table: { disable: true },
      defaultValue: 313369,
    },
  },
} as Meta<typeof EditorsPicksUnit>;

export const Default: StoryObj<typeof EditorsPicksUnit> = {
  args: {
    title: 'La La Land',
    posterPath: '/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
    year: '2016',
    mediaType: 'movie',
    id: 313369,
  },
  render: ({ title, posterPath, year, id }) => (
    <div style={{ width: 'min(22vw, 300px)' }}>
      <EditorsPicksUnit
        title={title}
        posterPath={posterPath}
        year={year}
        mediaType="movie"
        id={id}
      />
    </div>
  ),
};
