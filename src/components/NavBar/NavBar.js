import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.wrapper}>
          <Link to="/" className={styles.logo}>
            <FontAwesomeIcon icon={faTasks} />
          </Link>
          <ul className={styles.menu}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorite">Favorite</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>


        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
