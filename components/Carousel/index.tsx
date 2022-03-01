import type { NextPage } from 'next';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import style from './Carousel.module.scss';
import { MovieObject } from 'types';
import MovieBanner from 'components/MovieBanner';


const Carousel: NextPage<{trending: Array<MovieObject>}> = ({trending}) => {
  const settings = {
    autoplay: true,
    accessibility: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    dots: true,
    arrows: false,
    centerMode: true,
    infinite: true,
    centerPadding: "400px",
    slidesToShow: 1,
    speed: 800,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "100px"
        }
      },
    ]
  }
  return(
    <Slider {...settings} className={style.carousel}>
      {trending.map((movie) => <MovieBanner key={movie.id} movie={movie}/>)}
    </Slider>
  );
}

export default Carousel;