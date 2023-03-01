import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@styles';
import ContentSummary from './ContentSummary';

export default {
  title: 'Components/ContentSummary',
  component: ContentSummary,
} as ComponentMeta<typeof ContentSummary>;

const Template: ComponentStory<typeof ContentSummary> = () => (
  <ContentSummary />
);

export const Default = Template.bind({});
