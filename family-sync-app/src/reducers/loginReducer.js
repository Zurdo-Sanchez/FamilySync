import { Map } from "immutable";
import * as type from "../actions/actionsType/userActionsType";

const initialState = Map({
  userData: [],
});

const login = (state = initialState, action) => {
  console.log('ACTION', action);
  switch (action.type) {
    case type.SET_USER_ACTION:
      return state.set('userData', action.payload);

    default:
      return state;
  }
};

export default login;
