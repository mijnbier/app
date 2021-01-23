import React from "react";
import Home from "./Pages/Home";
import BeerDetail from "./Pages/BeerDetail";
import AddBeer from "./Pages/AddBeer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import BeerAppBar from "./Components/BeerAppBar";

const theme = createMuiTheme({
  props: {
    MuiTextField: {
      variant: "outlined"
    },
  },
  palette:{
    secondary:{
      main: "#006400"
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <BeerAppBar></BeerAppBar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add-beer" children={<AddBeer />} />
            <Route path="/:id" children={<BeerDetail />} />
          </Switch>
      </Router>
    </ThemeProvider>
  );
}
