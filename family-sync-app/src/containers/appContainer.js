import { connect } from "react-redux";
import App from "../App";
// States
import { getIsLoggedSelector } from "../selectors/loginSelector";

// Functions
import { signOutAction } from "../actions/userActions";
import { getDBCategory } from "../actions/accountantActions";

const mapStateToProps = (state) => ({
  getIsLoggedSelector: getIsLoggedSelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    signOutAction: (payload) => dispatch(signOutAction(payload)),
    getDBCategory: (payload) => dispatch(getDBCategory(payload)),
  };
};

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;
