import { Map } from "immutable";
import * as type from "../actions/actionsType/notificationActionsType";

const initialState = Map({
  message: null,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
     case type.SET_MESSAGE_ACTION:
       return state.set("message", action.value );
    default:
      return state;
  }
};

export default notificationReducer;
