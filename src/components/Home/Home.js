import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/store';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm'; // ✅ dodany import

const Home = () => {
  const lists = useSelector(getAllLists);

  return (
    <div className={styles.hero}>
      <h1 className={styles.heading}>MY FIRST REACT APP</h1>
      <p className={styles.subtitle}>
        A simple to-do app, with lists, columns and card
      </p>

      <SearchForm /> {/* ✅ użycie komponentu z reduxem i odstępem */}

      <h2 className={styles.title}>Browse lists</h2>

      {lists.map((list) => (
        <Link key={list.id} to={`/list/${list.id}`} className={styles.link}>
          <div className={styles.card}>
            <h3>{list.title}</h3>
            <p>{list.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;




