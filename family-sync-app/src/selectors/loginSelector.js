import { getStateWithOnlyOneLevel } from '../utils/StateSelectorHelper';

function getState(state) {
  return getStateWithOnlyOneLevel(state, 'login');
}

export const getUserSelector = (state) => getState(state).get('userData');
export const getIsLoggedSelector = (state) => getState(state).get('isLogged');
