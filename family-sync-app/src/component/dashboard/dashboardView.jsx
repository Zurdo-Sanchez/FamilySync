import React from "react";
import Styles from "../../styles/dashboardStyles";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DashboadView(props) {
  const classes = Styles();
  const navigate = useNavigate();

  const {
    //state
    getUserSelector,
    //function
    signOutAction,
  } = props;

  return (
    <Grid className={classes.container}>
      <button onClick={() => signOutAction()}>sign Out</button>
      <button onClick={() => navigate("/accountant")}>AccountantView</button>
    </Grid>
  );
}

export default DashboadView;
