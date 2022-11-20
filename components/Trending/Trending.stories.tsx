import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Trending from './Trending';
import '../../scss/main.scss';
import { TrendingResult } from '../../static/interfacesApp';

// Mock API answer
const mockProps: TrendingResult[] = [
  {
    title: 'Black Panther: Wakanda Forever',
    posterPath: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
  },
  {
    title: 'Black Adam',
    posterPath: '/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg',
  },
  {
    title: 'Smile',
    posterPath: '/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg',
  },
  {
    title: 'Enola Holmes 2',
    posterPath: '/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg',
  },
  {
    title: 'Amsterdam',
    posterPath: '/6sJcVzGCwrDCBMV0DU6eRzA2UxM.jpg',
  },
  {
    title: 'All Quiet on the Western Front',
    posterPath: '/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg',
  },
  {
    title: 'Top Gun: Maverick',
    posterPath: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
  },
  {
    title: 'Star Wars: Andor',
    posterPath: '/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg',
  },
  {
    title: 'Zootopia+',
    posterPath: '/inzPPPr2BsE92m4rHhQn3sf2yPk.jpg',
  },
];

export default {
  title: 'Components/Trending',
  component: Trending,
  argTypes: {
    trending: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof Trending>;

const Template: ComponentStory<typeof Trending> = () => (
  <Trending trending={mockProps} />
);

export const Default = Template.bind({});
