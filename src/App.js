import React from "react";
import Home from "./Pages/Home";
import BeerDetail from "./Pages/BeerDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id" children={<BeerDetail />} />
        </Switch>
      </div>
    </Router>
  );
}
