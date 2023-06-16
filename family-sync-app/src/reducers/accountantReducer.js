import { Map } from "immutable";
import * as type from "../actions/actionsType/dataAccountantActionsType";

const initialState = Map({
  category: [],
});

const accountantReducer = (state = initialState, action) => {
  console.log("ACTION", action);
  switch (action.type) {
     case type.SET_CATEGORY_ACTION:
       return state.set("category", action.value );
    default:
      return state;
  }
};

export default accountantReducer;
