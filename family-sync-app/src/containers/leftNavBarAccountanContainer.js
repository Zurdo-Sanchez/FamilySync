import { connect } from "react-redux";
import LeftNavBarAccountantView from "../component/leftNavBarAccountant/leftNavBarAccountantView";
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

const LeftNavBarAccountanContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNavBarAccountantView);

export default LeftNavBarAccountanContainer;
