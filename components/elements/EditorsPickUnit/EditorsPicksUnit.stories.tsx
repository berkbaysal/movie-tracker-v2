import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../../scss/main.scss';
import EditorsPicksUnit from './EditorsPicksUnit';

export default {
  title: 'Elements/EditorsPicksUnit',
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
  },
} as ComponentMeta<typeof EditorsPicksUnit>;

const Template: ComponentStory<typeof EditorsPicksUnit> = (args) => {
  return (
    <div style={{ width: 'min(22vw, 300px)' }}>
      <EditorsPicksUnit {...args} />
    </div>
  );
};

export const Default = Template.bind({});
