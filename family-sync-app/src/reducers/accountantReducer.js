import { Map } from "immutable";
import * as type from "../actions/actionsType/accountantActionsType";

const initialState = Map({
  category: [],
});

const accountantReducer = (state = initialState, action) => {
  switch (action.type) {
     case type.SET_CATEGORY_ACTION:
       return state.set("category", action.value );
    default:
      return state;
  }
};

export default accountantReducer;
