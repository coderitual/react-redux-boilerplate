import React, { Component } from 'react';
import UsersRendered from '../components/UsersRendered';

class Users extends Component {
  constructor() {
    super();
    this.handleAdminsClick = this.handleAdminsClick.bind(this);
    this.handleUsersClick = this.handleUsersClick.bind(this);
    this.handleChangeStateClick = this.handleChangeStateClick.bind(this);
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  handleAdminsClick() {
    const { changeAdminFilter } = this.props;
    changeAdminFilter();
  }

  handleUsersClick() {
    const { changeUserFilter } = this.props;
    changeUserFilter();
  }

  handleChangeStateClick() {
    const { changePrtOfState } = this.props;
    changePrtOfState();
  }

  render() {
    const { users } = this.props;
    console.log('re-render');
    return (
      <div>
        <div className="mt-5 mb-5">
          <button className="btn btn-primary m-2" onClick={this.handleAdminsClick}>
            Show Git Admins
          </button>
          <button className="btn btn-primary m-2" onClick={this.handleUsersClick}>
            Show Git Users
          </button>
          <button className="btn btn-danger m-2" onClick={this.handleChangeStateClick}>
            Change unrelated part of state
          </button>
        </div>
        <div className="card-columns">
          {users
            ? users.map(l => (
                <UsersRendered
                  key={l.id.toString()}
                  login={l.login}
                  className="card card-inverse"
                  avatar={l.avatar_url}
                  admin={l.site_admin}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Users;
