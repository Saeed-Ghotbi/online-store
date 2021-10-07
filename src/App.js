import React from "react";
import "./sass/App.scss";
import Home from "./page/home";
import Shop from "./page/shop";
import DetailsShop from "./page/details-shop";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

let theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: ["irfont", "Roboto"],
    h1: {
      color: ["#3E206D"],
      fontFamily: ["irfontbold"],
      fontSize: "1.375rem", //22px
      "@media (min-width:600px)": {
        fontSize: "1.625rem", //26px
      },
    },
    h2: {
      color: ["#3E206D"],
      fontFamily: ["irfontbold"],
      fontSize: "1.25rem", //20px
      "@media (min-width:600px)": {
        fontSize: "1.5rem", //24px
      },
    },
    h3: {
      color: ["#3E206D"],
      fontFamily: ["irfontbold"],
      fontSize: "1.125rem", //18px
      "@media (min-width:600px)": {
        fontSize: "1.375rem", //22px
      },
    },
    h4: {
      color: ["#3E206D"],
      fontFamily: ["irfontbold"],
      fontSize: "1rem", //16px
      "@media (min-width:600px)": {
        fontSize: "1.25rem", //20px
      },
    },
    h5: {
      color: ["#000"],
      fontFamily: ["irfontbold"],
      fontSize: "0.875rem", //14px
      "@media (min-width:600px)": {
        fontSize: "1.125rem", //18px
      },
    },
    h6: {
      color: ["#3E206D"],
      fontSize: "0.75rem", //12px
      "@media (min-width:600px)": {
        fontSize: "1rem", //16px
      },
    },
    body: {
      color: ["#666"],
      fontSize: "0.625rem", ////10px
      "@media (min-width:600px)": {
        fontSize: "0.875", //14px
      },
    },
    subtitle1: {
      color: ["#3E206D"],
      fontFamily: ["irfontlight"],
      fontSize: "0.5rem", ////8px
      "@media (min-width:600px)": {
        fontSize: "0.625rem", //10px
      },
    },
  },
});

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
