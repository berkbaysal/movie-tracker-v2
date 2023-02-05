import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@styles';
import SearchBar from './SearchBar';

export default {
  title: 'Elements/Search Bar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = () => <SearchBar />;

export const Default = Template.bind({});
