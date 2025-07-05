import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import PageTitle from './../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';

const List = () => {
  const { listId } = useParams();
  const listData = useSelector(state => getListById(state, listId));
  const columns = useSelector(state => getColumnsByList(state, listId));

  if (!listData) return <p className={styles.error}>404 – List not found</p>;

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <PageTitle>{listData.title}</PageTitle>
      </header>
      <p className={styles.description}>{listData.description}</p>
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






