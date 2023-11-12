import imgSlideOne from '@public/img/piano-fingers.jpg';
import imgSlideTwo from '@public/img/movie-camera.jpg';
import imgSlideThree from '@public/img/movie-theater.jpg';
import { EditorsPick } from './interfacesApp';

export const mockPostsData = [
  {
    postTitle: 'Shaping film through music',
    backgroundImage: imgSlideOne,
    id: 1,
  },
  {
    postTitle: 'Filmmaking equipment for aspiring directors',
    backgroundImage: imgSlideTwo,
    id: 2,
  },
  {
    postTitle: 'How COVID changed movie theater business',
    backgroundImage: imgSlideThree,
    id: 3,
  },
];

export const mockEditorsPicks: EditorsPick[] = [
  {
    title: 'Good Bye Lenin!',
    posterPath: '/2xv7MuQFxJMK1ZV0r5fFI0FzdG0.jpg',
    year: '2003',
    id: 338,
    mediaType: 'movie',
  },
  {
    title: 'La La Land',
    posterPath: '/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
    year: '2016',
    id: 313369,
    mediaType: 'movie',
  },
  {
    title: 'Rush',
    posterPath: '/5akKFgS7eeXUw9rKTEujryKrH17.jpg',
    year: '2013',
    id: 96721,
    mediaType: 'movie',
  },
  {
    title: '2001: A Space Odyssey',
    posterPath: '/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg',
    year: '1973',
    id: 62,
    mediaType: 'movie',
  },
];
