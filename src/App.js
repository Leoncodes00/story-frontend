import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./home/homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/signout" />
        <Route exact path="/signin" />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/story" />
      </Router>
    </div>
  );
}

export default App;
