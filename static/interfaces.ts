export interface MovieListResult {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<number>;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  media_type: 'movie';
}

export interface TVListResult {
  poster_path: string | null;
  media_type: 'tv';
  overview: string;
  first_air_date: string;
  genre_ids: Array<number>;
  id: number;
  origin_country: string[];
  original_name: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  vote_average: number;
}

export interface PersonListResult {
  profile_path: string | null;
  adult: boolean;
  id: number;
  media_type: 'person';
  known_for: Array<MovieListResult | TVListResult>;
  name: string;
  popularity: number;
}
