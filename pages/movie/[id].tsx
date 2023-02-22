import { getMovieInfo } from '@services/apiServices';
import { MovieListResult } from '@utilities/interfacesAPI';
import { NextPageContext } from 'next';
import React from 'react';

interface IMoviePageProps {
  movieInfo: MovieListResult;
}

function MoviePage({ movieInfo }: IMoviePageProps) {
  return <div>{movieInfo.title}</div>;
}

export default MoviePage;

export async function getServerSideProps(context: IMoviePageContext) {
  const movieInfo = await getMovieInfo(context.params.id);

  return { props: { movieInfo } };
}

interface IMoviePageContext extends NextPageContext {
  params: {
    id: number;
  };
}
