import { makeStyles } from "@mui/styles";

const Styles = makeStyles((theme) => {
  const { typography, palette } = theme;
  const { pxToRem } = typography;
  return {
    root: {
      width: pxToRem(200),
      margin: pxToRem(0),
      padding: pxToRem(0),
      background: palette.background.navBar,
      display: "grid",
      gridTemplateRows: `${pxToRem(50)} 1fr ${pxToRem(30)}`
    },
    title:{
      fontSize: `${pxToRem(30)} !important`,
      color: palette.common.white,
    },
    containerItems: {
      display: "flex",
      justifyContent: "flex-start",
      padding: "5px",
    },
    icons: {
      fontSize: `${pxToRem(40)} !important`,
      color: palette.common.white,
    },
    Type: {
      height: pxToRem(40),
      width: '100%',
      color: palette.common.white,
      display: 'flex',
      textAlign: "center",
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: pxToRem(5),
      fontSize: `${pxToRem(13)} !important`,
    },
  };
});

export default Styles;
