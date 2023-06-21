import React, { useState } from "react";
import Styles from "../../styles/accountantStyles";
import { Grid, Input, Typography } from "@mui/material";
import LeftNavBarAccountanContainer from "../../containers/leftNavBarAccountanContainer";
function AccountantView(props) {
  const classes = Styles();
  const {
    //state
    getCategory,
    //actions
    addCategory,
  } = props;
  const [categories, setCategories] = useState(getCategory);

  return (
    <>
      <Grid className={classes.root}>
        <LeftNavBarAccountanContainer
          categories={categories}
          setCategories={setCategories}
        />
        <Grid>
          <Grid>Acountant </Grid>
        </Grid>
        <Grid>
          {categories.map((cat, index) => (
            <Grid key={index + 1}>
              cat N°{index}: {cat}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
export default AccountantView;
