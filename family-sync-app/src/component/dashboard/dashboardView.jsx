import React from "react";
import { Button, Grid } from "@mui/material";

function DashboadView(props) {
  const {
    //state
    getUserSelector,
    //function
    signOutAction,
  } = props;

  return (
    <>
      <Grid>hola! {getUserSelector.displayName}</Grid>
      <button onClick={() => signOutAction()}>sign Out</button>
    </>
  );
}

export default DashboadView;
