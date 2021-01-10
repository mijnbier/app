import React from "react";
import Home from "./Pages/Home";
import BeerDetail from "./Pages/BeerDetail";
import EditBeer from "./Pages/EditBeer";
import AddBeer from "./Pages/AddBeer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add-beer" children={<AddBeer />} />
            <Route path="/edit-beer/:id" children={<EditBeer />} />
            <Route path="/:id" children={<BeerDetail />} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
