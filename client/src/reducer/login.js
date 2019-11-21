const getUser = () => {
  console.log(sessionStorage.getItem('username'))
  if (sessionStorage.getItem('username') && sessionStorage.getItem('password')) {
    return ({
      username: sessionStorage.getItem('username'),
      password: sessionStorage.getItem('password'),
      admin: sessionStorage.getItem('admin') !== null ? (sessionStorage.getItem('admin' ) === "true") : false,
    })
  }
  return null;
};

const initialState = {
  user: getUser(),
  authenticated: getUser() !== null,
  admin: sessionStorage.getItem('admin') !== null ? (sessionStorage.getItem('admin' ) === "true") : false,
  hasError: false,
  errorMessage: ''
};

const setUser = (user) => {
  sessionStorage.setItem('username', user.username);
  sessionStorage.setItem('password', user.password);
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('password');
      sessionStorage.removeItem('admin');
      return {
        user: null,
        authenticated: false,
        admin: false,
        hasError: false,
      };
    case 'SET_USER':
      setUser(action.user)
      return {...state, user: action.user};
    case 'SET_AUTHENTICATED':
      return {...state, authenticated: action.authenticated};
    case 'SET_ADMIN':
      sessionStorage.setItem('admin', action.admin);
      return {...state, user: getUser(), admin: action.admin};
    case 'SET_HAS_ERROR':
      return {...state, hasError: action.hasError, errorMessage: action.errorMessage};
    default:
      return state;
  }
};

export default login;
