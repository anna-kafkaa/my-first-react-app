import { useState, useEffect } from 'react';
import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
  const [columns, setColumns] = useState([
    { id: 1, title: 'Books', icon: 'book' },
    { id: 2, title: 'Movies', icon: 'film' },
    { id: 3, title: 'Games', icon: 'gamepad' },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setColumns(prevColumns => [
        ...prevColumns,
        { id: 4, title: 'Test column' }
      ]);
    }, 2000);
  }, []);

  return (
    <section className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do <span>soon!</span></h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out!</p>
      <div className={styles.columns}>
        {columns.map(column => (
          <Column
            key={column.id}
            title={column.title}
            icon={column.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default List;





