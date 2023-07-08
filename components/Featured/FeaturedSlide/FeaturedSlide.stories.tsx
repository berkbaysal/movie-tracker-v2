import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { mockPostsData } from '@utilities/mockData';
import FeaturedSlide from './FeaturedSlide';
import '@styles';

export default {
  title: 'Sub-Components/FeaturedSlide',
  component: FeaturedSlide,
  parameters: {
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    swipeHandler: {
      table: { disable: true },
    },
  },
} as Meta<typeof FeaturedSlide>;

export const Default: StoryObj<typeof FeaturedSlide> = {
  args: {
    postTitle: mockPostsData[0].postTitle,
    backgroundImage: mockPostsData[0].backgroundImage,
    id: mockPostsData[0].id,
    buttonText: 'Read more',
    swipeHandler: undefined,
  },
  render: ({ postTitle, backgroundImage, id, buttonText, swipeHandler }) => (
    <div className="c-featured">
      <FeaturedSlide
        postTitle={postTitle}
        backgroundImage={backgroundImage}
        id={id}
        buttonText={buttonText}
        swipeHandler={swipeHandler}
      />
    </div>
  ),
};
