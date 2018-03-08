import { createSelector } from 'reselect';

export const getUsers = state => state.users.entities;
export const getAdminsOnly = state => state.users.adminsOnly;

export const getFilteredDataReselect = createSelector(getUsers, getAdminsOnly, (users, filter) => {
  if (users) {
    return users.filter(l => l.site_admin === filter);
  }
});
