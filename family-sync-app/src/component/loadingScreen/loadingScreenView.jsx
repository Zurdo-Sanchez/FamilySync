import React from 'react';
import { Grid, CircularProgress } from '@mui/material';

import { useStyles } from './loadingScreenStyles';

export default function LoadingScreen() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <CircularProgress className={classes.circular} />
    </Grid>
  );
}
