import * as type from "./actionsType/userActionsType";

export const setUserAction = (payload) => {
  return {
    type: type.SET_USER_ACTION,
    payload,
  };
};

export const prueba = (payload) => {
  return {
    type: type.PRUEBA,
    payload,
  };
};
