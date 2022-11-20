import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../scss/main.scss';
import Navbar from './Navbar';

export default {
  title: 'Components/ Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});
