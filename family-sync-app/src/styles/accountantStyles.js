import { makeStyles } from "@mui/styles";

const Styles = makeStyles((theme) => {
  const { typography, palette } = theme;
  const { pxToRem } = typography;
  return {
    root: {
      display: "Flex",
      background: palette.background.main,
    },
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    AcountantContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    container: {
      margin: pxToRem(0),
      padding: pxToRem(0),
      background: palette.background.main,
    },
    avatar: {
      borderRadius: "50%",
      borderWidth: pxToRem(2),
      borderStyle: "solid",
      borderImage: `${palette.background.main} 1`,
      backgroundImage: palette.background.main,
      padding: pxToRem(1),
    },
    containerCard: {
      display: "flex",
      marginBottom: pxToRem(5),
      justifyContent: "space-between",
    },
  };
});

export default Styles;
