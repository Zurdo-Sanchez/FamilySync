import React from "react";
import Styles from "../../styles/accountantStyles";
import { Grid } from "@mui/material";

function AccountantView(props) {
  const classes = Styles();
  const {
    //state
    getCategory,
    //actions
    addCategory,
  } = props;
  return (
    <>
      <Grid>Acountant</Grid>
    </>
  );
}

export default AccountantView;
