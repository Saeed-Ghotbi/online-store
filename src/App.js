import React from "react";
import "./sass/App.scss";
import Home from "./page/home";
import Shop from "./page/shop";
import DetailsShop from "./page/details-shop";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

let theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: ["irfont", "Roboto"],
    h1: {
      color: ["#3E206D"],
    },
    h2: {
      color: ["#3E206D"],
    },
    h3: {
      color: ["#3E206D"],
    },
    h4: {
      color: ["#3E206D"],
    },
    h5: {
      color: ["#3E206D"],
    },
    h6: {
      color: ["#3E206D"],
      padding: 10,
    },
    body1: {
      color: ["#3E206D"],
    },
  },
});
theme = responsiveFontSizes(theme);
// theme.typography.h3 = {
//   fontSize: "1.2rem",
//   "@media (min-width:600px)": {
//     fontSize: "1.5rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "2rem",
//   },
// };
function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/details">
              <DetailsShop />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
