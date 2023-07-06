import React, { useEffect, useState } from "react";
import Styles from "../../styles/accountantStyles";
import { Grid, CircularProgress } from "@mui/material";
import LeftNavBarAccountanContainer from "../../containers/leftNavBarAccountanContainer";
function AccountantView(props) {
  const classes = Styles();
  const {
    //state
    getCategory,
    loading,
    //actions
    deleteCategory,
  } = props;
  const [categories, setCategories] = useState(getCategory);

  useEffect(() => {
    setCategories(() => getCategory);
  }, [loading, getCategory]);

  return (
    <>
      {loading && (
        <Grid className={classes.loadingContainer}>
          <CircularProgress />
        </Grid>
      )}
      <Grid className={classes.root}>
        <LeftNavBarAccountanContainer
          categories={categories}
          setCategories={setCategories}
        />
        <Grid className={classes.AcountantContainer}>
          <Grid>Acountant </Grid>
          <Grid>
            {categories.map((cat, index) => (
              <Grid className={classes.containerCard}>
                <Grid key={index + 1}>
                  cat N°{index}: {cat.name}
                </Grid>
                <button onClick={() => deleteCategory(cat.id)}>delete</button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default AccountantView;
