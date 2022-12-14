import React from 'react';
import Head from 'next/head';
import Trending from '../components/Trending/Trending';
import getTrendingList from '../services/getTrendingList';
import config from '../util/config';
import { TrendingResult } from '../util/interfacesApp';
import Featured from '../components/Featured/Featured';
import { mockPostsData } from '../util/mockData';

interface HomeProps {
  trending: TrendingResult[];
}

// mockPostsData TO BE REMOVED WHEN DB IS CONNECTED

export default function Home({ trending }: HomeProps) {
  return (
    <div>
      <Head>
        <title key="title">Movie Tracker Home Page</title>
      </Head>
      <h1 className="u-visually-hidden">Movie Tracker Home Page</h1>
      <Trending trending={trending} />
      <Featured posts={mockPostsData} />
    </div>
  );
}

export async function getServerSideProps() {
  const props: { trending: TrendingResult[] } = { trending: [] };
  props.trending = await getTrendingList({
    limit: config.TRENDING_DISPLAY_AMOUNT,
  });
  return { props };
}
