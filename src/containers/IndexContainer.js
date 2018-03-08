import React from 'react';
import { connect } from 'react-redux';

import Index from '../components/Index';

const IndexContainer = props => <Index {...props} />;

export default connect(null, null)(IndexContainer);
