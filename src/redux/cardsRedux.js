import shortid from 'shortid';
import strContains from '../utils/strContains';

// === SELECTORS ===
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    card =>
      card.columnId === columnId &&
      strContains(card.title, searchString)
  );

export const getFavoriteCards = ({ cards }) =>
  cards.filter(card => card.isFavorite);

// === ACTION TYPES ===
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

// === ACTION CREATORS ===
export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });
export const removeCard = payload => ({ type: REMOVE_CARD, payload }); // payload = card.id

// === REDUCER ===
const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...statePart,
        {
          ...action.payload,
          id: shortid(),
          isFavorite: false,
        },
      ];

    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );

    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload);

    default:
      return statePart;
  }
};

export default cardsReducer;


