import styles from './ColumnForm.module.scss';
import { useState } from 'react';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title, icon });
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>
        Title: 
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter column title"
        />
      </label>
      <label>
        Icon: 
        <input
          type="text"
          value={icon}
          onChange={e => setIcon(e.target.value)}
          placeholder="Enter icon name"
        />
      </label>
      <button type="submit">Add column</button>
    </form>
  );
};

export default ColumnForm;
