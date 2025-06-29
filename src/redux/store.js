import { createStore } from 'redux';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  // 🔹 Obsługa akcji dodawania kolumny
  if (action.type === 'ADD_COLUMN') {
    return {
      ...state,
      columns: [...state.columns, action.newColumn],
    };
  }

  return state; // jeśli żadna akcja nie pasuje – zwracamy niezmieniony stan
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
