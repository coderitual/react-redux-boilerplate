export const addUser = name => ({
  type: 'ADD_USER',
  name,
});

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      return [...state, action.name];
      break;
    }
    default: {
      return state;
      break;
    }
  }
};
