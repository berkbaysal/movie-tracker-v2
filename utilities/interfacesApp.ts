import { StaticImageData } from 'next/image';
import { MediaType } from './interfacesAPI';

export interface TrendingResult {
  title: string;
  posterPath: string | null;
  mediaType: MediaType;
  id: number;
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
