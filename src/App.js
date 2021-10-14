import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Info from "./components/Pages/Info";
import Memes from "./components/Pages/Memes";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Info} />
          <Route path="/info" exact component={Info} />
          <Route path="/memes" exact component={Memes} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
