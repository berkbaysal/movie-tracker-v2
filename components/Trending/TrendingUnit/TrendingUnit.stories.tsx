import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@styles';
import TrendingUnit from './TrendingUnit';

export default {
  title: 'Sub-Components/TrendingUnit',
  component: TrendingUnit,
  argTypes: {
    title: {
      control: 'text',
      name: 'Film Title',
      defaultValue: 'Film Title',
    },
    posterPath: {
      control: 'text',
      name: 'TMDB Poster Image Path (relative)',
      defaultValue: '/ekZobS8isE6mA53RAiGDG93hBxL.jpg',
    },
    variant: {
      control: 'select',
      name: 'Variant',
    },
    width: {
      table: { disable: true },
    },
    height: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof TrendingUnit>;

const Template: ComponentStory<typeof TrendingUnit> = (args) => {
  const { variant } = args;
  return (
    <div
      style={{
        width: variant === 'default' ? '200px' : '350px',
        position: 'relative',
      }}
    >
      <TrendingUnit {...args} />
    </div>
  );
};

export const Default = Template.bind({});
export const Large = Template.bind({});

Default.args = { variant: 'default' };
Large.args = { variant: 'large' };
