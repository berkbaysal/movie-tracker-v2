import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import { apiURL } from '../../static/resources';
import {
  MovieListResult,
  PersonListResult,
  TVListResult,
} from '../../static/interfaces';

dotenv.config();

interface TrendingResponse {
  page: number;
  results: (MovieListResult | TVListResult | PersonListResult)[];
}

interface TrendingRequest extends NextApiRequest {
  query: { maxResults?: string };
}

export default async function getMovie(
  req: TrendingRequest,
  res: NextApiResponse
) {
  const maxResults = parseInt(
    req.query.maxResults ? req.query.maxResults : '20',
    10
  );
  const params = {
    api_key: process.env.MOVIE_DB_API_KEY,
    language: 'en-US',
  };
  const fetchRes = await fetch(
    `${apiURL}/trending/all/week?api_key=${params.api_key}`
  );
  const json: TrendingResponse = await fetchRes.json();
  const filteredResponse = json.results.filter(
    (result: MovieListResult | TVListResult | PersonListResult) =>
      result.media_type !== 'person'
  );

  res.status(200).json(filteredResponse.slice(0, maxResults));
}
