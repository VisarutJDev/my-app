import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  typography: {
    fontFamily: "ThaiSansNeue",
    fontSize: 18
  },
  palette: {
    white_blue: "#f6f7fd",
    button_color: "#E3872D",
    primary: {
      light: "#839691",
      main: "#5a6965",
      dark: "#444f4c"
    },
    secondary: {
      light: "#4bb284",
      main: "#75b89a",
      dark: "#4d9776"
    },
    error: {
      main: "#d33043"
    },
    white: "#ffffff",
    snow: "#fafafa",
    white_smoke: "#f4f4f4",
    gainsboro: "#dddddd",
    gray: "#a3a3a3",
    dim_gray: "#8a8a8a",
    jet_black: "#434343",
    black: "#000000",
    hyperlink: "#5f9cc3",
    yello: {
      main: '#f4b800',
      dark: "#c39300"
    },
    orange: {
      main: '#e57d01',
      dark: "#b76401"
    },
    red: {
      main: "#cd3c57",
      dark: "#a43046"
    },
    pink: {
      main: "#b1296b",
      dark: "#8e2156"
    },
    purple: {
      main: "#9647a6",
      dark: "#783985"
    },
    blue: {
      main: "#3c69a9",
      dark: "#305487"
    },
    green: {
      main: "#1da47d",
      dark: "#178364"
    },
    light_green: {
      main: "#609a36",
      dark: "#4d7b2b"
    },
    dark_green: {
      main: "#40665d",
      dark: "#2f4b44"
    }
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
