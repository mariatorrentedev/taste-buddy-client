import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import config from "./config";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import LandingPage from "./Components/LadingPage";
import AddTasting from "./Components/AddTasting";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import TastingList from "./Components/TastingList";

import Context from "./Context";
import EditTasting from "./Components/EditTasting";

const tastings = [
  {
    id: 0,
    wineName: "Yacochuya",
    wineUrl: "http://www.google.com",
    producer: "The Etcharts",
    varietal: "Malbec",
    vintage: "2007",
    score: "85-89",
  },
  {
    id: 1,
    wineName: "Poliziano",
    wineUrl: "http://www.google.com",
    producer: "Federico Carletti",
    varietal: "Sangiovese",
    vintage: "2017",
    score: "95-100",
  },
  {
    id: 2,
    wineName: "La Vieille Julienne",
    wineUrl: "http://www.google.com",
    producer: "Jean-Paul Daumen",
    varietal: "Grenache, Syrah, Counoise, Cinsault, Mourvedre",
    vintage: "2016",
    score: "90-94",
  },
];

class App extends Component {
  state = {
    tastings,
    error: null,
    setTastings: (tastings) => {
      this.setState({
        tastings,
        error: null,
      });
    },
    deleteTasting: (id) => {
      return this.setState({
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
      fetch(config.API_BASE_URL, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${config.API_KEY}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then(this.setTastings)
        .catch((error) => this.setState({ error }));
    },
  };

  componentDidMount() {
    // getTastings();
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="app">
          <Route path="/" component={Nav} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <div className="main">
            <Route path="/tastings/add" component={AddTasting} />
            <Route path="/edittasting/:id" component={EditTasting} />
            <Route path="/home" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/tastings" component={TastingList} />
          </div>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
