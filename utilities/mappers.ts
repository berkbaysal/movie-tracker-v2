import {
  MovieCreditsResponse,
  MovieDetailResponse,
  MovieRecommendationResponse,
  MovieSearchResultResponse,
  MultiSearchResponse,
  TrendingResponse,
  TvCreditsResponse,
  TvRecommendationResponse,
  TvSearchResultResponse,
} from '@services/models';
import TvDetailResponse from '@services/models/response/tv/TvDetailResponse.type';
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
    backgroundImagePath: response.backdrop_path,
  };
}

export function mapMovieSearchResultToMediaContent(response: MovieSearchResultResponse): MediaContent {
  return {
    mediaType: 'movie',
    id: response.id,
    title: response.title,
    year: response.release_date,
    posterPath: response.poster_path,
    backgroundImagePath: response.backdrop_path,
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
      backgroundImagePath: item.backdrop_path,
    } as MediaContent);
  });

  return formattedResults;
}

export function mapMovieCreditsResponseToMediaContentCredits(response: MovieCreditsResponse): MediaContentCredits {
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

// Tv

export function mapTvSearchResultToMediaContent(response: TvSearchResultResponse): MediaContent {
  return {
    mediaType: 'tv',
    id: response.id,
    title: response.name,
    year: response.first_air_date,
    posterPath: response.poster_path,
    backgroundImagePath: response.backdrop_path,
  };
}

export function mapTvDetailResponseToMediaContent(response: TvDetailResponse): MediaContentDetails {
  return {
    mediaType: 'tv',
    id: response.id,
    title: response.name,
    year: response.first_air_date,
    runtime: response.episode_run_time[0],
    posterPath: response.poster_path,
    overview: response.overview,
    tagline: response.tagline,
    genres: response.genres,
    backgroundImagePath: response.backdrop_path,
  };
}

export function mapTvCreditsResponseToMediaContentCredits(response: TvCreditsResponse): MediaContentCredits {
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

export function mapTvRecommendationResponseToMediaContent(response: TvRecommendationResponse[]): MediaContent[] {
  const formattedResults: MediaContent[] = [];
  response.forEach((item) => {
    formattedResults.push({
      mediaType: item.media_type,
      id: item.id,
      title: item.name,
      year: item.first_air_date,
      posterPath: item.poster_path,
      backgroundImagePath: item.backdrop_path,
    } as MediaContent);
  });

  return formattedResults;
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
        backgroundImagePath: item.backdrop_path,
      } as MediaContent);
    });

  return formattedResults;
}

// Search

export function mapMultiSearchResponseToMediaContent(response: MultiSearchResponse[]): MediaContent[] {
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
        backgroundImagePath: item.backdrop_path,
      } as MediaContent);
    });

  return formattedResults;
}
