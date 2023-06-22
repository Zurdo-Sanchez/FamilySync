import { makeStyles, Avatar } from "@mui/styles";

const Styles = makeStyles((theme) => {
  const { typography, palette } = theme;
  const { pxToRem } = typography;

  return {
    gridMain: {
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      padding: 0,
      margin: 0,
      height: "100vh",
    },

    paperStyle: {
      width: 280,
      height: 500,
      margin: "30px auto",
      padding: pxToRem(20),
      borderRadius: pxToRem(10),
    },

    signBtnStyle: {
      color: theme.palette.secondary.main,
      margin: "8px 0",
    },

    titleH2: {
      color: palette.dark.main,
    },
  };
});

export default Styles;
