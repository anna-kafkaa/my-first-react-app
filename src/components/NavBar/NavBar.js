import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.wrapper}>
          <NavLink to="/" className={styles.logo}>
            <FontAwesomeIcon icon={faTasks} />
          </NavLink>
          <ul className={styles.menu}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/favorite">Favorite</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
