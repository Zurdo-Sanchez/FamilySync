import { connect } from "react-redux";
import NavBarView from "../component/navBar/navBarView";
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

const navBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBarView);

export default navBarContainer;
