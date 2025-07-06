// src/redux/store.js

import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import { createSelector } from 'reselect';
import strContains from '../utils/strContains';

// === SUBREDUCERS ===
import {
  listsReducer,
  columnsReducer,
  cardsReducer,
  searchStringReducer
} from './reducers';

// === SELECTORS ===
export const getAllLists = state => state.lists;
export const getAllColumns = state => state.columns;
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
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

// === MAIN REDUCER ===
const reducer = combineReducers({
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
});

// === STORE ===
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;






