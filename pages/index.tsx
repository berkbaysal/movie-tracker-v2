import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Trending from '../components/Trending/Trending';
import { siteURL } from '../util/resources';
import config from '../util/config';
import { TrendingResult } from '../util/interfacesApp';
import Featured from '../components/Featured/Featured';

interface HomeProps {
  trending: TrendingResult[];
}

const mockDBdata = [
  {
    postTitle: 'Shaping film through music',
    backgroundImageUrl:
      'https://www.musicnotes.com/now/wp-content/uploads/Piano-Fingerings.png',
    id: 1,
  },
  {
    postTitle: 'Filmmaking equipment for aspiring directors',
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1619099619226-f96e319e3732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlsbSUyMGNhbWVyYXxlbnwwfHwwfHw%3D&w=1000&q=80',
    id: 2,
  },
  {
    postTitle: 'How COVID changed movie theater business',
    backgroundImageUrl:
      'https://img.freepik.com/free-photo/happy-family-sitting-cinema_23-2148202053.jpg',
    id: 3,
  },
];
// MOCKDB DATA TO BE REMOVED WHEN DB IS CONNECTED

export default function Home({ trending }: HomeProps) {
  return (
    <div>
      <Head>
        <title key="title">Movie Tracker Home Page</title>
      </Head>
      <Navbar />
      <h1 className="u-visually-hidden">Movie Tracker Home Page</h1>
      <Trending trending={trending} />
      <Featured posts={mockDBdata} />
    </div>
  );
}

export async function getServerSideProps() {
  const props: { trending: TrendingResult[] } = { trending: [] };
  await fetch(
    `${siteURL}/api/trending?maxResults=${config.TRENDING_DISPLAY_AMOUNT}`
  )
    .then((res) => res.json())
    .then((data) => {
      props.trending = data;
    });

  return { props };
}
