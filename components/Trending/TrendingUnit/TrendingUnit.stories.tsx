import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@styles';
import TrendingUnit from './TrendingUnit';

export default {
  title: 'Sub-Components/TrendingUnit',
  component: TrendingUnit,
  argTypes: {
    id: {
      table: { disable: true },
    },
    mediaType: {
      table: { disable: true },
    },
    priority: {
      table: { disable: true },
    },
  },
} as Meta<typeof TrendingUnit>;

export const Default: StoryObj<typeof TrendingUnit> = {
  args: {
    variant: 'default',
    title: 'Film Title',
    posterPath: '/ekZobS8isE6mA53RAiGDG93hBxL.jpg',
    mediaType: 'movie',
    id: 1,
  },
  render: ({ variant, title, posterPath, mediaType, id }) => {
    return (
      <div
        style={{
          width: variant === 'default' ? '200px' : '350px',
          position: 'relative',
        }}
      >
        <TrendingUnit
          variant={variant}
          title={title}
          posterPath={posterPath}
          mediaType={mediaType}
          id={id}
        />
      </div>
    );
  },
};
