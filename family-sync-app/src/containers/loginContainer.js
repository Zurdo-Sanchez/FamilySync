import { connect } from "react-redux";
import LoginView from "../component/loginView/loginView";
// States
import { getUserSelector } from "../selectors/loginSelector";

// Functions
import { setUserAction, prueba } from "../actions/userActions";

const mapStateToProps = (state) => ({
  getUserSelector: getUserSelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserAction: (payload) => dispatch(setUserAction(payload)),
    prueba: (payload) => dispatch(prueba(payload)),

    
  };
};

const loginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default loginContainer;
