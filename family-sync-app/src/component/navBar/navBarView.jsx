import React, { useState }from "react";
import Styles from "../../styles/navBarStyles";
import { Grid, Typography, Menu, MenuItem } from "@mui/material";
import LensBlurIcon from "@mui/icons-material/LensBlur";
function NavBarView(props) {
  const classes = Styles();
  const {
    //state
    getUserSelector,
    //function
    signOutAction,
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid className={classes.container}>
        {/* <button onClick={() => signOutAction()}>sign Out</button> */}
        <LensBlurIcon className={classes.icoMenu} />
        <Typography className={classes.nameTitle}>FAMILY SYNCY</Typography>
        <Grid className={classes.userData}>
          <Grid className={classes.nameContainer}>
            <Typography className={classes.nameAvatar}>hola!</Typography>
            <Typography className={classes.nameAvatar}>
              {getUserSelector.displayName}
            </Typography>
          </Grid>
          <Grid className={classes.containerAvatar}>
            <img
              alt="avatar"
              src={getUserSelector.photoURL}
              className={classes.avatar}
              onClick={handleClick}
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Opción 1</MenuItem>
              <MenuItem onClick={handleClose}>Opción 2</MenuItem>
              <MenuItem onClick={handleClose}>Opción 3</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default NavBarView;
