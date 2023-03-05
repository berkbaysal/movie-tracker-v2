import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@styles';
import { mockMovieContentSummary } from '@utilities/mockData';
import ContentSummary from './ContentSummary';

export default {
  title: 'Components/ContentSummary',
  component: ContentSummary,
} as ComponentMeta<typeof ContentSummary>;

const Template: ComponentStory<typeof ContentSummary> = () => (
  <ContentSummary
    contentInfo={mockMovieContentSummary.contentInfo}
    credits={mockMovieContentSummary.credits}
  />
);

export const Movie = Template.bind({});
