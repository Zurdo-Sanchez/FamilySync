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
    form: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "400px",
      background: "white",
      borderRadius: "10px",
    },
    title: {
      textAlign: "center",
      padding: `0 0 ${pxToRem(20)} 0`,
      borderBottom: `${pxToRem(1)} solid silver`,
    },
    containerProvaiders: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    provaiders: {
      margin: pxToRem(0),

      color: "blue",
      cursor: "pointer",
    },
  };
});

export default Styles;
