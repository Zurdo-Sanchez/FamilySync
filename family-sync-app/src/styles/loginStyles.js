import { makeStyles } from "@mui/styles";

const Styles = makeStyles((theme) => {
  const { typography, palette } = theme;
  const { pxToRem } = typography;
  return {
    container: {
      margin: "0",
      padding: "0",
      background: "linear-gradient(150deg, #6c3483, #58d68d)",
      height: "100vh",
    },
    googleIcon: {
      width: pxToRem(50),
      height: pxToRem(50),
    },
    customTypography: {
      color: theme.palette.secondary.main, // Cambia "blue" al color deseado
    },

    blockLogin: {
      backgroundColor: "white",
    },

    paperLogin: {
      backgroundColor: theme.palette.primary.main, // Cambia "blue" al color deseado
    },
  };
});

export default Styles;
