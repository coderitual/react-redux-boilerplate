import React, { Component } from 'react';

const User = ({ login, avatar }) => (
  <div className="card card-inverse">
    <img className="card-img" src={avatar} alt="avatar image" />
    <div className="card-img-overlay">
      <h4 className="card-title">
        <kbd>{login}</kbd>
      </h4>
    </div>
  </div>
);

export default User;
