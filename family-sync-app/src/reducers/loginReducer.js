import { Map } from "immutable";
import * as type from "../actions/actionsType/userActionsType";

const initialState = Map({
  userData: [],
  isLogged: false
});

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_USER_ACTION:
      return state.set("userData", action.payload);
    case type.SET_IS_LOGGED:
      return state.set("isLogged", action.value);

    default:
      return state;
  }
};

export default loginReducer;
