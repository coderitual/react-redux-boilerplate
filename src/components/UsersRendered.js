import React, { Component } from 'react';

class UsersRendered extends Component {
  render() {
    const { login, avatar } = this.props;
    return (
      <div className="card card-inverse">
        <img className="card-img" src={avatar} alt="avatar image" />
        <div className="card-img-overlay">
          <h4 className="card-title">
            <kbd>{login}</kbd>
          </h4>
        </div>
      </div>
    );
  }
}

export default UsersRendered;
