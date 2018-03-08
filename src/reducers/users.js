const intitalState = {
  entities: [],
  adminsOnly: false,
  isFetching: false,
  partOfState: true,
};

const usersReducer = (state = intitalState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        entities: action.users,
      };
    case 'CHANGE_ADMIN_FILTER':
      return {
        ...state,
        adminsOnly: true,
      };
    case 'CHANGE_USER_FILTER':
      return {
        ...state,
        adminsOnly: false,
      };
    case 'CHANGE_PART_OF_STATE':
      return {
        ...state,
        partOfState: !state.partOfState,
      };
    default:
      return state;
  }
};

export default usersReducer;
