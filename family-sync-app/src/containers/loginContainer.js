import { connect } from "react-redux";
import LoginView from "../component/loginView/loginView";
// States
import { getIsLoggedSelector } from "../selectors/loginSelector";

// Functions
import {
  setUserAction,
  signOutAction,
  authAction,
} from "../actions/userActions";

const mapStateToProps = (state) => ({
  getIsLoggedSelector: getIsLoggedSelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserAction: (payload) => dispatch(setUserAction(payload)),
    authAction: (payload) => dispatch(authAction(payload)),
    signOutAction: (payload) => dispatch(signOutAction(payload)),
  };
};

const loginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default loginContainer;
