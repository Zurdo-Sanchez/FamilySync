import { makeStyles } from "@mui/styles";

const Styles = makeStyles((theme) => {
  const { typography, palette } = theme;
  const { pxToRem } = typography;
  return {
    root:{
      display: 'flex',
      height: '93vh'
    },
    container: {
      height: '93vh',
      width: '100%',
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
  };
});

export default Styles;
