import * as type from "./actionsType/accountantActionsType";

export const loading = (value) => {
  return {
    type: type.GET_LOADING_ACTION,
    value,
  };
};
export const setLoading = (value) => {
  return {
    type: type.SET_LOADING_ACTION,
    value,
  };
};
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
export const deleteCategory = (value) => {
  return {
    type: type.DELETE_CATEGORY_ACTION,
    value,
  };
};
