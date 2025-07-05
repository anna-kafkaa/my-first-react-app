import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import { useDispatch } from 'react-redux';

const CardForm = ({ columnId }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch({ type: 'ADD_CARD', payload: { title, columnId } });
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder=""
        className={styles.cardInput} // 👈 KLUCZOWE
      />
      <Button>ADD CARD</Button>
    </form>
  );
};

export default CardForm;


