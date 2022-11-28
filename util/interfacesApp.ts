import { StaticImageData } from 'next/image';

export interface TrendingResult {
  title: string;
  posterPath: string | null;
}

export interface Post {
  postTitle: string;
  backgroundImage: string | StaticImageData;
  id: number;
}
