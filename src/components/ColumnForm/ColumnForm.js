import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux'; // ✅ import
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ColumnForm = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch(); // ✅ użycie dispatch

  const handleSubmit = e => {
  e.preventDefault();
  if ( !title.trim() || !icon.trim()) return; // 🔥 nie wysyłaj jeśli puste
  dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
  setTitle('');
  setIcon('');
};


  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>
        Title:
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Icon:
        <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      </label>
      <Button>ADD COLUMN</Button>
    </form>
  );
};

export default ColumnForm;


