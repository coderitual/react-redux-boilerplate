import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './containers/HomePage';
import UsersPage from './containers/UsersPage';

const routes = (
  <Layout>
    <Route exact path="/" component={HomePage} />
    <Route path="/users/" component={UsersPage} />
  </Layout>
);

export default routes;
