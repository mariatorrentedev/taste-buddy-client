import React, { Component } from "react";
import { Route } from "react-router-dom";
import config from "./config";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Login/Login";
import Signup from "./Components/Singup/Signup";
import LandingPage from "./Components/LandingPage/LadingPage";
import AddTasting from "./Components/AddTasting/AddTasting";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import TastingList from "./Components/TastingList/TastingList";
import Context from "./Context";
import EditTasting from "./Components/EditTasting/EditTasting";
import PrivateRoute from "./Utils/PrivateRoute";
import tokenService from "./services/token-service";

class App extends Component {
  state = {
    user: {},
    tastings: [],
    error: null,
    setTastings: (tastings) => {
      this.setState({
        tastings,
        error: null,
      });
    },
    deleteTasting: (id) => {
      this.setState({
        tastings: this.state.tastings.filter((tasting) => tasting.id !== id),
      });
    },
    addTasting: (newTasting) => {
      this.setState({
        tastings: [...this.state.tastings, newTasting],
      });
    },
    updateTasting: (newTasting, id) => {
      this.setState({
        tastings: this.state.tastings.map((t) => {
          if (t.id === id) {
            return newTasting;
          }
          return t;
        }),
      });
    },
    getTastings: () => {
      fetch(`${config.API_BASE_URL}/tastings`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${tokenService.getAuthToken()}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then(this.state.setTastings)
        .catch((error) => this.setState({ error }));
    },
    logout: () => {
      return this.setState({ tastings: [] });
    },
  };

  componentDidMount() {
    if (tokenService.hasAuthToken()) {
      this.state.getTastings();
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="app">
          <Route path="/" component={Nav} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <div className="main">
            <PrivateRoute path="/tastings/add" component={AddTasting} />
            <PrivateRoute path="/edittasting/:id" component={EditTasting} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/tastings" component={TastingList} />
          </div>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
