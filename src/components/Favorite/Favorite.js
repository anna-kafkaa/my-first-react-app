import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  if (favoriteCards.length === 0) {
    return (
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p>No favorite cards...</p>
      </div>
    );
  }

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.cards}>
        {favoriteCards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;



