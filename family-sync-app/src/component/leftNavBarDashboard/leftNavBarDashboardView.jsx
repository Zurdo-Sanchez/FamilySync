import React from "react";
import Styles from "../../styles/leftNavBarDashboardStyles";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

function LeftNavBarDashboardView(props) {
  const classes = Styles();
  const navigate = useNavigate();

  const {
    //state
    getUserSelector,
    //function
    signOutAction,
  } = props;

  return (
    <Grid className={classes.root}>
      <Grid>
      <Typography className={classes.title}>Aplicaciones</Typography>
      </Grid>
      <Grid
        className={classes.containerItems}
        onClick={() => navigate("/accountant")}
      >
        <AccountBalanceWalletIcon className={classes.icons} />
        <Typography className={classes.Type}>Control de Gastos</Typography>
      </Grid>
      <Grid>
        <button onClick={() => signOutAction()}>Sign Out</button>
      </Grid>
    </Grid>
  );
}

export default LeftNavBarDashboardView;
