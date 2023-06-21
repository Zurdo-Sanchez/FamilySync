import { makeStyles, Avatar } from "@mui/styles";

const Styles = makeStyles((theme) => {
  const { typography, palette } = theme;
  const { pxToRem } = typography;

  return {
    paperStyle: {
      width: 280,
      height: "70vh",
      margin: "30px auto",
      padding: pxToRem(20),
      borderRadius: pxToRem(10),
    },

    avatarStyle: {
      backgroundColor: theme.palette.primary.main,
    },

    signBtnStyle: {
      color: theme.palette.secondary.main,
      margin: "8px 0",
    },

    titleH2: {
      color: theme.textColor.primary,
    },

    container: {
      margin: "0",
      padding: "0",
      background: "linear-gradient(150deg, #6c3483, #58d68d)",
      height: "100vh",
    },

    title: {
      color: theme.palette.secondary.main, // Cambia "blue" al color deseado
      marginTop: pxToRem(-30),
      backgroundColor: theme.palette.primary.main,
    },

    blockLogin: {
      backgroundColor: "white",
    },

    gridMain: {
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      padding: 0,
      margin: 0,
      height: "100vh",
    },

    boxMain: {
      flexGrow: 1,
      display: "grid",
      gap: theme.spacing(1),
      borderColor: theme.palette.secondary.main,
      borderRadius: 5,
    },

    containBox: {
      display: "flex",
      flexDirection: "column", // Cambiar a una disposición de columna
      justifyContent: "center",
      alignItems: "center",

      gap: theme.spacing(1),
    },

    buttonLogin: {
      marginTop: "8px",
    },
    buttonForgot: {
      margin: "8px",

      color: theme.palette.secondary.main,
    },
  };
});

export default Styles;
