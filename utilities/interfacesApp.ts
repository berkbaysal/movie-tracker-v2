import { StaticImageData } from 'next/image';

export type MediaType = 'movie' | 'tv' | 'person';

export interface MediaContentGenre {
  id: number;
  name: string;
}

export interface Post {
  postTitle: string;
  backgroundImage: string | StaticImageData;
  id: number;
}

export interface EditorsPick {
  mediaType: MediaType;
  title: string;
  posterPath: string | null;
  year: string;
  id: number;
}

export interface MediaContent {
  mediaType: MediaType;
  id: number;
  title: string;
  year: string;
  runtime?: number;
  posterPath?: string;
}

export interface MediaContentDetails extends MediaContent {
  overview: string;
  tagline?: string;
  genres: MediaContentGenre[];
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  picturePath?: string;
}

export interface Crew {
  id: number;
  name: string;
  job: string;
  picturePath?: string;
}

export interface MediaContentCredits {
  cast: Cast[];
  crew: Crew[];
}
