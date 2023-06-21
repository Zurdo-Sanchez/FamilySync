import { connect } from "react-redux";
import NotificationView from "../component/notification/notificationView";
// States
import { getNotificationMessage } from "../selectors/notificationSelector";

// Functions
import { setNotificationMessage } from "../actions/notificationActions";

const mapStateToProps = (state) => ({
  getNotificationMessage: getNotificationMessage(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    setNotificationMessage: (payload) =>
      dispatch(setNotificationMessage(payload)),
  };
};

const Notification = connect(mapStateToProps, mapDispatchToProps)(NotificationView);

export default Notification;
