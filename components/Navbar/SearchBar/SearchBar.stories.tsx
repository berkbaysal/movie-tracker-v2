import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '@styles';
import SearchBar from './SearchBar';

export default {
  title: 'Sub-Components/Search Bar',
  component: SearchBar,
  argTypes: {
    setQuery: { action: 'set query', table: { disable: true } },
    setResultsVisible: { action: 'set results visible', table: { disable: true } },
  },
} as Meta<typeof SearchBar>;

export const Default: StoryObj<typeof SearchBar> = {
  args: {
    query: '',
    setQuery: () => {},
    setResultsVisible: () => {},
  },
  render: ({ query, setQuery, setResultsVisible }) => (
    <SearchBar query={query} setQuery={setQuery} setResultsVisible={setResultsVisible} />
  ),
};
