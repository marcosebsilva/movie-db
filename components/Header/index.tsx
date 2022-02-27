import type { NextPage } from 'next';
import Image from 'next/image';
import { headerLogo } from 'assets/images';
import useLocalStorage from 'hooks/useLocalStorage';
import defaultUser from 'utils/defaultUser';


const Header: NextPage = () => {
  const [user] = useLocalStorage('movie-db_user', defaultUser);
  return(
    <header>
      <Image 
        src={ headerLogo }
        alt="The Movie DataBase logo"
      />
      <nav>
        <a>Home</a>
        <a href='#movies'>Movies</a>
        <a href='#api'>API</a>
      </nav>
      <button>
        <Image
          width={100}
          height={100}
          src={ user.picture }
          alt="Your profile picture"
        />
      </button>
    </header>
  );
}

export default Header;