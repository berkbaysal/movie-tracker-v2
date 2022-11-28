import imgSlideOne from '../public/img/piano-fingers.jpg';
import imgSlideTwo from '../public/img/movie-camera.jpg';
import imgSlideThree from '../public/img/movie-theater.jpg';
import { TrendingResult } from './interfacesApp';

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

export const mockTrendingResults: TrendingResult[] = [
  {
    title: 'Black Panther: Wakanda Forever',
    posterPath: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
  },
  {
    title: 'Black Adam',
    posterPath: '/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg',
  },
  {
    title: 'Smile',
    posterPath: '/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg',
  },
  {
    title: 'Enola Holmes 2',
    posterPath: '/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg',
  },
  {
    title: 'Amsterdam',
    posterPath: '/6sJcVzGCwrDCBMV0DU6eRzA2UxM.jpg',
  },
  {
    title: 'All Quiet on the Western Front',
    posterPath: '/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg',
  },
  {
    title: 'Top Gun: Maverick',
    posterPath: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
  },
  {
    title: 'Star Wars: Andor',
    posterPath: '/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg',
  },
  {
    title: 'Zootopia+',
    posterPath: '/inzPPPr2BsE92m4rHhQn3sf2yPk.jpg',
  },
];
