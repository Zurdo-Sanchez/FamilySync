import { connect } from "react-redux";
import App from "../App";
// States
import { getIsLoggedSelector } from "../selectors/loginSelector";
import { getNotificationMessage } from "../selectors/notificationSelector";

// Functions
import { signOutAction } from "../actions/userActions";
import { getDBCategory } from "../actions/accountantActions";
import { setNotificationMessage } from "../actions/notificationActions";

const mapStateToProps = (state) => ({
  getIsLoggedSelector: getIsLoggedSelector(state),
  getNotificationMessage: getNotificationMessage(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    signOutAction: (payload) => dispatch(signOutAction(payload)),
    getDBCategory: (payload) => dispatch(getDBCategory(payload)),
    setNotificationMessage: (payload) =>
      dispatch(setNotificationMessage(payload)),
  };
};

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;
