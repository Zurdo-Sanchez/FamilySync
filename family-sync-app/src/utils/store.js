import { configureStore } from "@reduxjs/toolkit";
import login from "../reducers/loginReducer";
export default configureStore({
  reducer: {
    login,
  },
});
