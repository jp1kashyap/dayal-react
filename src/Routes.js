import './Routes.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./HomeComponent/Home";
import React from "react";

function Routes() {
  return (
      <Router>
          <Route exact={true} path={"/"} component={Home}/>
      </Router>
  );
}

export default Routes;
