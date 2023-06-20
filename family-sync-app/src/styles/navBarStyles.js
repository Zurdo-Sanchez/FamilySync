import { makeStyles } from "@mui/styles";

const Styles = makeStyles((theme) => {
  const { typography, palette } = theme;
  const { pxToRem } = typography;
  return {
    container: {
      margin: pxToRem(0),
      padding: pxToRem(0),
      backgroundColor: palette.background.navBar,
      height: '7vh',
      display: "grid",
      gridTemplateColumns: "33% 33% 33%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    userData: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    nameTitle: {
      display: "flex",
      color: "blue",
      fontSize: `${pxToRem(28)} !important`,
      fontWeight: "900 !important",
      justifyContent: "center",
    },
    containerAvatar: {
      display: "flex",
      height: "100%",
      alignItems: "center",
    },
    avatar: {
      width: pxToRem(50),
      height: pxToRem(50),
      borderRadius: "50%",
      borderWidth: pxToRem(2),
      borderStyle: "solid",
      borderImage: `${palette.background.main} 1`,
      backgroundImage: palette.background.main,
    },
    nameContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column !important",
      flexWrap: "wrap",
      margin: pxToRem(10),
    },
    nameAvatar: {
      color: palette.common.white,
      fontSize: `${pxToRem(10)} !important`,
    },
    avatarMenu: {
      backdropFilter: "blur(5px)",
    },
    avatarMenuList: {
      background: palette.background.main,
      color: "white",
      backdropFilter: "blur(5px)",
    },
    icoMenu: {
      color: palette.common.white,
      fontSize: "50px!important",
    },
    icoMenuList: {
      color: palette.common.white,
    },
  };
});

export default Styles;
