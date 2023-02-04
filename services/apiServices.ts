import dotenv from 'dotenv';
import { apiURL } from '../util/resources';
import {
  MovieListResult,
  PersonListResult,
  TVListResult,
} from '../util/interfacesAPI';
import { TrendingResult } from '../util/interfacesApp';

dotenv.config();

interface TrendingResponse {
  page: number;
  results: MovieListResult[] | TVListResult[] | PersonListResult[];
}

interface GetTrendingListParameters {
  limit?: number;
  period?: 'week' | 'day';
}

export async function getTrendingList({
  limit = 20,
  period = 'week',
}: GetTrendingListParameters = {}) {
  // Overwrite result limit to 20 if its bigger than 20.
  const maxResults = limit <= 20 ? limit : 20;

  // Define fetch parameters
  const params = {
    api_key: process.env.MOVIE_DB_API_KEY,
    language: 'en-US',
    period,
  };

  // Fetch results from Movie DB API
  const fetchRes = await fetch(
    `${apiURL}/trending/all/${params.period}?api_key=${params.api_key}`
  );
  const json: TrendingResponse = await fetchRes.json();
  // Filter results to only include TV Shows and Films, format and trim to fit custom interface
  const formattedResults: TrendingResult[] = [];

  for (const result of json.results) {
    // Filter
    if (result.media_type === 'movie') {
      formattedResults.push({
        title: result.title,
        posterPath: result.poster_path,
      });
    } else if (result.media_type === 'tv') {
      formattedResults.push({
        title: result.original_name,
        posterPath: result.poster_path,
      });
    }
    // Stop if maxResults is reached
    if (formattedResults.length === maxResults) break;
  }

  return formattedResults;
}

export async function getMovieInfo(id: number) {
  return id;
}
