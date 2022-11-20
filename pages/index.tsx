import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Trending from '../components/Trending/Trending';
import { siteURL } from '../static/resources';
import config from '../static/config';
import { TrendingResult } from '../static/interfacesApp';
import Featured from '../components/Featured/Featured';

interface HomeProps {
  trending: TrendingResult[];
}

const mockDBdata = [
  {
    postTitle: '1shaping film through music',
    backgroundImageUrl:
      'https://www.musicnotes.com/now/wp-content/uploads/Piano-Fingerings.png',
    id: 1,
  },
  {
    postTitle: '2shaping film through music',
    backgroundImageUrl:
      'https://www.musicnotes.com/now/wp-content/uploads/Piano-Fingerings.png',
    id: 2,
  },
  {
    postTitle: '3shaping film through music',
    backgroundImageUrl:
      'https://www.musicnotes.com/now/wp-content/uploads/Piano-Fingerings.png',
    id: 3,
  },
];
// MOCKDB DATA TO BE REMOVED WHEN DB IS CONNECTED

export default function Home({ trending }: HomeProps) {
  return (
    <div>
      <Navbar />
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
