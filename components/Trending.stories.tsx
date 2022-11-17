import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Trending from './Trending';
import '../scss/main.scss';
import { MovieListResult, TVListResult } from '../static/interfaces';

const mockProps: (TVListResult | MovieListResult)[] = [
  {
    adult: false,
    backdrop_path: '/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg',
    id: 505642,
    title: 'Black Panther: Wakanda Forever',
    original_language: 'en',
    original_title: 'Black Panther: Wakanda Forever',
    overview:
      'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
    poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    media_type: 'movie',
    genre_ids: [28, 12, 878],
    popularity: 3728.879,
    release_date: '2022-11-09',
    video: false,
    vote_average: 7.5,
    vote_count: 670,
  },
  {
    adult: false,
    backdrop_path: '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
    id: 436270,
    title: 'Black Adam',
    original_language: 'en',
    original_title: 'Black Adam',
    overview:
      'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
    poster_path: '/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg',
    media_type: 'movie',
    genre_ids: [28, 14, 878],
    popularity: 4430.63,
    release_date: '2022-10-19',
    video: false,
    vote_average: 6.853,
    vote_count: 1119,
  },
  {
    adult: false,
    backdrop_path: '/olPXihyFeeNvnaD6IOBltgIV1FU.jpg',
    id: 882598,
    title: 'Smile',
    original_language: 'en',
    original_title: 'Smile',
    overview:
      "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
    poster_path: '/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg',
    media_type: 'movie',
    genre_ids: [27, 9648, 53],
    popularity: 3419.675,
    release_date: '2022-09-23',
    video: false,
    vote_average: 6.764,
    vote_count: 563,
  },
  {
    adult: false,
    backdrop_path: '/n2OaA7Je0fgcVnfJM7xDJoPny7x.jpg',
    id: 829280,
    title: 'Enola Holmes 2',
    original_language: 'en',
    original_title: 'Enola Holmes 2',
    overview:
      'Now a detective-for-hire like her infamous brother, Enola Holmes takes on her first official case to find a missing girl, as the sparks of a dangerous conspiracy ignite a mystery that requires the help of friends — and Sherlock himself — to unravel.',
    poster_path: '/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg',
    media_type: 'movie',
    genre_ids: [9648, 12, 80],
    popularity: 1961.331,
    release_date: '2022-11-04',
    video: false,
    vote_average: 7.744,
    vote_count: 894,
  },
  {
    adult: false,
    backdrop_path: '/79PcXPpbDWql74h8Y00mNwbYMbS.jpg',
    id: 664469,
    title: 'Amsterdam',
    original_language: 'en',
    original_title: 'Amsterdam',
    overview:
      'In the 1930s, three friends—a doctor, a nurse, and an attorney—witness a murder, become suspects themselves and uncover one of the most outrageous plots in North American history.',
    poster_path: '/6sJcVzGCwrDCBMV0DU6eRzA2UxM.jpg',
    media_type: 'movie',
    genre_ids: [80, 35, 36, 9648, 53],
    popularity: 358.861,
    release_date: '2022-09-27',
    video: false,
    vote_average: 6.077,
    vote_count: 300,
  },
  {
    adult: false,
    backdrop_path: '/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg',
    id: 49046,
    title: 'All Quiet on the Western Front',
    original_language: 'de',
    original_title: 'Im Westen nichts Neues',
    overview:
      'Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.',
    poster_path: '/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg',
    media_type: 'movie',
    genre_ids: [10752, 18, 28],
    popularity: 1420.85,
    release_date: '2022-10-07',
    video: false,
    vote_average: 7.828,
    vote_count: 793,
  },
  {
    adult: false,
    backdrop_path: '/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg',
    id: 361743,
    title: 'Top Gun: Maverick',
    original_language: 'en',
    original_title: 'Top Gun: Maverick',
    overview:
      'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.',
    poster_path: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    media_type: 'movie',
    genre_ids: [28, 18],
    popularity: 761.054,
    release_date: '2022-05-24',
    video: false,
    vote_average: 8.345,
    vote_count: 4751,
  },
  {
    adult: false,
    backdrop_path: '/ajztm40qDPqMONaSJhQ2PaNe2Xd.jpg',
    id: 83867,
    name: 'Star Wars: Andor',
    original_language: 'en',
    original_name: 'Star Wars: Andor',
    overview:
      'The tale of the burgeoning rebellion against the Empire and how people and planets became involved. In an era filled with danger, deception and intrigue, Cassian Andor embarks on the path that is destined to turn him into a rebel hero.',
    poster_path: '/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg',
    media_type: 'tv',
    genre_ids: [10765, 10759, 10768],
    popularity: 798.887,
    first_air_date: '2022-09-21',
    vote_average: 8.102,
    vote_count: 266,
    origin_country: ['US'],
  },
  {
    adult: false,
    backdrop_path: '/sMdOToOg7KXM7j7cOu1QtjB6rkr.jpg',
    id: 114463,
    name: 'Zootopia+',
    original_language: 'en',
    original_name: 'Zootopia+',
    overview:
      'Head back to the fast-paced mammal metropolis of Zootopia in this short-form series that dives deeper into the lives of some of the film’s most intriguing characters, including Fru Fru, the newly married arctic shrew; Gazelle’s talented tiger dancers; and the sloth full of surprises, Flash.',
    poster_path: '/inzPPPr2BsE92m4rHhQn3sf2yPk.jpg',
    media_type: 'tv',
    genre_ids: [16, 10751, 10759],
    popularity: 445.42,
    first_air_date: '2022-11-09',
    vote_average: 8.076,
    vote_count: 46,
    origin_country: ['US'],
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
