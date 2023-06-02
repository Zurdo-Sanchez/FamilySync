import { connect } from "react-redux";
import DashboadView from "../component/dashboard/dashboardView";
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

const dashboardContainer = connect(mapStateToProps, mapDispatchToProps)(DashboadView);

export default dashboardContainer;
