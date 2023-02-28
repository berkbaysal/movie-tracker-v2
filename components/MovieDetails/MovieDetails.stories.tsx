import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@styles';
import MovieDetails from './MovieDetails';

export default {
  title: 'Components/MovieDetails',
  component: MovieDetails,
} as ComponentMeta<typeof MovieDetails>;

const Template: ComponentStory<typeof MovieDetails> = () => <MovieDetails />;

export const Default = Template.bind({});
