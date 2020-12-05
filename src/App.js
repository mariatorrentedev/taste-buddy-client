import React, { Component } from "react";
import { Route } from "react-router-dom";
import Nav from "./Components/Nav";
class App extends Component {
  state = {
    tastings: [],
  };

  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
      </div>
    );
  }
}

export default App;
