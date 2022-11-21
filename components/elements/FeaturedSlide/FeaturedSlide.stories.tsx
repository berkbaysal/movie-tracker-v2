import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FeaturedSlide from './FeaturedSlide';
import '../../../scss/main.scss';

export default {
  title: 'Elements/FeaturedSlide',
  component: FeaturedSlide,
  argTypes: {
    postTitle: {
      control: 'text',
      name: 'Featured post title',
      defaultValue: 'Shaping film through music',
    },
    backgroundImageUrl: {
      control: 'text',
      name: 'Background image URL',
      defaultValue:
        'https://www.musicnotes.com/now/wp-content/uploads/Piano-Fingerings.png',
    },
    buttonText: {
      control: 'text',
      name: 'Button text',
      defaultValue: 'Read more',
    },
    swipeHandler: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof FeaturedSlide>;

const Template: ComponentStory<typeof FeaturedSlide> = (args) => (
  <div className="c-featured">
    <FeaturedSlide {...args} swipeHandler={undefined} />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
