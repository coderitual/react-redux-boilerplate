import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../containers/HomePage';
import UsersPage from '../containers/UsersPage';
import Navigation from '../components/Navigation';

const routes = (
  <div>
    <Route component={Navigation} />
    <Route exact path="/" component={HomePage} />
    <Route path="/users/" component={UsersPage} />
  </div>
);

export default routes;
