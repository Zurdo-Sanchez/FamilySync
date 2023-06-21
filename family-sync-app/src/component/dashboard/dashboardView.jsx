import React, {useState } from "react";
import Styles from "../../styles/dashboardStyles";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LeftNavBarDashboardContainer from "../../containers/leftNavBarDashboardContainer";
import Notification from "../notification/notificationView";

function DashboadView(props) {
  const classes = Styles();
  const navigate = useNavigate();

  const {
    //state
    getUserSelector,
    //function
    signOutAction,
  } = props;
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };
  return (
    <Grid className={classes.root}>
      <LeftNavBarDashboardContainer />
      <Grid className={classes.container}>
        <button onClick={() => signOutAction()}>sign Out</button>
        <button onClick={() => navigate("/accountant")}>AccountantView</button>

        <div>
          <button onClick={handleShowNotification}>Mostrar notificación</button>
          {showNotification && (
            <Notification
              message="¡Notificación de prueba!"
              type="success"
              duration={3000}
              onClose={handleCloseNotification}
            />
          )}
        </div>
      </Grid>
    </Grid>
  );
}

export default DashboadView;
