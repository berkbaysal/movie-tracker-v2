export const siteURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.URL;

export const apiURL = 'https://api.themoviedb.org/3';

export const imgURL = 'https://image.tmdb.org/t/p';

export const posterSize: {
  [key: string]: { url: string; width: number; height: number };
} = {
  thumbnail: { url: 'w92', width: 92, height: 138 },
  xsmall: { url: 'w154', width: 154, height: 231 },
  small: { url: 'w185', width: 185, height: 277 },
  medium: { url: 'w342', width: 342, height: 513 },
  large: { url: 'w500', width: 500, height: 750 },
  xlarge: { url: 'w780', width: 780, height: 1169 },
};

export const backdropSize: {
  [key: string]: { url: string; width: number; height: number };
} = {
  thumbnail: { url: 'w300', width: 300, height: 169 },
  small: { url: 'w780', width: 780, height: 439 },
  medium: { url: 'w1280', width: 1280, height: 720 },
  large: { url: 'original', width: 1920, height: 1080 },
};
