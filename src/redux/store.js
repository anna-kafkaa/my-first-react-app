import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid'; 

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [
          ...state.columns,
          {
            id: state.columns.length + 1, // ✅ ID na początku
            title: action.payload.title,
            icon: action.payload.icon
          }
        ]
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: shortid(),
            title: action.payload.title,
            columnId: action.payload.columnId
          }
        ]
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
