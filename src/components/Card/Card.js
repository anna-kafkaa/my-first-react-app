import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const Card = ({ title, id, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(id));
  };

  const handleRemoveCard = () => {
    dispatch(removeCard(id));
  };

  return (
    <li className={clsx(styles.card, { [styles.favorite]: isFavorite })}>
      <span className={styles.title}>{title}</span>
      <div className={styles.buttons}>
        <button
          onClick={handleToggleFavorite}
          className={clsx(styles.starButton, { [styles.active]: isFavorite })}
          aria-label="Toggle favorite"
        >
          <FontAwesomeIcon icon={isFavorite ? solidStar : regularStar} />
        </button>
        <button
          onClick={handleRemoveCard}
          className={styles.removeButton}
          aria-label="Remove card"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default Card;





