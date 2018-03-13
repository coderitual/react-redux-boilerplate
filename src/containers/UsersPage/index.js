import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as users from 'store/users';
import * as counter from 'store/counter';

import User from './User';

class Users extends Component {
  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  handleAdminsClick = () => {
    this.props.changeUserFilter();
  };

  handleUsersClick = () => {
    this.props.changeAdminFilter();
  };

  handleChangeStateClick = () => {
    this.props.increment();
  };

  render() {
    const { users } = this.props;
    return (
      <div className="users">
        <h1>Users page</h1>
        <div className="filters">
          <button className="filters__button" onClick={this.handleAdminsClick}>
            Show Git Admins
          </button>
          <button className="filters__button" onClick={this.handleUsersClick}>
            Show Git Users
          </button>
          <button
            className="filters__button"
            onClick={this.handleChangeStateClick}
          >
            Change unrelated part of state
          </button>
        </div>
        <div className="cards">
          {users
            ? users.map(user => (
                <User
                  key={user.id}
                  login={user.login}
                  className="card"
                  avatar={user.avatar_url}
                  admin={user.site_admin}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.object,
  increment: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  changeAdminFilter: PropTypes.func.isRequired,
  changeUserFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: users.selectors.getFilteredUsers(state),
});

const mapDispatchToProps = {
  ...users.actions,
  ...counter.actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
