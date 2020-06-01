//Video Url's from https://coverr.co/

import Video from '../models/Video';

const RANDOM_POSTER_URL = 'https://picsum.photos/200/300?random=';

const VIDEOS = [
  new Video(
    1,
    'Some Title 1',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    '1h20min',
    '2018',
    '4',
    'https://storage.coverr.co/videos/HRyumyL93xxwbWZPS3Y73TYYwco6GcBP?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTkwODQxMjM3fQ.fbizZWYq57a97nx-Ik6mYXl6z1EsEqPIlencBBTxSH4',
    RANDOM_POSTER_URL + '1'
  ),
  new Video(
    2,
    'Some Title 2',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    '1h40min',
    '2018',
    '3.5',
    'https://storage.coverr.co/videos/slksQfq6th47M4cA02OsxRE00cWFPs5otT?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTkwODQxMjM3fQ.fbizZWYq57a97nx-Ik6mYXl6z1EsEqPIlencBBTxSH4',
    RANDOM_POSTER_URL + '2'
  ),
  new Video(
    3,
    'Some Title 3',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    '1h07min',
    '1990',
    '4.5',
    'https://storage.coverr.co/videos/YJ1uAH7Gndu41YdJoy6G02xzcZEsgzpK1?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTkwODQxMjM3fQ.fbizZWYq57a97nx-Ik6mYXl6z1EsEqPIlencBBTxSH4',
    RANDOM_POSTER_URL + '3'
  ),
  new Video(
    4,
    'Some Title 4',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    '1h59min',
    '2007',
    '3',
    'https://storage.coverr.co/videos/WgLqKDq01tONsoFZDYYMdzyQ9OVXg8011p?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTkwODQxMjM3fQ.fbizZWYq57a97nx-Ik6mYXl6z1EsEqPIlencBBTxSH4',
    RANDOM_POSTER_URL + '4'
  ),
  new Video(
    5,
    'Some Title 5',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    '1h20min',
    '2003',
    '2.5',
    'https://storage.coverr.co/videos/5i00X3mrp3hCNWvT006akAqy4y9F2z2zWx?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTkwODQxMjM3fQ.fbizZWYq57a97nx-Ik6mYXl6z1EsEqPIlencBBTxSH4',
    RANDOM_POSTER_URL + '5'
  ),
  new Video(
    6,
    'Some Title 6',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    '1h26min',
    '2009',
    '5',
    'https://storage.coverr.co/videos/2g3MODAKCVrSUfI6b9E7hgdKFdkxIxmK?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTkwODQxMjM3fQ.fbizZWYq57a97nx-Ik6mYXl6z1EsEqPIlencBBTxSH4',
    RANDOM_POSTER_URL + '6'
  ),
  new Video(
    7,
    'Some Title 7',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    '1h15min',
    '2011',
    '4',
    'https://storage.coverr.co/videos/Ff58aRFWIBvNuWhW43Jv7202wh00ZxYEkK?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTkwODQxMjM3fQ.fbizZWYq57a97nx-Ik6mYXl6z1EsEqPIlencBBTxSH4',
    RANDOM_POSTER_URL + '7'
  ),
  new Video(
    8,
    'Some Title 8',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    '1h44min',
    '2013',
    '4.5',
    'https://storage.coverr.co/videos/ctxp53A5PgiKvFCl00mxNocwzhbQzLz3M?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTkwODQxMjM3fQ.fbizZWYq57a97nx-Ik6mYXl6z1EsEqPIlencBBTxSH4',
    RANDOM_POSTER_URL + '8'
  ),
  new Video(
    9,
    'Some Title 9',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    '1h42min',
    '2015',
    '3.5',
    'https://storage.coverr.co/videos/ogOnKnaZDEpbhqItjRGYW6jZB6gFWyCt?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTkwODQ0MjU0fQ.qZ1pGNMjCKxKOOV2Q0dqoCxHBFoadcpu0C4ftrYVsSY',
    RANDOM_POSTER_URL + '9'
  ),
  new Video(
    10,
    'Some Title 10',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    '1h33min',
    '1987',
    '4.3',
    'https://storage.coverr.co/videos/7OSSvgSzoAeA8brTNuTnbq02mqVwX5gO8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTkwODQxNDIzfQ.us-WUKy6Lf6AvM6EmTUYFV_NHb_t8cqK2phh7j4G-bs',
    RANDOM_POSTER_URL + '10'
  ),
];

const getRandomVideoList = () => {
  return shuffle([...VIDEOS]);
};

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export { getRandomVideoList, VIDEOS };
