import type { NextPage } from 'next';
import Image from 'next/image';
import { MovieObject } from 'types';
import style from './MovieBanner.module.scss';


const MovieBanner: NextPage<{movie: MovieObject}> = ({ movie }) => {
  return(
    <article
      className={style.movieCard}
    >
      <h1>{movie.title}</h1>
      <div className={style.posterContainer}>
        <Image
          priority
          className={style.movieCardImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={process.env.BASE_POSTER_URL + movie.backdrop_path}
          alt={`${movie.title} high quality poster`}
        />
      </div>
    </article>
  );
}

export default MovieBanner;