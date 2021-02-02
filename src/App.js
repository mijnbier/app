import React, { useState } from "react";
import Home from "./Pages/Home";
import BeerDetail from "./Pages/BeerDetail";
import AddBeer from "./Pages/AddBeer";
import Mixit from "./Pages/Mixit";
import BeerLocations from "./Pages/BeerLocations";
import BeerStatistics from "./Pages/BeerStatistics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import BeerAppBar from "./Components/BeerAppBar";
import Login from "./Components/Login";

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
  const [token, setToken] = useState();

  if(!token) {
    return (
    <>
    <Login setToken={setToken} />
    <Router>
      <Switch>
      <Route path="/mixit" children={<Mixit/>} />
      </Switch>
    </Router>
    </>)
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <BeerAppBar></BeerAppBar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add-beer" children={<AddBeer/>} />
            <Route path="/mixit" children={<Mixit/>} />
            <Route path="/beer-locations" children={<BeerLocations/>} />
            <Route path="/beer-statistics" children={<BeerStatistics/>} />
            <Route path="/:id" children={<BeerDetail />} />
          </Switch>
      </Router>
    </ThemeProvider>
  );
}
