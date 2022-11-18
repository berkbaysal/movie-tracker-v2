import React from 'react';
import Navbar from '../components/Navbar';
import Trending from '../components/Trending';
import { siteURL } from '../static/resources';
import config from '../static/config';
import { TrendingResult } from '../static/interfacesApp';

interface HomeProps {
  trending: TrendingResult[];
}

export default function Home({ trending }: HomeProps) {
  return (
    <div>
      <Navbar />
      <Trending trending={trending} />
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
