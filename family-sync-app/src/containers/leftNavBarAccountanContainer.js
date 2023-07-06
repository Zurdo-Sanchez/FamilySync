import { connect } from "react-redux";
import LeftNavBarAccountantView from "../component/leftNavBarAccountant/leftNavBarAccountantView";
// States
import { getCategory, loading } from "../selectors/accountantSelector";
// Functions
import { addCategory, deleteCategory } from "../actions/accountantActions";

const mapStateToProps = (state) => ({
  getCategory: getCategory(state),
  loading: loading(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (payload) => dispatch(addCategory(payload)),
    deleteCategory: (payload) => dispatch(deleteCategory(payload)),
  };
};

const LeftNavBarAccountanContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNavBarAccountantView);

export default LeftNavBarAccountanContainer;
