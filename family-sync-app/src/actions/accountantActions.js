import * as type from "./actionsType/accountantActionsType";

export const setCategory = (value) => {
  return {
    type: type.SET_CATEGORY_ACTION,
    value,
  };
};
export const getDBCategory = (value) => {
  return {
    type: type.GET_DB_CATEGORY_ACTION,
    value,
  };
};
export const addCategory = (value) => {
  return {
    type: type.ADD_CATEGORY_ACTION,
    value,
  };
};
