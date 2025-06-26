import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = props => {
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        {/* ✅ Dodano styles.icon jako klasę CSS do <span>, żeby zadziałał styl */}
        <span className={`fa fa-${props.icon} ${styles.icon}`}></span>
        {props.title}
      </h2>

      <ul className={styles.cards}>
        {props.cards.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>

      {/* 🔹 Formularz dodawania kart */}
      <CardForm columnId={props.id} action={props.action} />
    </article>
  );
};

export default Column;

