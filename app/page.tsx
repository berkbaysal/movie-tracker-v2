import React from 'react';
import Head from 'next/head';
import { Featured, Trending, EditorsPicks } from '@components';
import { getTrendingList } from '@services/api';
import config from '@utilities/config';
import { mockPostsData, mockEditorsPicks } from '@utilities/mockData';

// mockPostsData TO BE REMOVED WHEN DB IS CONNECTED

async function Home() {
  const trending = await getTrendingList({
    limit: config.TRENDING_DISPLAY_AMOUNT,
  });
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

export default Home;
