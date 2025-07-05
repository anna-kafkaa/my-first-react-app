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
  <li>
    <NavLink 
      to="/" 
      className={({ isActive }) => isActive ? styles.linkActive : undefined}
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/favorite" 
      className={({ isActive }) => isActive ? styles.linkActive : undefined}
    >
      Favorite
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/about" 
      className={({ isActive }) => isActive ? styles.linkActive : undefined}
    >
      About
    </NavLink>
  </li>
</ul>



        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
