import React from 'react';
import Head from 'next/head';
import { Featured, Trending, EditorsPicks } from '@components';
import { getTrendingList } from '@services/apiServices';
import config from '@utilities/config';
import { TrendingResult } from '@utilities/interfacesApp';
import { mockPostsData, mockEditorsPicks } from '@utilities/mockData';

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
      <EditorsPicks editorsPicks={mockEditorsPicks} />
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
