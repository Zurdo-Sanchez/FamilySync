import React from "react";
import { Grid } from "@mui/material";

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
      <button onClick={() => signOutAction()}></button>
    </>
  );
}

export default DashboadView;
