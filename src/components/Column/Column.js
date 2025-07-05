import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = props => {
  const cards = useSelector(state => getFilteredCards(state, props.id));

  console.log('Column render'); // do debugowania - można usunąć później

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`fa fa-${props.icon} ${styles.icon}`}></span>
        {props.title}
      </h2>

      <ul className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>

      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column; 

