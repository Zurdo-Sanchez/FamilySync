import { getStateWithOnlyOneLevel } from '../utils/StateSelectorHelper';

function getState(state) {
  return getStateWithOnlyOneLevel(state, 'accountant');
}

export const getCategory = (state) => getState(state).get('category');
export const loading = (state) => getState(state).get('loading');

