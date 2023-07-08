import '@styles';
import { Navbar } from '@components';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/ Navbar',
  component: Navbar,
} as Meta<typeof Navbar>;

export const Default: StoryObj<typeof Navbar> = {};
