import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';
import { createSelector } from 'reselect';

// selectors
export const getAllColumns = state => state.columns;

export const getAllLists = state => state.lists;

export const getListById = (state, id) => state.lists.find(list => list.id === id);

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

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

// reducer
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
          },
        ],
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [
          ...state.cards,
          { ...action.payload, id: shortid() },
        ],
      };
    case 'UPDATE_SEARCHSTRING':
      return {
        ...state,
        searchString: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;






