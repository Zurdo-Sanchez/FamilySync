import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../../styles/navBarStyles";
import { Grid, Typography, Menu, MenuItem, ListItemIcon } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";

import LensBlurIcon from "@mui/icons-material/LensBlur";
function NavBarView(props) {
  const navigate = useNavigate();
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

  const handleClose = (op) => {
    if (op === "logOut") {
      signOutAction();
    }
    setAnchorEl(null);
  };
  return (
    <>
      <Grid className={classes.container}>
        {/* <button onClick={() => signOutAction()}>sign Out</button> */}
        <LensBlurIcon className={classes.icoMenu} onClick={() => {navigate("/dashboard")}} />
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
              classes={{ root: classes.avatarMenu }}
              MenuListProps={{ classes: { root: classes.avatarMenuList } }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ManageAccountsSharpIcon className={classes.icoMenuList} />
                </ListItemIcon>
                Perfil
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SettingsSharpIcon className={classes.icoMenuList} />
                </ListItemIcon>
                Opciones
              </MenuItem>
              <MenuItem onClick={() => handleClose("logOut")}>
                <ListItemIcon>
                  <LogoutIcon className={classes.icoMenuList} />
                </ListItemIcon>
                Log Out
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default NavBarView;
