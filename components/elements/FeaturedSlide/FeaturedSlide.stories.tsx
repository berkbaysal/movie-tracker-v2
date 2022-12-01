import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FeaturedSlide from './FeaturedSlide';
import { mockPostsData } from '../../../util/mockData';
import '../../../scss/main.scss';

export default {
  title: 'Elements/FeaturedSlide',
  component: FeaturedSlide,
  parameters: {
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    postTitle: {
      control: 'text',
      name: 'Featured post title',
      description: 'Title of the featured post, passed inside post object',
      defaultValue: mockPostsData[0].postTitle,
    },
    backgroundImage: {
      control: false,
      description:
        'Background image of the slide, passed inside post object.\n\n(Must be staticly imported or hosted locally)',
      defaultValue: mockPostsData[0].backgroundImage,
    },
    id: {
      control: false,
      description:
        'Id of the featured post, passed inside post object, not used by the component\n\n(Will be used for linking to article in the future)',
      defaultValue: mockPostsData[0].id,
    },
    buttonText: {
      control: 'text',
      name: 'Button text',
      description: 'Label of the button on the slide',
      defaultValue: 'Read more',
    },
    swipeHandler: {
      description: 'Event handler passed to handle mobile swipe events',
      control: false,
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
