import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as routes from "./routes";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={"d-flex flex-row vim-panel"}>
          <Switch>
            <Route  
              path="/login" 
              exact
              component = {routes.AsyncLogin}
            />
            <Route  
              path="/" 
              exact
              component = {routes.AsyncHome}
            />
          </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
