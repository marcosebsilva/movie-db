import { NextPage } from "next";
import Image from "next/image";
import { MovieObject } from "types";
import style from './MovieCard.module.scss';

const MovieCard: NextPage<{movie: MovieObject}> = ({ movie }) => {
  const voteRating: Function = (voteCount:number):string => {
    let rating: string = '';
    switch(true) {
    case voteCount > 8:
      rating = 'highRated';
      break;
    case voteCount > 7:
      rating = 'mediumRated';
      break;
    default:
      rating = 'lowRated';
    }
    return rating;
  }
  return(
    <div className={style.wrapper}>
      <h1 className={style.title}>{movie.title}</h1>
      <div className={style.posterWrapper}>
        <Image
          priority
          layout="fill"
          objectFit="cover"
          alt={`${movie.title} high quality poster`}
          src={process.env.BASE_POSTER_URL + movie.poster_path}
        />
      </div>
      <span className={style[voteRating(movie.vote_average)]}>
        <h2>
          {movie.vote_average}
        </h2>
      </span>
    </div>
  );
}

export default MovieCard;