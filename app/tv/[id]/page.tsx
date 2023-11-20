import { getMovieRecommendations, getTvCredits, getTvShowInfo } from '@services/api';
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
  const movieInfo = await getTvShowInfo(id);

  return {
    title: movieInfo.title,
  };
}

async function MoviePage({ params }: IMoviePageProps) {
  const [movieInfo, credits, recommendations] = await Promise.all([
    getTvShowInfo(params.id),
    getTvCredits(params.id),
    getMovieRecommendations(params.id),
  ]);

  return (
    <>
      <ContentSummary contentInfo={movieInfo} credits={credits} />
      <CastSlider cast={credits.cast} />
      {recommendations.length > 0 && <Recommendations recommendations={recommendations} />}
    </>
  );
}

export default MoviePage;
