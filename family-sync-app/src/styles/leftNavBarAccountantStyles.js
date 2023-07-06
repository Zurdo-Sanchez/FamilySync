import { makeStyles } from "@mui/styles";
import { lighten } from "@mui/system";

const Styles = makeStyles((theme) => {
  const { typography, palette } = theme;
  const { pxToRem } = typography;
  return {
    root: {
      width: pxToRem(200),
      height: "93vh",
      margin: pxToRem(0),
      padding: pxToRem(0),
      background: palette.background.navBar,
      display: "grid",
      gridTemplateRows: `5% 5% 85% 5%`,
    },
    categoriesButton: {
      cursor: "pointer",
      padding: pxToRem(2),
      color: palette.common.white,
      borderRadius: pxToRem(15),
      transition: "background-color 0.3s ease",
      "&:hover": {
        backgroundColor: palette.primary.dark,
      },
    },
    title: {
      fontSize: `${pxToRem(18)} !important`,
      color: palette.common.white,
    },
    subTitle: {
      fontSize: `${pxToRem(16)} !important`,
      color: palette.common.white,
    },
    categoriesContainer: {
      overflow: "hidden",
      transition: "max-height 0.7s, opacity 1.3s",
      maxHeight: 0,
      opacity: 0,
    },

    categoriesContainerShow: {
      maxHeight: "500px", // Ajusta la altura máxima según tus necesidades
      opacity: 1,
    },
    containerItems: {
      display: "flex",
      justifyContent: "flex-start",
      padding: "5px",
    },
    itemsList: {
      color: palette.common.white,
    },
    icons: {
      fontSize: `${pxToRem(40)} !important`,
      color: palette.common.white,
    },
    Type: {
      height: pxToRem(40),
      width: "100%",
      color: palette.common.white,
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: pxToRem(5),
      fontSize: `${pxToRem(13)} !important`,
    },
    containerTitle: {
      display: "flex",
      flexDirection: "column",
    },
    containerItemOption: {
      color: "#c0cfc0",
      display: "flex",
      padding: `0 ${pxToRem(10)} ${pxToRem(10)} ${pxToRem(10)}`,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    containerSubTitle: {
      display: "flex",
      justifyContent: "space-between",
    },
    containerIncome: {
      background: lighten(palette.common.green, 0.2),
      borderRadius: `${pxToRem(0)} ${pxToRem(0)} ${pxToRem(10)} ${pxToRem(10)}`,
      paddingTop: pxToRem(5),
      transition: "background-color 0.6s ease",
    },
    containerExpense: {
      background: lighten(palette.common.red, 0.1),
      borderRadius: `${pxToRem(0)} ${pxToRem(0)} ${pxToRem(10)} ${pxToRem(10)}`,
      paddingTop: pxToRem(5),
      transition: "background-color 0.6s ease",
    },
    buttonIncome: {
      background: palette.common.green,
      width: "50%",
      borderRadius: 0,
      borderTopLeftRadius: pxToRem(10),
      color: palette.common.white,
      textAlign: "center",
      fontWeight: "700",
      transition: "background-color 0.6s ease, font-size 0.6s ease",
      "&:hover": {
        backgroundColor: lighten(palette.common.green, 0.2),
        fontSize: pxToRem(14),
      },
    },
    buttonExpense: {
      background: palette.common.red,
      width: "50%",
      borderRadius: 0,
      borderTopRightRadius: pxToRem(10),
      color: palette.common.white,
      textAlign: "center",
      fontWeight: "700",
      transition: "background-color 0.3s ease, font-size 0.3s ease",
      "&:hover": {
        backgroundColor: lighten(palette.common.red, 0.2),
        fontSize: pxToRem(14),
      },
    },
  };
});

export default Styles;
