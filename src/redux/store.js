// src/redux/store.js

import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';
import { createSelector } from 'reselect';

// === SELECTORS ===

export const getAllColumns = state => state.columns;
export const getAllLists = state => state.lists;
export const getSearchString = state => state.searchString;

export const getListById = (state, id) =>
  state.lists.find(list => list.id === id);

export const getColumnsByList = (state, listId) =>
  state.columns.filter(column => column.listId === listId);

export const getFilteredCards = createSelector(
  state => state.cards,
  state => state.searchString,
  (_, columnId) => columnId,
  (cards, searchString, columnId) =>
    cards.filter(
      card =>
        card.columnId === columnId &&
        strContains(card.title, searchString)
    )
);

export const getFavoriteCards = state =>
  state.cards.filter(card => card.isFavorite);

// === ACTION CREATORS ===

export const addColumn = payload => ({
  type: 'ADD_COLUMN',
  payload,
});

export const addCard = payload => ({
  type: 'ADD_CARD',
  payload,
});

export const updateSearchString = payload => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});

export const addList = payload => ({
  type: 'ADD_LIST',
  payload,
});

export const toggleCardFavorite = payload => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload,
});

// === REDUCER ===

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [
          ...state.columns,
          {
            id: shortid(),
            title: action.payload.title || 'New column',
            icon: action.payload.icon || '📁',
            listId: action.payload.listId,
          },
        ],
      };

    case 'ADD_CARD':
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            ...action.payload,
            id: shortid(),
            isFavorite: false, // domyślnie niepolubiona karta
          },
        ],
      };

    case 'UPDATE_SEARCHSTRING':
      return {
        ...state,
        searchString: action.payload,
      };

    case 'ADD_LIST':
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: shortid(),
            title: action.payload.title,
            description: action.payload.description,
          },
        ],
      };

    case 'TOGGLE_CARD_FAVORITE':
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload
            ? { ...card, isFavorite: !card.isFavorite }
            : card
        ),
      };

    default:
      return state;
  }
};

// === STORE ===

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;



