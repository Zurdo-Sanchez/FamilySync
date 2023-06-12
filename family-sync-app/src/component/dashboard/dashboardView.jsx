import React from "react";
import Styles from "../../styles/dashboardStyles";
import { Grid } from "@mui/material";

function DashboadView(props) {
  const classes = Styles();
  const {
    //state
    getUserSelector,
    //function
    signOutAction,
  } = props;

  return (
    <>
    <Grid className={classes.container}>
      <button onClick={() => signOutAction()}>sign Out</button>
    </Grid>
    </>
  );
}

export default DashboadView;
