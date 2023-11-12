import {
  MovieCreditsResponse,
  MovieDetailResponse,
  MovieRecommendationResponse,
  MovieSearchResultResponse,
  TrendingResponse,
  TvSearchResultResponse,
} from '@services/models';
import { Cast, Crew, MediaContent, MediaContentCredits, MediaContentDetails } from './interfacesApp';

// Movie
export function mapMovieDetailResponseToMediaContent(response: MovieDetailResponse): MediaContentDetails {
  return {
    mediaType: 'movie',
    id: response.id,
    title: response.title,
    year: response.release_date,
    runtime: response.runtime,
    posterPath: response.poster_path,
    overview: response.overview,
    tagline: response.tagline,
    genres: response.genres,
  };
}

export function mapMovieSearchResultToMediaContent(response: MovieSearchResultResponse): MediaContent {
  return {
    mediaType: 'movie',
    id: response.id,
    title: response.title,
    year: response.release_date,
    posterPath: response.poster_path,
  };
}

export function mapMovieRecommendationResponseToMediaContent(response: MovieRecommendationResponse[]): MediaContent[] {
  const formattedResults: MediaContent[] = [];
  response.forEach((item) => {
    formattedResults.push({
      mediaType: item.media_type,
      id: item.id,
      title: item.title,
      year: item.release_date,
      posterPath: item.poster_path,
    } as MediaContent);
  });

  return formattedResults;
}

// Tv

export function mapTvSearchResultToMediaContent(response: TvSearchResultResponse): MediaContent {
  return {
    mediaType: 'tv',
    id: response.id,
    title: response.name,
    year: response.first_air_date,
    posterPath: response.poster_path,
  };
}

// Trending

export function mapTrendingResponseToMediaContent(response: TrendingResponse[]): MediaContent[] {
  const formattedResults: MediaContent[] = [];
  response
    .filter((item) => item.media_type === 'movie' || item.media_type === 'tv')
    .forEach((item) => {
      formattedResults.push({
        mediaType: item.media_type,
        id: item.id,
        title: item.title || item.name,
        year: item.release_date || item.first_air_date,
        posterPath: item.poster_path,
      } as MediaContent);
    });

  return formattedResults;
}

// Credits

export function mapMovieCreditsResponseToMediaContent(response: MovieCreditsResponse): MediaContentCredits {
  const cast: Cast[] = [];
  const crew: Crew[] = [];

  response.cast.forEach((item) => {
    cast.push({
      id: item.id,
      name: item.name,
      character: item.character,
      picturePath: item.profile_path,
    });
  });

  response.crew.forEach((item) => {
    crew.push({
      id: item.id,
      name: item.name,
      job: item.job,
      picturePath: item.profile_path,
    });
  });

  return {
    cast,
    crew,
  };
}
