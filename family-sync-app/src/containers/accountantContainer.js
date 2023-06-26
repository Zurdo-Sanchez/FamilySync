import { connect } from "react-redux";
import AccountantView from "../component/accountant/accountantView";
// States
import { getCategory, loading  } from "../selectors/accountantSelector";
// Functions
import { deleteCategory } from "../actions/accountantActions";

const mapStateToProps = (state) => ({
  getCategory: getCategory(state),
  loading: loading(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCategory: (payload) => dispatch(deleteCategory(payload)),
  };
};

const AccountantContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountantView);

export default AccountantContainer;
