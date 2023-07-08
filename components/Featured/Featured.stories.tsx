import { Meta, StoryObj } from '@storybook/react';
import { mockPostsData } from '@utilities/mockData';
import '@styles';
import { Featured } from '@components';

export default {
  title: 'Components/ Featured',
  component: Featured,
} as Meta<typeof Featured>;

export const Default: StoryObj<typeof Featured> = {
  args: {
    posts: mockPostsData,
    buttonText: 'Read more',
  },
};
