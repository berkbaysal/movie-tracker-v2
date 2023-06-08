import React from 'react';
import Head from 'next/head';
import '../scss/main.scss';
import { Navbar, Footer } from '@components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="application-name" content="movie-tracker" />
        <meta
          name="description"
          content="Track the movies and tv shows you watched"
        />
        <meta name="keywords" content="film , movie, tv shows, tv series" />
      </Head>
      <body className="o-page-content-cotainer">
        <Navbar />
        <div className="o-page-content-cotainer__body">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
