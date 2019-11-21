const initialState = {
  favs: [],
};

const fav = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAVS':
      return {...state, favs: action.favs};
    default:
      return state;
  }
};

export default fav;
