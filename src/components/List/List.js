import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store'; // import selektora

const List = () => {
  const columns = useSelector(getAllColumns); // użycie selektora

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span>soon!</span>
        </h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>

      <section className={styles.columns}>
        {columns.map(column => (
          <Column
            key={column.id}
            {...column} // przekazanie id, title, icon
          />
        ))}
      </section>

      <ColumnForm />
    </div>
  );
};

export default List;











