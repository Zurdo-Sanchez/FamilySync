import React from "react";
import { Grid } from "@mui/material";

function DashboadView(prop) {
  const {
    //state
    getUserSelector,
    //function
    signOutAction,
  } = prorp;

  return (
    <>
      <Grid>hola! {getUserSelector}</Grid>
      <button onClick={signOutAction()}></button>
    </>
  );
}

export default DashboadView;
