import * as type from "./actionsType/userActionsType";

export const setUserAction = (payload) => {
  return {
    type: type.SET_USER_ACTION,
    payload,
  };
};

export const setIsLoggedAction = (value) => {
  return {
    type: type.SET_IS_LOGGED,
    value,
  };
};

export const authAction = (payload) => {
  return {
    type: type.AUTH_ACTION,
    payload,
  };
};

export const signOutAction = (payload) => {
  return {
    type: type.SIGNOUT_ACTION,
    payload,
  };
};


