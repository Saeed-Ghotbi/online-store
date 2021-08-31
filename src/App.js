import React from "react";
import "./css/App.scss";
import Home from "./page/home";
import Shop from "./page/shop";
import DetailsShop from "./page/details-shop";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: ["irfont", "Roboto"],
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
