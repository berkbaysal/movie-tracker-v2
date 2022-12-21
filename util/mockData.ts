import imgSlideOne from '../public/img/piano-fingers.jpg';
import imgSlideTwo from '../public/img/movie-camera.jpg';
import imgSlideThree from '../public/img/movie-theater.jpg';
import { TrendingResult, EditorsPick } from './interfacesApp';

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

export const mockTrendingApiData = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
      id: 436270,
      title: 'Black Adam',
      original_language: 'en',
      original_title: 'Black Adam',
      overview:
        'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
      poster_path: '/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
      media_type: 'movie',
      genre_ids: [28, 14, 878],
      popularity: 11801.698,
      release_date: '2022-10-19',
      video: false,
      vote_average: 7.284,
      vote_count: 2209,
    },
    {
      adult: false,
      backdrop_path: '/rfnmMYuZ6EKOBvQLp2wqP21v7sI.jpg',
      id: 774752,
      title: 'The Guardians of the Galaxy Holiday Special',
      original_language: 'en',
      original_title: 'The Guardians of the Galaxy Holiday Special',
      overview:
        'On a mission to make Christmas unforgettable for Quill, the Guardians head to Earth in search of the perfect present.',
      poster_path: '/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg',
      media_type: 'movie',
      genre_ids: [35, 878, 12],
      popularity: 755.423,
      release_date: '2022-11-25',
      video: false,
      vote_average: 7.475,
      vote_count: 417,
    },
    {
      adult: false,
      backdrop_path: '/9DpB6wC1iY5jxLz91RT8tIIsXaf.jpg',
      id: 119051,
      name: 'Wednesday',
      original_language: 'en',
      original_name: 'Wednesday',
      overview:
        'Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.',
      poster_path: '/jeGtaMwGxPmQN5xM4ClnwPQcNQz.jpg',
      media_type: 'tv',
      genre_ids: [10765, 9648, 35],
      popularity: 2738.723,
      first_air_date: '2022-11-23',
      vote_average: 8.784,
      vote_count: 1088,
      origin_country: ['US'],
    },
    {
      adult: false,
      backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
      id: 505642,
      title: 'Black Panther: Wakanda Forever',
      original_language: 'en',
      original_title: 'Black Panther: Wakanda Forever',
      overview:
        'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
      poster_path: '/ps2oKfhY6DL3alynlSqY97gHSsg.jpg',
      media_type: 'movie',
      genre_ids: [28, 12, 878],
      popularity: 1809.575,
      release_date: '2022-11-09',
      video: false,
      vote_average: 7.529,
      vote_count: 1101,
    },
    {
      adult: false,
      backdrop_path: '/s1xnjbOIQtwGObPnydTebp74G2c.jpg',
      id: 90669,
      name: '1899',
      original_language: 'zh',
      original_name: '1899',
      overview:
        'Passengers on an immigrant ship traveling to the new continent get caught in a mysterious riddle when they find a second vessel adrift on the open sea.',
      poster_path: '/8KGvYHQNOamON6ufQGjyhkiVn1V.jpg',
      media_type: 'tv',
      genre_ids: [9648, 18],
      popularity: 1910.521,
      first_air_date: '2022-11-17',
      vote_average: 7.899,
      vote_count: 357,
      origin_country: ['DE'],
    },
    {
      adult: false,
      backdrop_path: '/o3mothJXDR9vLlZHpwyfFCycCNx.jpg',
      id: 668461,
      title: 'Slumberland',
      original_language: 'en',
      original_title: 'Slumberland',
      overview:
        'A young girl discovers a secret map to the dreamworld of Slumberland, and with the help of an eccentric outlaw, she traverses dreams and flees nightmares, with the hope that she will be able to see her late father again.',
      poster_path: '/f18kgonrgr8YvEuvshExS4XBGL8.jpg',
      media_type: 'movie',
      genre_ids: [10751, 14, 12, 18],
      popularity: 1136.271,
      release_date: '2022-11-09',
      video: false,
      vote_average: 7.865,
      vote_count: 292,
    },
    {
      adult: false,
      backdrop_path: '/ajztm40qDPqMONaSJhQ2PaNe2Xd.jpg',
      id: 83867,
      name: 'Star Wars: Andor',
      original_language: 'en',
      original_name: 'Star Wars: Andor',
      overview:
        'The tale of the burgeoning rebellion against the Empire and how people and planets became involved. In an era filled with danger, deception and intrigue, Cassian Andor embarks on the path that is destined to turn him into a rebel hero.',
      poster_path: '/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg',
      media_type: 'tv',
      genre_ids: [10765, 10759, 10768],
      popularity: 588.674,
      first_air_date: '2022-09-21',
      vote_average: 8.155,
      vote_count: 364,
      origin_country: ['US'],
    },
    {
      adult: false,
      backdrop_path: '/fHDvGGPFry65ou79WLi6JsjCZrM.jpg',
      id: 632856,
      title: 'Spirited',
      original_language: 'en',
      original_title: 'Spirited',
      overview:
        'Each Christmas Eve, the Ghost of Christmas Present selects one dark soul to be reformed by a visit from three spirits. But this season, he picked the wrong Scrooge. Clint Briggs turns the tables on his ghostly host until Present finds himself reexamining his own past, present and future.',
      poster_path: '/h3zAzTMs5EP3cKusOxFNGSFE1WI.jpg',
      media_type: 'movie',
      genre_ids: [35],
      popularity: 489.931,
      release_date: '2022-11-10',
      video: false,
      vote_average: 7.307,
      vote_count: 161,
    },
    {
      adult: false,
      backdrop_path: '/c1bz69r0v065TGFA5nqBiKzPDys.jpg',
      id: 830784,
      title: 'Lyle, Lyle, Crocodile',
      original_language: 'en',
      original_title: 'Lyle, Lyle, Crocodile',
      overview:
        'When the Primm family moves to New York City, their young son Josh struggles to adapt to his new school and new friends. All of that changes when he discovers Lyle — a singing crocodile who loves baths, caviar and great music — living in the attic of his new home. But when Lyle’s existence is threatened by evil neighbor Mr. Grumps, the Primms must band together to show the world that family can come from the most unexpected places.',
      poster_path: '/irIS5Tn3TXjNi1R9BpWvGAN4CZ1.jpg',
      media_type: 'movie',
      genre_ids: [35, 10751, 10402],
      popularity: 1936.367,
      release_date: '2022-10-07',
      video: false,
      vote_average: 7.661,
      vote_count: 93,
    },
    {
      adult: false,
      backdrop_path: '/kpUre8wWSXn3D5RhrMttBZa6w1v.jpg',
      id: 338958,
      title: 'Disenchanted',
      original_language: 'en',
      original_title: 'Disenchanted',
      overview:
        'Disillusioned with life in the city, feeling out of place in suburbia, and frustrated that her happily ever after hasn’t been so easy to find, Giselle turns to the magic of Andalasia for help. Accidentally transforming the entire town into a real-life fairy tale and placing her family’s future happiness in jeopardy, she must race against time to reverse the spell and determine what happily ever after truly means to her and her family.',
      poster_path: '/4x3pt6hoLblBeHebUa4OyiVXFiM.jpg',
      media_type: 'movie',
      genre_ids: [35, 10751, 14],
      popularity: 1969.641,
      release_date: '2022-11-16',
      video: false,
      vote_average: 7.326,
      vote_count: 429,
    },
    {
      adult: false,
      backdrop_path: '/olPXihyFeeNvnaD6IOBltgIV1FU.jpg',
      id: 882598,
      title: 'Smile',
      original_language: 'en',
      original_title: 'Smile',
      overview:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      poster_path: '/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg',
      media_type: 'movie',
      genre_ids: [27, 9648, 53],
      popularity: 1479.33,
      release_date: '2022-09-23',
      video: false,
      vote_average: 6.804,
      vote_count: 975,
    },
    {
      adult: false,
      backdrop_path: '/7zQJYV02yehWrQN6NjKsBorqUUS.jpg',
      id: 724495,
      title: 'The Woman King',
      original_language: 'en',
      original_title: 'The Woman King',
      overview:
        'The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.',
      poster_path: '/438QXt1E3WJWb3PqNniK0tAE5c1.jpg',
      media_type: 'movie',
      genre_ids: [28, 18, 36],
      popularity: 4376.054,
      release_date: '2022-09-15',
      video: false,
      vote_average: 7.889,
      vote_count: 534,
    },
    {
      adult: false,
      backdrop_path: '/93SxdkiR3gBcbG5FxIt0DCBttul.jpg',
      id: 111837,
      name: 'Willow',
      original_language: 'en',
      original_name: 'Willow',
      overview:
        'Many years after the events of the original film, legendary sorcerer Willow leads a group of misfit heroes on a dangerous rescue mission through a world beyond their wildest imaginations.',
      poster_path: '/jhdSPDlhswjN1r6O0pGP3ZvQgU8.jpg',
      media_type: 'tv',
      genre_ids: [10765, 10759, 18],
      popularity: 101.781,
      first_air_date: '2022-11-30',
      vote_average: 6.714,
      vote_count: 15,
      origin_country: ['US'],
    },
    {
      adult: false,
      backdrop_path: '/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg',
      id: 76600,
      title: 'Avatar: The Way of Water',
      original_language: 'en',
      original_title: 'Avatar: The Way of Water',
      overview:
        'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
      poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
      media_type: 'movie',
      genre_ids: [878, 28, 12],
      popularity: 624.738,
      release_date: '2022-12-14',
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg',
      id: 361743,
      title: 'Top Gun: Maverick',
      original_language: 'en',
      original_title: 'Top Gun: Maverick',
      overview:
        'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.',
      poster_path: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
      media_type: 'movie',
      genre_ids: [28, 18],
      popularity: 466.17,
      release_date: '2022-05-24',
      video: false,
      vote_average: 8.346,
      vote_count: 4873,
    },
    {
      adult: false,
      backdrop_path: '/zaulpwl355dlKkvtAiSBE5LaoWA.jpg',
      id: 1402,
      name: 'The Walking Dead',
      original_language: 'en',
      original_name: 'The Walking Dead',
      overview:
        "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
      poster_path: '/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg',
      media_type: 'tv',
      genre_ids: [10759, 18, 10765],
      popularity: 859.331,
      first_air_date: '2010-10-31',
      vote_average: 8.111,
      vote_count: 14135,
      origin_country: ['US'],
    },
    {
      adult: false,
      backdrop_path: '/79PcXPpbDWql74h8Y00mNwbYMbS.jpg',
      id: 664469,
      title: 'Amsterdam',
      original_language: 'en',
      original_title: 'Amsterdam',
      overview:
        'In the 1930s, three friends—a doctor, a nurse, and an attorney—witness a murder, become suspects themselves and uncover one of the most outrageous plots in North American history.',
      poster_path: '/6sJcVzGCwrDCBMV0DU6eRzA2UxM.jpg',
      media_type: 'movie',
      genre_ids: [80, 35, 36, 9648, 53],
      popularity: 182.222,
      release_date: '2022-09-27',
      video: false,
      vote_average: 6.136,
      vote_count: 389,
    },
    {
      adult: false,
      backdrop_path: '/tP5PwKwDxnFu6FpM2hOWyqjf6Qy.jpg',
      id: 823766,
      title: 'The Wonder',
      original_language: 'en',
      original_title: 'The Wonder',
      overview:
        "Haunted by her past, a nurse travels from England to a remote Irish village in 1862 to investigate a young girl's supposedly miraculous fast.",
      poster_path: '/7IBBCGAyvakb36B3Rz8Fyk1V1Wg.jpg',
      media_type: 'movie',
      genre_ids: [9648, 53, 18],
      popularity: 151.383,
      release_date: '2022-11-02',
      video: false,
      vote_average: 6.755,
      vote_count: 247,
    },
    {
      adult: false,
      backdrop_path: '/hIZFG7MK4leU4axRFKJWqrjhmxZ.jpg',
      id: 95403,
      name: 'The Peripheral',
      original_language: 'en',
      original_name: 'The Peripheral',
      overview:
        'Stuck in a small Appalachian town, a young woman’s only escape from the daily grind is playing advanced video games. She is such a good player that a company sends her a new video game system to test…but it has a surprise in store. It unlocks all of her dreams of finding a purpose, romance, and glamour in what seems like a game…but it also puts her and her family in real danger.',
      poster_path: '/ccBe5BVeibdBEQU7l6P6BubajWV.jpg',
      media_type: 'tv',
      genre_ids: [10765, 18],
      popularity: 1756.917,
      first_air_date: '2022-10-20',
      vote_average: 8.207,
      vote_count: 309,
      origin_country: ['US'],
    },
    {
      adult: false,
      backdrop_path: '/rjlG7C5GZfXutoVoE3BJaYGUhk4.jpg',
      id: 829280,
      title: 'Enola Holmes 2',
      original_language: 'en',
      original_title: 'Enola Holmes 2',
      overview:
        'Now a detective-for-hire like her infamous brother, Enola Holmes takes on her first official case to find a missing girl, as the sparks of a dangerous conspiracy ignite a mystery that requires the help of friends — and Sherlock himself — to unravel.',
      poster_path: '/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg',
      media_type: 'movie',
      genre_ids: [9648, 12, 35, 80],
      popularity: 1017.379,
      release_date: '2022-11-04',
      video: false,
      vote_average: 7.739,
      vote_count: 1189,
    },
  ],
  total_pages: 1000,
  total_results: 20000,
};

export const mockEditorsPicks: EditorsPick[] = [
  {
    title: 'Good Bye Lenin!',
    posterPath: '/2xv7MuQFxJMK1ZV0r5fFI0FzdG0.jpg',
    year: '2003',
    id: 338,
  },
  {
    title: 'La La Land',
    posterPath: '/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
    year: '2016',
    id: 313369,
  },
  {
    title: 'Rush',
    posterPath: '/5akKFgS7eeXUw9rKTEujryKrH17.jpg',
    year: '2013',
    id: 96721,
  },
  {
    title: '2001: A Space Odyssey',
    posterPath: '/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg',
    year: '1973',
    id: 62,
  },
];
