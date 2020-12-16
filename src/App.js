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
import PublicRoute from "./Utils/PublicRoute";
import PrivateRoute from "./Utils/PublicRoute";

const tastings = [
  {
    id: 0,
    wineName: "Yacochuya",
    producer: "The Etcharts",
    varietal: "Malbec",
    vintage: "2007",
    region: "Salta Cafaye Valley",
    condition: "Clear",
    concentration: "Pale",
    colorRed: "Purple",
    rim: "No",
    extract: "Ligth",
    tearing: "Medium",
    gas: "Yes",
    conditionNose: "None",
    intensity: "Delicate",
    ageAssessment: "Youthful",
    fruitRed: "Tropical/Melon",
    sweetness: "Bone Dry",
    fruitFRed: "Red",
    nonFruit: "Vegetable, Spice ",
    earth: "Compost",
    mineral: "Wet Stone",
    tannins: "High",
    acidity: "Med+",
    alcohol: "Medium",
    complexity: "Med+",
    length: "Long",
    body: "Full",
    texture: "Creamy",
    comments: "Spectacular wine from Salta, deep red, complex and ripe fruits",
    woodAge: "Old",
    woodOrigin: "American",
    woodSize: "Large",
    score: "85-89",
  },
  {
    id: 1,
    wineName: "Poliziano",
    producer: "Federico Carletti",
    varietal: "Sangiovese",
    vintage: "2017",
    region: "Montepulciano",
    condition: "Hazy",
    concentration: "Medium",
    colorRed: "Ruby",
    rim: "Yes",
    extract: "Heavy",
    tearing: "Medium",
    gas: "Yes",
    conditionNose: "TCA",
    intensity: "Moderate",
    ageAssessment: "Vinous",
    fruitRed: "Black",
    sweetness: "Bone Dry",
    fruitFRed: "Black, Blue",
    nonFruit: "Animal",
    earth: "Mushrooms",
    mineral: "Limestone",
    tannins: "Low",
    acidity: "Medium",
    alcohol: "Med+",
    complexity: "High",
    length: "Short",
    body: "Ligth",
    texture: "Round",
    comments: "Spectacular wine from Italy",
    woodAge: "Old",
    woodOrigin: "American",
    woodSize: "Large",
    score: "95-100",
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
    this.state.getTastings();
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="app">
          <Route path="/" component={Nav} />
          <Route exact path="/" component={LandingPage} />
          <PublicRoute path="/signup" component={Signup} />
          <PublicRoute path="/login" component={Login} />
          <div className="main">
            <PublicRoute path="/tastings/add" component={AddTasting} />
            <PublicRoute path="/edittasting/:id" component={EditTasting} />
            <PublicRoute path="/home" component={Home} />
            <PublicRoute path="/dashboard" component={Dashboard} />
            <PublicRoute exact path="/tastings" component={TastingList} />
          </div>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
