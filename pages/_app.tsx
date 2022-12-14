import Head from 'next/head';
import '../scss/main.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="application-name" content="movie-tracker" />
        <meta
          name="description"
          content="Track the movies and tv shows you watched"
        />
        <meta name="keywords" content="film , movie, tv shows, tv series" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
