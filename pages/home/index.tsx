import type { NextPage } from 'next';
import Image from 'next/image';
import Header from 'components/Header';
import Carousel from 'components/Carousel';
import apiUrl from 'utils/dictionary/api_urls.json';
import { getMoviesByUrl } from 'axios/TMDB/calls';
import { MovieObject } from 'types'
import MovieList from 'components/MovieList';
import { tmdbLogo } from 'assets/images';
import style from './Home.module.scss';

interface Props {
  trending: Array<MovieObject>,
  randomMovies: Array<MovieObject>,
}

const Home: NextPage<Props> = ({trending, randomMovies}) => {
  return (
    <>
      <Header />
      <Carousel trending={ trending }/>
      <MovieList initialMovies={randomMovies}/>
      <section className={style.apiWrapper} id='api'>
        <div className={style.logoWrapper}>
          <Image 
            layout='fill'
            objectFit='contain'
            src={tmdbLogo}
            alt='Big The Movie Database Logo'
          />
        </div>
        <article className={style.textWrapper}>
          <p>
            The Movie DB is an awsome free database created by Travis Bell.
            It has a vast catalog of information about millions of movies and TV Shows.
          </p>
          <p>
            Alongside the inumerous tools that uses it to a variety of purposes, a lot of
            young programming studentslike myself are able to use it’s <a href="https://www.themoviedb.org/documentation/api">rich API</a> to
            build learning projects, just like this one.
          </p>
          <h3>You can learn more about it <a href="https://www.themoviedb.org/?language=pt-BR">here</a>.</h3>
        </article>
      </section>
      <footer className={style.footer}>
        <h3>Desenvolvido por <a href="https://github.com/marcosebsilva" target="_">Marcos Silva.</a></h3>
      </footer>
    </>
  )
}

export async function getStaticProps() {
  const randomMovies: Array<MovieObject> = await getMoviesByUrl(apiUrl.DISCOVER, 10);
  const trending: Array<MovieObject> = await getMoviesByUrl(apiUrl.TRENDING, 5);

  return {
    props: {
      trending,
      randomMovies,
    }
  }
}

export default Home;
