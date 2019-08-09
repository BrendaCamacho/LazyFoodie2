import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
// import "App.css";
// import ".App.css"
import "./App.css"
import Login from "./LoginComponents/Login";
import Register from "./LoginComponents/Register";
require("./App.css")


class App extends Component {
  render() {

    return (
      <Router>
      <div>
        <Nav/>
        <Switch>
          
          <Route exact path="/" component={Search} />
          <Route path="/saved" component={Saved} /> 
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch> 
      </div>
    </Router>
    );
  }
}

export default App;