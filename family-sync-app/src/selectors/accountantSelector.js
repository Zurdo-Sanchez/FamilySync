import { getStateWithOnlyOneLevel } from '../utils/StateSelectorHelper';

function getState(state) {
  return getStateWithOnlyOneLevel(state, 'accountant');
}

export const getCategory = (state) => getState(state).get('category');

