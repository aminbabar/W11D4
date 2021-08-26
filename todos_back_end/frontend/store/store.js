import { applyMiddleware, createStore } from 'redux';
import logger from "redux-logger";
import rootReducer from '../reducers/root_reducer';
import myMiddleware from '../middleware/thunk';


const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(myMiddleware, logger));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });

  store.dispatch((dispatch) => {
    console.log('If this prints out, the thunk middleware is working!')
  });

  return store;
}

export default configureStore;
