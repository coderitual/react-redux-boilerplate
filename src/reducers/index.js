import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import usersReducer from '../reducers/users';

const rootReducer = combineReducers({
  users: usersReducer,
  router: routerReducer,
});

export default rootReducer;
