import { getMovieCredits, getMovieInfo } from '@services/apiServices';
import { ContentSummary, CastSlider } from '@components';
import React from 'react';

interface IMoviePageProps {
  params: {
    id: number;
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
