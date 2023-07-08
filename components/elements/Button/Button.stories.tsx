import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@elements';
import '@styles';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    label: {
      control: 'text',
      name: 'Label',
      defaultValue: 'click me',
    },
  },
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: { variant: 'default', label: 'click me' },
};
export const Reverse: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    variant: 'reverse',
  },
};
