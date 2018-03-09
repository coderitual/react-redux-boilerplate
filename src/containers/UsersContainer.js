import React from 'react';
import { connect } from 'react-redux';
import Users from '../components/Users';
import {
  fetchUsers,
  changeAdminFilter,
  changeUserFilter,
  changePrtOfState,
} from '../actions/users';
import { getFilteredDataReselect } from '../selectors/users';

const UsersContainer = props => <Users {...props} />;

const mapStateToProps = state => ({
  users: getFilteredDataReselect(state),
});

const mapDispatchToProps = state => ({
  fetchUsers,
  changeAdminFilter,
  changeUserFilter,
  changePrtOfState,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
