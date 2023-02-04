import { NextPageContext } from 'next';
import React from 'react';

interface IMoviePageProps {
  id: number;
}

function MoviePage({ id }: IMoviePageProps) {
  return <div>{id}</div>;
}

export default MoviePage;

export async function getServerSideProps(context: IMoviePageContext) {
  return { props: { id: context.params.id } };
}

interface IMoviePageContext extends NextPageContext {
  params: {
    id: number;
  };
}
