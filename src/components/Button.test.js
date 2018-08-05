import React from 'react';
import { render } from 'react-testing-library';
import Button from './Button';

test('Button renders correctly', () => {
  const { container } = render(<Button />);
  expect(container.firstChild).toMatchSnapshot();
});
