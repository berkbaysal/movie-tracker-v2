import dotenv from 'dotenv';
import { apiURL } from '@utilities/resources';
import { MediaContent, MediaContentCredits, MediaContentDetails } from '@utilities/interfacesApp';
import axios from 'axios';
import {
  mapMovieCreditsResponseToMediaContentCredits,
  mapMovieDetailResponseToMediaContent,
  mapMovieRecommendationResponseToMediaContent,
  mapTrendingResponseToMediaContent,
  mapTvCreditsResponseToMediaContentCredits,
  mapTvDetailResponseToMediaContent,
  mapTvRecommendationResponseToMediaContent,
} from '@utilities/mappers';
import {
  MovieCreditsResponse,
  MovieDetailResponse,
  MovieRecommendationResponse,
  PaginatedResponse,
  TrendingResponse,
  TvDetailResponse,
  TvCreditsResponse,
  TvRecommendationResponse,
} from './models';

dotenv.config();

const params = {
  api_key: process.env.MOVIE_DB_API_KEY,
  language: 'en-US',
};

interface GetTrendingListParameters {
  limit?: number;
  period?: 'week' | 'day';
}

// Trending
export async function getTrendingList({ limit = 20, period = 'week' }: GetTrendingListParameters = {}): Promise<
  MediaContent[]
> {
  const maxResults = limit <= 20 ? limit : 20;

  const fetchRes = await axios
    .get<PaginatedResponse<TrendingResponse>>(`${apiURL}/trending/all/${period}`, { params })
    .then((res) => res.data)
    .then((res) => mapTrendingResponseToMediaContent(res.results));
  return fetchRes.slice(0, maxResults);
}

// Movie
export async function getMovieInfo(id: number): Promise<MediaContentDetails> {
  const fetchRes = await axios
    .get<MovieDetailResponse>(`${apiURL}/movie/${id}`, { params })
    .then((res) => res.data)
    .then((res) => mapMovieDetailResponseToMediaContent(res));

  return fetchRes;
}

export async function getMovieCredits(id: number): Promise<MediaContentCredits> {
  const fetchRes = await axios
    .get<MovieCreditsResponse>(`${apiURL}/movie/${id}/credits`, { params })
    .then((res) => res.data)
    .then((res) => mapMovieCreditsResponseToMediaContentCredits(res));

  return fetchRes;
}

export async function getMovieRecommendations(id: number): Promise<MediaContent[]> {
  const fetchRes = await axios
    .get<PaginatedResponse<MovieRecommendationResponse>>(`${apiURL}/movie/${id}/recommendations`, { params })
    .then((res) => res.data)
    .then((res) => mapMovieRecommendationResponseToMediaContent(res.results));

  return fetchRes;
}

// TV
export async function getTvShowInfo(id: number): Promise<MediaContentDetails> {
  const fetchRes = await axios
    .get<TvDetailResponse>(`${apiURL}/tv/${id}`, { params })
    .then((res) => res.data)
    .then((res) => mapTvDetailResponseToMediaContent(res));

  return fetchRes;
}

export async function getTvCredits(id: number): Promise<MediaContentCredits> {
  const fetchRes = await axios
    .get<TvCreditsResponse>(`${apiURL}/tv/${id}/credits`, { params })
    .then((res) => res.data)
    .then((res) => mapTvCreditsResponseToMediaContentCredits(res));

  return fetchRes;
}

export async function getTvRecommendations(id: number): Promise<MediaContent[]> {
  const fetchRes = await axios
    .get<PaginatedResponse<TvRecommendationResponse>>(`${apiURL}/tv/${id}/recommendations`, { params })
    .then((res) => res.data)
    .then((res) => mapTvRecommendationResponseToMediaContent(res.results));

  return fetchRes;
}
