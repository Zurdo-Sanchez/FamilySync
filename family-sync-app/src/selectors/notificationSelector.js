import { getStateWithOnlyOneLevel } from '../utils/StateSelectorHelper';

function getState(state) {
  return getStateWithOnlyOneLevel(state, 'notifications');
}

export const getNotificationMessage = (state) => getState(state).get('notificationData');

