import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import { apiURL } from '../../util/resources';
import {
  MovieListResult,
  PersonListResult,
  TVListResult,
} from '../../util/interfacesAPI';
import { TrendingResult } from '../../util/interfacesApp';

dotenv.config();

interface TrendingResponse {
  page: number;
  results: MovieListResult[] | TVListResult[] | PersonListResult[];
}

// Optional query to limit result count
interface TrendingRequest extends NextApiRequest {
  query: { maxResults?: string };
}

export default async function getMovie(
  req: TrendingRequest,
  res: NextApiResponse
) {
  // Check if a result limit is passed, default to 20 if not.
  let maxResults = parseInt(
    req.query.maxResults ? req.query.maxResults : '20',
    10
  );
  // Overwrite result limit to 50 if its bigger than 50.
  if (maxResults > 50) maxResults = 50;
  const params = {
    api_key: process.env.MOVIE_DB_API_KEY,
    language: 'en-US',
  };
  // Fetch results from Movie DB API
  const fetchRes = await fetch(
    `${apiURL}/trending/all/week?api_key=${params.api_key}`
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

  res.status(200).json(formattedResults);
}
