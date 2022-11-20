import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../scss/main.scss';
import Featured from './Featured';

const mockDBdata = [
  {
    postTitle: 'Slide one demo title',
    backgroundImageUrl:
      'https://www.musicnotes.com/now/wp-content/uploads/Piano-Fingerings.png',
    id: 1,
  },
  {
    postTitle: 'Slide two demo title',
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1619099619226-f96e319e3732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlsbSUyMGNhbWVyYXxlbnwwfHwwfHw%3D&w=1000&q=80',
    id: 2,
  },
  {
    postTitle: 'Slide three demo title',
    backgroundImageUrl:
      'https://img.freepik.com/free-photo/happy-family-sitting-cinema_23-2148202053.jpg',
    id: 3,
  },
];

export default {
  title: 'Components/ Featured',
  component: Featured,
  argTypes: {
    posts: {
      table: { disable: true },
    },
    buttonText: {
      control: 'text',
      name: 'Button Text',
      defaultValue: 'Read more',
    },
  },
} as ComponentMeta<typeof Featured>;

const Template: ComponentStory<typeof Featured> = (args) => (
  <Featured {...args} posts={mockDBdata} />
);

export const Default = Template.bind({});
