import React from 'react';
import Navbar from '../components/Navbar';
import Trending from '../components/Trending';
import { MovieListResult } from '../static/interfacesAPI';
import { siteURL } from '../static/resources';
import config from '../static/config';

interface HomeProps {
  trending: MovieListResult[];
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
  const props: { trending: MovieListResult[] } = { trending: [] };
  await fetch(
    `${siteURL}/api/trending?maxResults=${config.TRENDING_DISPLAY_AMOUNT}`
  )
    .then((res) => res.json())
    .then((data) => {
      props.trending = data;
    });

  return { props };
}
