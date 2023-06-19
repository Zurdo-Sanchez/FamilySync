import { connect } from "react-redux";
import AccountantView from "../component/accountant/accountantView";
// States
import { getCategory } from "../selectors/accountantSelector";
// Functions
import { addCategory } from "../actions/accountantActions";

const mapStateToProps = (state) => ({
  getCategory: getCategory(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (payload) => dispatch(addCategory(payload)),
  };
};

const AccountantContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountantView);

export default AccountantContainer;
