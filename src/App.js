import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Story from "./story/story";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../src/other-routes/about";
import fire from "./fire";
import Login from "./user-authenication/login";
import Home from "./user-authenication/home";
import View from "./view/view";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="custom-padding">
          <nav>
            <div className="logo">Story</div>

            <ul className="menu-area">
              <li>
                <a href="/story">Write a story</a>
              </li>
              <li>
                <a href="/view">View stories</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/sign-in">Sign-out</a>
              </li>
            </ul>
          </nav>
        </div>
        <Router>
          <Route exact path="/about" component={About} />
          <Route exact path="/story" component={Story} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/view" component={View} />
        </Router>
      </div>
    );
  }
}

export default App;
