import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import '../../../scss/main.scss';

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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Reverse = Template.bind({});

Default.args = { variant: 'default' };
Reverse.args = { variant: 'reverse' };
