import { getMovieCredits, getMovieInfo, getMovieRecommendations } from '@services/apiServices';
import { ContentSummary, CastSlider, Recommendations } from '@components';
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
  const [movieInfo, credits, recommendations] = await Promise.all([
    getMovieInfo(params.id),
    getMovieCredits(params.id),
    getMovieRecommendations(params.id),
  ]);

  return (
    <>
      <ContentSummary contentInfo={movieInfo} credits={credits} />
      <CastSlider cast={credits.cast} />
      <Recommendations recommendations={recommendations.results} />
    </>
  );
}

export default MoviePage;
