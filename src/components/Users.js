import React, { Component } from 'react';
import User from '../components/User';

class Users extends Component {
  componentDidMount() {
    const { onInit } = this.props;
    onInit();
  }

  handleAdminsClick = () => {
    const { onChangeAdminFilter } = this.props;
    onChangeAdminFilter();
  };

  handleUsersClick = () => {
    const { onChangeUserFilter } = this.props;
    onChangeUserFilter();
  };

  handleChangeStateClick = () => {
    const { onDummyButtonClick } = this.props;
    onDummyButtonClick();
  };

  render() {
    const { users } = this.props;
    return (
      <div>
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

export default Users;
