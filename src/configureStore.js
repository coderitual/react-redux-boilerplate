import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { default as app } from './store/app';

const rootReducer = combineReducers({
  app,
});

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedEnhancers = composeEnhancers(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  return store;
}
