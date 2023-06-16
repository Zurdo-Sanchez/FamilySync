import * as type from "./actionsType/dataAccountantActionsType";

export const setCategory = (value) => {
  return {
    type: type.SET_CATEGORY_ACTION,
    value,
  };
};
export const addCategory = (value) => {
  return {
    type: type.ADD_CATEGORY_ACTION,
    value,
  };
};
