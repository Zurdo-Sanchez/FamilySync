import { connect } from "react-redux";
import LoginView from "../component/login/loginView";
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

const dashboardContainer = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default dashboardContainer;
