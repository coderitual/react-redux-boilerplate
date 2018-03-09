import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Index
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/users/">
            Git Users
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
