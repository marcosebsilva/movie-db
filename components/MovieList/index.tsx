import type { NextPage } from 'next';
import React from 'react';
import { MovieObject } from 'types';
import MovieCard from 'components/MovieCard';
import style from './MovieList.module.scss';

const MovieList: NextPage<{initialMovies: Array<MovieObject>}> = ({ initialMovies }) => {
  return(
    <section className={style.wrapper} id='movies'>
      {initialMovies.map((movie => <MovieCard key={`card-${movie.id}`} movie={movie} />))}
    </section>
  );
};

export default MovieList;