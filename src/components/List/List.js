import { useState } from 'react';
import shortid from 'shortid';

import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
  const [columns, setColumns] = useState([
    { id: 1, title: 'Books', icon: 'book' },
    { id: 2, title: 'Movies', icon: 'film' },
    { id: 3, title: 'Games', icon: 'gamepad' },
  ]);

  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') return; // zabezpieczenie przed pustym inputem
    setColumns([...columns, { id: shortid(), title: value }]);
    setValue('');
  };

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

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Enter column title"
        />
        <button type="submit">Add column</button>
      </form>
    </section>
  );
};

export default List;






