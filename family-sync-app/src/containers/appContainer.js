import { connect } from "react-redux";
import App from "../App";
// States
import { getUserSelector } from "../selectors/loginSelector";

// Functions
import { signOutAction } from "../actions/userActions";

const mapStateToProps = (state) => ({
  getUserSelector: getUserSelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    signOutAction: (payload) => dispatch(signOutAction(payload)),
  };
};

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;
