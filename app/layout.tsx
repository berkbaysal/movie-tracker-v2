import React from 'react';
import Head from 'next/head';
import '../scss/main.scss';
import { Navbar, Footer } from '@components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  applicationName: 'movie-tracker',
  title: 'The Movie Tracker',
  description: 'Track the movies and tv shows you watched',
  keywords: 'film , movie, tv shows, tv series',
  icons: '/img/logo-icon.svg',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link href="./img/logo.svg" rel="icon" type="image/svg" />
      </Head>
      <body className="o-page-content-cotainer">
        <Navbar />
        <div className="o-page-content-cotainer__body">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
