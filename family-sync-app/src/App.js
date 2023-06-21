import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import ProtectedRouter from "./routes/protectedRouter";
import "./App.css";
import { useEffect, useState } from "react";
import Notification from "./containers/notificationContainer";

function App(props) {
  const {
    //STATE
    getIsLoggedSelector,
    getNotificationMessage,
    //FUNCTIONS
    getDBCategory,
  } = props;

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (getNotificationMessage) setShowNotification(getNotificationMessage);
    console.log(getNotificationMessage);
  }, [getNotificationMessage, showNotification]);

  useEffect(() => {
    if (getIsLoggedSelector) getDBCategory();
  }, [getIsLoggedSelector]);

  return (
    <>
      {showNotification && <Notification />}
      {!getIsLoggedSelector ? (
        <RouterProvider router={router} />
      ) : (
        <div className="App">
          <RouterProvider router={ProtectedRouter} />
        </div>
      )}
    </>
  );
}

export default App;
