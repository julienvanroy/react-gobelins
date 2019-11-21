const initialState = {
  users: [],
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {...state, users: action.users};
    default:
      return state;
  }
};

export default admin;
