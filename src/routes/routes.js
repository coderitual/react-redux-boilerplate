import React from 'react';
import { Route } from 'react-router-dom';

import IndexContainer from '../containers/IndexContainer';
import UsersContainer from '../containers/UsersContainer';
import Navigation from '../components/Navigation';

const routes = (
  <div>
    <Route component={Navigation} />
    <Route exact path="/" component={IndexContainer} />
    <Route path="/users/" component={UsersContainer} />
  </div>
);

export default routes;
