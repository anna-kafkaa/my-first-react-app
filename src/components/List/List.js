import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import PageTitle from './../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom'; // <== dodano Navigate
import { getListById, getColumnsByList } from '../../redux/store';
import SearchForm from '../SearchForm/SearchForm'; // <== dodano import

const List = () => {
  const { listId } = useParams();
  const listData = useSelector(state => getListById(state, listId));
  const columns = useSelector(state => getColumnsByList(state, listId));

  // jeśli nie znaleziono listy => przekieruj na stronę główną
  if (!listData) return <Navigate to="/" />;

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <PageTitle>{listData.title}</PageTitle>
      </header>
      <p className={styles.description}>{listData.description}</p>

      {/* Dodany komponent wyszukiwarki */}
      <SearchForm />

      <section className={styles.columns}>
        {columns.map(column => (
          <Column key={column.id} {...column} />
        ))}
      </section>

      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
