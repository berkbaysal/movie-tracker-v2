import { getMovieCredits, getMovieInfo } from '@services/apiServices';
import { MovieCredits, MovieListResult } from '@utilities/interfacesAPI';
import { ContentSummary } from '@components';
import { NextPageContext } from 'next';
import React from 'react';

interface IMoviePageProps {
  movieInfo: MovieListResult;
  credits: MovieCredits;
}

function MoviePage({ movieInfo, credits }: IMoviePageProps) {
  return <ContentSummary contentInfo={movieInfo} credits={credits} />;
}

export default MoviePage;

export async function getServerSideProps(context: IMoviePageContext) {
  const [movieInfo, credits] = await Promise.all([
    getMovieInfo(context.params.id),
    getMovieCredits(context.params.id),
  ]);
  return { props: { movieInfo, credits } };
}

interface IMoviePageContext extends NextPageContext {
  params: {
    id: number;
  };
}
