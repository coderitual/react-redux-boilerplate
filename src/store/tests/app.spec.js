import reducer, { addUser } from '../app';

test('app reducer has correct inital value', () => {
  expect(reducer(undefined, { type: 'FAKE' })).toMatchSnapshot();
});

test('app reducer adds user', () => {
  expect(reducer(undefined, addUser('mike'))).toMatchSnapshot();
});
