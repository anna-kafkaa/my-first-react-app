import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ColumnForm.module.scss';

const ColumnForm = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', newColumn: { title, icon } });
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
        />
      </label>
      <label>
        Icon:
        <input
          type="text"
          value={icon}
          onChange={e => setIcon(e.target.value)}
        />
      </label>
      <button type="submit">Add column</button>
    </form>
  );
};

export default ColumnForm;


