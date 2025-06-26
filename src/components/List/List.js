import React, { useState } from 'react';
import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
  const [columns, setColumns] = useState([
    { id: 1, title: 'Books', icon: 'book' },
    { id: 2, title: 'Movies', icon: 'film' },
    { id: 3, title: 'Games', icon: 'gamepad' },
  ]);

  setTimeout(() => {
    setColumns(prevColumns => [
      ...prevColumns,
      { id: 4, title: 'Test column' }
    ]);
  }, 2000);

  return (
    <section className={styles.columns}>
      {columns.map(column => (
        <Column key={column.id} title={column.title} icon={column.icon} />
      ))}
    </section>
  );
};

export default List;




