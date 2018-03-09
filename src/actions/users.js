import { callApi } from '../utils/api.js';

const fetchUsersRequest = () => ({
  type: 'FETCH_USERS_REQUEST',
});

const fetchUsersSuccess = users => ({
  type: 'FETCH_USERS_SUCCESS',
  users,
});

export const fetchUsers = () => async dispatch => {
  dispatch(fetchUsersRequest());
  const users = await callApi('https://api.github.com/users');
  dispatch(fetchUsersSuccess(users));
};

export const changeAdminFilter = () => ({
  type: 'CHANGE_ADMIN_FILTER',
});

export const changeUserFilter = () => ({
  type: 'CHANGE_USER_FILTER',
});

export const changeCounter = () => ({
  type: 'CHANGE_COUNTER',
});
