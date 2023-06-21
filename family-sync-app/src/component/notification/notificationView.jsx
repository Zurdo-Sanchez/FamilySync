import React, { useState, useEffect } from "react";
import {
  Snackbar,
  SnackbarContent,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import Styles from "../../styles/notificationStyles";

//const Notification = ({ message, type, duration, onClose }) => {
const Notification = (props) => {
  const classes = Styles();
  const [open, setOpen] = useState(false);

  const {
    //STATE
    getNotificationMessage,
    //ACTIONS
    setNotificationMessage,
  } = props;
  const message = getNotificationMessage && getNotificationMessage.message ? getNotificationMessage.message : null;
  const duration = 3000;
  const type = getNotificationMessage && getNotificationMessage.type ? getNotificationMessage.type: null;
  useEffect(() => {
    setOpen(true);

    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setNotificationMessage(null);
    setOpen(false);
  };

  const getSnackbarClass = () => {
    switch (type) {
      case "success":
        return classes.success;
      case "error":
        return classes.error;
      default:
        return "";
    }
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      onClose={handleClose}
    >
      <SnackbarContent
        className={getSnackbarClass()}
        message={message}
        action={
          <IconButton size="small" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Snackbar>
  );
};

export default Notification;
