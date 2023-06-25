import * as type from "./actionsType/notificationActionsType";

export const setNotificationMessage = (value) => {
  return {
    type: type.SET_MESSAGE_ACTION,
    value,
  };
};