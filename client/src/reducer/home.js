const initialState = {
  coins: [],
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COINS':
      return {...state, coins: action.coins};
    default:
      return state;
  }
};

export default home;
