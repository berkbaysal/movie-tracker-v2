export interface MovieListResult extends ContentListResult {
  adult: boolean;
  release_date: string;
  original_title: string;
  video: boolean;
  media_type: 'movie';
  runtime: number | null;
}

export interface TVListResult extends ContentListResult {
  media_type: 'tv';
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
  media_type: 'person';
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
