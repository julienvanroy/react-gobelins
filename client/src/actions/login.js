export const logout = () => ({ type: 'LOGOUT' });
export const setUser = (user) => ({ type: 'SET_USER', user });
export const setAuthenticated = (authenticated) => ({ type: 'SET_AUTHENTICATED', authenticated });
export const setAdmin = (admin) => ({ type: 'SET_ADMIN', admin });
export const setHasError = (hasError, errorMessage) => ({ type: 'SET_HAS_ERROR', hasError, errorMessage});
