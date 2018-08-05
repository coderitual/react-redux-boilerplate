import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../App';

test('<App /> renders correctly', () => {
  const component = renderer.create(<App />);
  expect(component.toJSON()).toMatchSnapshot();
});
