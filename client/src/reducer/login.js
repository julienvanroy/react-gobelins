const getUser = () => {
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    return ({
      username: localStorage.getItem('username'),
      password: localStorage.getItem('password'),
      admin: localStorage.getItem('admin') !== null ? localStorage.getItem('admin' ) : false,
    })
  }
  return null;
};

const initialState = {
  user: getUser(),
  authenticated: getUser() !== null,
  admin: localStorage.getItem('admin') !== null ? (localStorage.getItem('admin' ) === "true") : false,
  hasError: false,
  errorMessage: ''
};

const setUser = (user) => {
  localStorage.setItem('username', user.username);
  localStorage.setItem('password', user.password);
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('admin');
      return {
        user: null,
        authenticated: false,
        admin: false,
        hasError: false,
        errorMessage: ''
      };
    case 'SET_USER':
      setUser(action.user)
      return {...state, user: action.user};
    case 'SET_AUTHENTICATED':
      return {...state, authenticated: action.authenticated};
    case 'SET_ADMIN':
      localStorage.setItem('admin', action.admin);
      return {...state, user: getUser(), admin: action.admin};
    case 'SET_HAS_ERROR':
      return {...state, hasError: action.hasError, errorMessage: action.errorMessage};
    default:
      return state;
  }
};

export default login;
