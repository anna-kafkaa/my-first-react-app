import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {
  // 🔹 Pobieramy tylko te karty, które pasują do danej kolumny
  const cards = useSelector(state =>
    state.cards.filter(card => card.columnId === props.id)
  );

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        {/* ✅ Ikona z klasą stylu */}
        <span className={`fa fa-${props.icon} ${styles.icon}`}></span>
        {props.title}
      </h2>

      <ul className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>

      {/* 🔹 Formularz dodawania kart – akcję dodamy później */}
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
