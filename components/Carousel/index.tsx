import type { NextPage } from 'next';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import style from './Carousel.module.scss';
import Image from 'next/image';
import { MovieObject } from 'types';


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
      {trending.map((movie) => (
        <article
          className={style.movieCard}
          key={movie.id}
        >
          <h1>{movie.title}</h1>
          <div className={style.movieOverview}>
            <p>{movie.overview}</p>
          </div>
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
      ))}
    </Slider>
  );
}

export default Carousel;