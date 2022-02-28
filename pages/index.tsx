import type { NextPage } from 'next';
import Header from 'components/Header';
import Carousel from 'components/Carousel';
import { TRENDING, RANDOM_MOVIES } from 'utils/dictionary/api_urls.json';
import { getShows } from 'axios/TMDB/calls';
import { MovieObject } from 'types'

interface Props {
  trending: Array<MovieObject>,
  allMovies: Array<MovieObject>,
}

const Home: NextPage<Props> = ({trending}) => {
  return (
    <>
      <Header />
      <Carousel trending={ trending }/>
    </>
  )
}

export async function getStaticProps() {
  const randomShows = await getShows(RANDOM_MOVIES, 10);
  const trending = await getShows(TRENDING, 5);

  return {
    props: {
      trending,
      randomShows,
    }
  }
}

export default Home;
