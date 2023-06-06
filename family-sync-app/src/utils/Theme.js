import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    button: {
      primary: "#FFFFF",
    },
  },
  typography: {
    fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    htmlFontSize: 16,
    fontSize: 18,
    fontWeightRegular: "400",
    pxToRem: (size) => `${size / 16}rem`,
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
});

export default theme;
