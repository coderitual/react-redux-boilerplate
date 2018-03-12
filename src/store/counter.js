// -----------------
// ACTIONS

const INCREMENT = 'counter/INCREMENT';

export const actions = {
  increment: () => ({
    type: INCREMENT,
  }),
};

// -----------------
// REDUCER

const intitalState = {
  value: 0,
};

export const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value++,
      };
    default:
      return state;
  }
};
