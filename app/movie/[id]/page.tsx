import { getMovieCredits, getMovieInfo } from '@services/apiServices';
import { ContentSummary, CastSlider } from '@components';
import React from 'react';
import { Metadata } from 'next';

interface IMoviePageProps {
  params: {
    id: number;
  };
}

export async function generateMetadata({ params }: IMoviePageProps): Promise<Metadata> {
  const { id } = params;
  const movieInfo = await getMovieInfo(id);

  return {
    title: movieInfo.title,
  };
}

async function MoviePage({ params }: IMoviePageProps) {
  const [movieInfo, credits] = await Promise.all([getMovieInfo(params.id), getMovieCredits(params.id)]);

  return (
    <>
      <ContentSummary contentInfo={movieInfo} credits={credits} />
      <CastSlider cast={credits.cast} />
    </>
  );
}

export default MoviePage;
