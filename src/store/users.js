import { callApi } from '../utils/api.js';
import { createSelector } from 'reselect';

// -----------------
// ACTIONS

const FETCH_USERS_REQUEST = 'users/FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'users/FETCH_USERS_SUCCESS';
const CHANGE_ADMIN_FILTER = 'users/CHANGE_ADMIN_FILTER';
const CHANGE_USER_FILTER = 'users/CHANGE_USER_FILTER';

export const actions = {
  fetchUsers: () => async dispatch => {
    dispatch({ type: FETCH_USERS_REQUEST });
    const users = await callApi('https://api.github.com/users');
    dispatch({ type: FETCH_USERS_SUCCESS, users });
  },

  changeAdminFilter: () => ({
    type: CHANGE_ADMIN_FILTER,
  }),

  changeUserFilter: () => ({
    type: CHANGE_USER_FILTER,
  }),
};

// -----------------
// SELECTORS

const getUsers = state => state.users.entities;
const getAdminsOnly = state => state.users.adminsOnly;

const getFilteredDataReselect = createSelector(
  getUsers,
  getAdminsOnly,
  (users, filter) => {
    if (users) {
      return users.filter(l => l.site_admin === filter);
    }
  },
);

export const selectors = {
  getUsers,
  getAdminsOnly,
  getFilteredDataReselect,
};

// -----------------
// REDUCER

const intitalState = {
  entities: [],
  adminsOnly: false,
  isFetching: false,
};

export const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        entities: action.users,
      };
    case CHANGE_ADMIN_FILTER:
      return {
        ...state,
        adminsOnly: true,
      };
    case CHANGE_USER_FILTER:
      return {
        ...state,
        adminsOnly: false,
      };
    default:
      return state;
  }
};
