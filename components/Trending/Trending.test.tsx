import React from 'react';
import { render, screen } from '@testing-library/react';
import Trending from './Trending';
import '@testing-library/jest-dom';

const testProps = {
  trending: [
    {
      title: 'Black Adam',
      posterPath: '/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
    },
    {
      title: 'Black Panther: Wakanda Forever',
      posterPath: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    },
    {
      title: 'Wednesday',
      posterPath: '/jeGtaMwGxPmQN5xM4ClnwPQcNQz.jpg',
    },
    {
      title: '1899',
      posterPath: '/8KGvYHQNOamON6ufQGjyhkiVn1V.jpg',
    },
    {
      title: 'The Guardians of the Galaxy Holiday Special',
      posterPath: '/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg',
    },
    {
      title: 'Slumberland',
      posterPath: '/f18kgonrgr8YvEuvshExS4XBGL8.jpg',
    },
    {
      title: 'Spirited',
      posterPath: '/h3zAzTMs5EP3cKusOxFNGSFE1WI.jpg',
    },
    {
      title: 'Disenchanted',
      posterPath: '/4x3pt6hoLblBeHebUa4OyiVXFiM.jpg',
    },
    {
      title: 'Star Wars: Andor',
      posterPath: '/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg',
    },
  ],
};

describe('Trending Section Functionality', () => {
  test('Trending section renders', () => {
    render(<Trending {...testProps} />);
    expect(screen.getByLabelText('Trending films')).toBeInTheDocument();
  });
});
