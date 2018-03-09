import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

const IndexContainer = props => <Home {...props} />;

export default connect(null, null)(IndexContainer);
