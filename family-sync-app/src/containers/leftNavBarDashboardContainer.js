import { connect } from "react-redux";
import LeftNavBarDashboard from "../component/leftNavBarDashboard/leftNavBarDashboardView";
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

const leftNavBarDashboardContainer = connect(mapStateToProps, mapDispatchToProps)(LeftNavBarDashboard);

export default leftNavBarDashboardContainer;
