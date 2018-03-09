import React from 'react';

const User = ({ login, avatar }) => (
  <div className="card card-inverse">
    <img className="card-img" src={avatar} alt="avatar" />
    <div className="card-img-overlay">
      <h4 className="card-title">{login}</h4>
    </div>
  </div>
);

export default User;
