import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';



const Card = ({ title, id, isFavorite }) => {
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(toggleCardFavorite(id));
  };

  return (
    <li className={clsx(styles.card, { [styles.favorite]: isFavorite })}>
      <span className={styles.title}>{title}</span>
      <button
        onClick={toggleFavorite}
        className={clsx(styles.starButton, { [styles.active]: isFavorite })}
        aria-label="Toggle favorite"
      >
        <FontAwesomeIcon icon={isFavorite ? solidStar : regularStar} />
      </button>
    </li>
  );
};

export default Card;





