import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { reducers } from './store';

export default history => {
  const store = createStore(
    buildRootReducer(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware, routerMiddleware(history)),
  );

  return store;
};

const buildRootReducer = allReducers => {
  return combineReducers({ ...allReducers, routing: routerReducer });
};
