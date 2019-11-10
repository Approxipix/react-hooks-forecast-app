import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer/reducer';
import weatherReducer from './weatherReducer/reducer';

export const store = createStore(
  combineReducers({
    rootReducer,
    weatherReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
