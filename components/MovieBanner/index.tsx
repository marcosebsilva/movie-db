import type { NextPage } from 'next';
import Image from 'next/image';
import { MovieObject } from 'types';
import style from './MovieBanner.module.scss';


const MovieBanner: NextPage<{movie: MovieObject}> = ({ movie }) => {
  return(
    <article>
      <h1 className={style.title}>{movie.title}</h1>
      <div className={style.bannerContainer}>
        <Image
          priority
          className={style.banner}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={process.env.BASE_BANNER_URL + movie.backdrop_path}
          alt={`${movie.title} high quality poster`}
        />
      </div>
    </article>
  );
}

export default MovieBanner;