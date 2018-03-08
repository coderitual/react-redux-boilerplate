import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="row">
        <nav className="navbar navbar-dark bg-dark fixed-top mr-auto">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Index
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users/">
                Git Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
