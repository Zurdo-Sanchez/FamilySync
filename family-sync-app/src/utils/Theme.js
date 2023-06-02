import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      backgroundGray: "#D9E0E7",
      roseColor: "#e91e63",
      grayColor: "#D9E0E7",
      inputBackground: "#F5F7FA",
      flashCard: "#F9EAC8",
      disabled: "#C8C8C8",
      shadow: "#7C909940",
      connectBlue: "#4B8B94",
      available: "#7FAB22",
      check: "#B6C1CC",
      yellow: "#f7e9c9",
      lightBlue: "#e6f9f7",
      purple: "#e8dafc",
      green: "#e3eec4",
      blue: "#ddecf6",
      gray: "#eaeff4",
      strongGray: "#7A8E94",
      select: "#BBB",
      darkGrey: "#0000004D",
      lightYellow: "#F5E7C6",
      darkYellow: "#EFBA45",
      borderColor: "#D7DAE2",
      darkGray: "#284B54",
      grayishGreen: "#4E5E65",
      grayishGreenIcons: "#727272",
      lightGrayBorders: "#B6C1CCBA",
      white: "#ffffff",
      grayIcon: "#B9B9B9",
      background: "#F8F8F8",
      border: "#E2E2E2",
      warningBackground: "#FDF0E6",
      warningText: "#643209",
      backgroundIconEdit: "#505050",
    },
    primary: {
      main: "#052D30",
      light: "#4B8B94",
      hover: "#153B40",
      lightHover: "#4D9CA4",
      line: "#294B54",
      border: "#3b626c",
    },
    secondary: {
      main: "#E5AA25",
      light: "#EFBD4F",
      line: "#294B54",
      hover: "#F7E9C9",
    },
    error: {
      main: "#EA2F41",
      light: "rgba(234,47,65,0.3)",
    },
    warning: {
      main: "#F5F7FA",
    },
    info: {
      main: "#00acc1",
    },
    success: {
      main: "#A0CE3C",
    },
    text: {
      primary: "#052D30",
      title: "#585858",
      secondary: "#7C9099",
      SubtitleGray: "#8B8B8B",
      buttonGray: "#898989",
    },
    background: {
      main: "#F5F7FA",
      gray: "#EBEDF0",
      buttonGray: "#E0E0E0",
    },
  },
  typography: {
    fontFamily: "circe-regular",
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
