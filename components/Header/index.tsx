import type { NextPage } from 'next';
import Image from 'next/image';
import { headerLogo } from 'assets/images';
import useLocalStorage from 'hooks/useLocalStorage';
import defaultUser from 'utils/defaultUser';
import style from './Header.module.scss';


const Header: NextPage = () => {
  const [user] = useLocalStorage('movie-db_user', defaultUser);
  return(
    <header className={style.wrapper}>
      <a href='#'>
        <Image
          layout='responsive'
          src={ headerLogo }
          alt="The Movie DataBase logo"
        />
      </a>
      <nav className={style.navbar}>
        <a>Home</a>
        <a href='#movies'>Movies</a>
        <a href='#api'>API</a>
      </nav>
      <section className={style.profileSection}>
        <div className={style.picture}>
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={ user.picture }
            alt="Your profile picture"
          />
        </div>
      </section>
    </header>
  );
}

export default Header;