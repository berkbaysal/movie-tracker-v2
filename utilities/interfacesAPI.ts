export type MediaType = 'movie' | 'tv' | 'person';

export interface MovieListResult extends ContentListResult {
  adult: boolean;
  release_date: string;
  original_title: string;
  video: boolean;
  runtime: number | null;
}

export interface TVListResult extends ContentListResult {
  first_air_date: string;
  origin_country: string[];
  original_name: string;
}

interface ContentListResult {
  poster_path: string | null;
  overview: string;
  genres: IGenres[];
  id: number;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  vote_average: number;
  tagline: string | null;
}

interface IGenres {
  id: number;
  name: string;
}

export interface PersonListResult {
  profile_path: string | null;
  adult: boolean;
  id: number;
  known_for: Array<MovieListResult | TVListResult>;
  name: string;
  popularity: number;
}

interface MovieCredit {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
}

export interface MovieCastCredit extends MovieCredit {
  cast_id: number;
  character: string;
  order: number;
}

export interface MovieCrewCredit extends MovieCredit {
  department: string;
  job: string;
}

export interface MovieCredits {
  id: number;
  cast: MovieCastCredit[];
  crew: MovieCrewCredit[];
}

interface TrendingBaseResponse {
  adult: boolean;
  id: number;
  popularity: number;
  media_type: MediaType;
}

interface TrendingMovieResponse extends TrendingBaseResponse {
  backdrop_path: string | null;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type: 'movie';
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_count: number;
  vote_average: number;
}

interface TrendingTVResponse extends TrendingBaseResponse {
  backdrop_path: string | null;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
  media_type: 'tv';
  genre_ids: number[];
  first_air_date: string;
  vote_count: number;
  vote_average: number;
  origin_country: string[];
}

interface TrendingPersonResponse extends TrendingBaseResponse {
  media_type: 'person';
  name: string;
  original_name: string;
  gender: number | null;
  known_for: Array<MovieListResult | TVListResult>;
  profile_path: string | null;
  known_for_department: string[];
}

type TrendingResponseResults = TrendingMovieResponse | TrendingPersonResponse | TrendingTVResponse;

export interface TrendingResponse {
  page: number;
  results: TrendingResponseResults[];
  total_pages: number;
  total_results: number;
}

export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
