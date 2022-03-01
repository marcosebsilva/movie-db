import type { NextPage } from 'next';
import Header from 'components/Header';
import Carousel from 'components/Carousel';
import { TRENDING, DISCOVER } from 'utils/dictionary/api_urls.json';
import { getMoviesByUrl } from 'axios/TMDB/calls';
import { MovieObject } from 'types'
import MovieList from 'components/MovieList';

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
    </>
  )
}

export async function getStaticProps() {
  const randomMovies: Array<MovieObject> = await getMoviesByUrl(DISCOVER, 10);
  const trending: Array<MovieObject> = await getMoviesByUrl(TRENDING, 5);

  return {
    props: {
      trending,
      randomMovies,
    }
  }
}

export default Home;
