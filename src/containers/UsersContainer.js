import React from 'react';
import { connect } from 'react-redux';
import Users from '../components/Users';
import {
  fetchUsers,
  changeAdminFilter,
  changeUserFilter,
  changePrtOfState,
} from '../actions/users';
import { getFilteredDataReselect } from '../selectors/selectors';

const UsersContainer = props => <Users {...props} />;

const mapStateToProps = state => ({
  users: getFilteredDataReselect(state),
});

export default connect(mapStateToProps, {
  fetchUsers,
  changeAdminFilter,
  changeUserFilter,
  changePrtOfState,
})(UsersContainer);
