import dotenv from 'dotenv';
import { apiURL } from '@utilities/resources';
import { MovieCredits, MovieListResult, TrendingResponse } from '@utilities/interfacesAPI';
import { TrendingResult } from '@utilities/interfacesApp';
import axios from 'axios';

dotenv.config();

interface GetTrendingListParameters {
  limit?: number;
  period?: 'week' | 'day';
}

export function filterTrendingResults(fetchRes: TrendingResponse, maxResults: number): TrendingResult[] {
  const formattedResults: TrendingResult[] = [];
  for (const result of fetchRes.results) {
    // Filter
    if (result.media_type === 'movie') {
      formattedResults.push({
        title: result.title,
        posterPath: result.poster_path,
        mediaType: 'movie',
        id: result.id,
      });
    } else if (result.media_type === 'tv') {
      formattedResults.push({
        title: result.original_name,
        posterPath: result.poster_path,
        mediaType: 'tv',
        id: result.id,
      });
    }
    // Stop if maxResults is reached
    if (formattedResults.length === maxResults) break;
  }
  return formattedResults;
}

export async function getTrendingList({ limit = 20, period = 'week' }: GetTrendingListParameters = {}): Promise<
  TrendingResult[]
> {
  // Overwrite result limit to 20 if its bigger than 20.
  const maxResults = limit <= 20 ? limit : 20;

  // Define fetch parameters
  const params = {
    api_key: process.env.MOVIE_DB_API_KEY,
    language: 'en-US',
  };

  const fetchRes = await axios
    .get<TrendingResponse>(`${apiURL}/trending/all/${period}`, { params })
    .then((res) => res.data);
  // Filter results to only include TV Shows and Films, format and trim to fit custom interface
  return filterTrendingResults(fetchRes, maxResults);
}

export async function getMovieInfo(id: number): Promise<MovieListResult> {
  const params = {
    api_key: process.env.MOVIE_DB_API_KEY,
    language: 'en-US',
  };
  const fetchRes = await axios.get<MovieListResult>(`${apiURL}/movie/${id}`, { params }).then((res) => res.data);

  return fetchRes;
}

export async function getMovieCredits(id: number): Promise<MovieCredits> {
  const params = {
    api_key: process.env.MOVIE_DB_API_KEY,
    language: 'en-US',
  };
  const fetchRes = await axios.get(`${apiURL}/movie/${id}/credits`, { params }).then((res) => res.data);

  return fetchRes;
}
