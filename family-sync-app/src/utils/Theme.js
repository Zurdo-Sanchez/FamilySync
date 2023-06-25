import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c0cfc0",
    },
    secondary: {
      main: "#aa6a54",
    },

    dark: {
      main: "#869086",
    },
    common: {
      white: "#FFFFFF",
      black: "#000",
    },
    background: {
      main: "linear-gradient(150deg, #6c3483, #58d68d)",
      navBar: "#000",
    },
    button: {
      primary: "#FFFFF",
      border: "#FFFFF",
    },
  },

  typography: {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontWeightRegular: "400",
    pxToRem: (size) => `${size / 16}rem`,
  },

  textColor: {
    primary: "rgba(0, 0, 0, 0.87)",

    secondary: "rgba(0, 0, 0, 0.6)",

    disabled: "rgba(0, 0, 0, 0.38)",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1366,
      xl: 1680,
    },
  },

  spaces: {
    spacing: 4, // Ajusta el valor del espaciado según tus necesidades
  },
});

export default theme;
