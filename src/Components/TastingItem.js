import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import DeleteButton from "./DeleteButton";

export default class TastingItem extends React.Component {
  static contextType = Context;
  state = {
    opened: false,
  };
  static defaultProps = {
    //Profile
    wineName: "",
    producer: "",
    varietal: "",
    vintage: "",
    region: "",
    //Sigth
    condition: "",
    concentration: "",
    colorRed: "",
    colorWhite: "",
    colorRose: "",
    rim: "",
    extract: "",
    tearing: "",
    gas: "",
    //Nose
    conditionNose: "",
    intensity: "",
    ageAssessment: "",
    fruitRed: "",
    fruitWhite: "",
    fruitRose: "",
    //Palate
    sweetnesss: "",
    fruitFRed: "",
    fruitFWhite: "",
    fruitFRose: "",
    nonFruitF: "",
    earth: "",
    mineral: "",
    woodAge: "",
    woodSize: "",
    woodOrigin: "",
    tannins: "",
    acidity: "",
    alcohol: "",
    complexity: "",
    length: "",
    body: "",
    texture: "",
    //Conclusion
    comments: "",
    woodAge: "",
    woodSize: "",
    woodOrigin: "",
    score: "",
  };
  render() {
    const {
      wineName,
      producer,
      varietal,
      vintage,
      region,
      condition,
      concentration,
      colorRed,
      colorWhite,
      colorRose,
      rim,
      extract,
      tearing,
      gas,
      conditionNose,
      intensity,
      ageAssessment,
      fruitRed,
      fruitWhite,
      fruitRose,
      sweetness,
      fruitFRed,
      fruitFWhite,
      fruitFRose,
      nonFruit,
      earth,
      mineral,
      tannins,
      acidity,
      alcohol,
      complexity,
      length,
      body,
      texture,
      woodAge,
      woodSize,
      woodOrigin,
      comments,
      score,
    } = this.props;

    return (
      <li className="tasting-item">
        <div
          className="tasting-item-content"
          onClick={() => this.setState({ opened: !this.state.opened })}
        >
          <h2 className="tasting-item-wineName">{wineName}</h2>
          {this.state.opened && (
            <section className="tasting-item-expanded">
              <div className="wine-profile">
                <li>{varietal}</li>
                <li>{producer}</li>
                <li>{vintage}</li>
                <li>{region}</li>
              </div>
              <div className="wine-sigth">
                <li>{condition}</li>
                <li>{concentration}</li>
                <li>{colorRed}</li>
                <li>{rim}</li>
                <li>{extract}</li>
                <li>{tearing}</li>
                <li>{gas}</li>
              </div>
              <div className="wine-nose">
                <li>{conditionNose}</li>
                <li>{intensity}</li>
                <li>{ageAssessment}</li>
                <li>{fruitRed}</li>
              </div>
              <div className="wine-palate">
                <li>{sweetness}</li>
                <li>{fruitFRed}</li>
                <li>{nonFruit}</li>
                <li>{earth}</li>
                <li>{mineral}</li>
                <li>{tannins}</li>
                <li>{acidity}</li>
                <li>{alcohol}</li>
                <li>{complexity}</li>
                <li>{length}</li>
                <li>{body}</li>
                <li>{texture}</li>
              </div>
              <div className="conclusion">
                <li>{woodAge}</li>
                <li>{woodOrigin}</li>
                <li>{woodSize}</li>
                <li>{comments}</li>
                <li>{score}</li>
              </div>
            </section>
          )}
        </div>
        <div className="tasting-item-buttons">
          <Link to={`/edittasting/${this.props.id}`}>
            <button className="edit-tasting">Edit</button>
          </Link>
          <DeleteButton id={this.props.id} history={this.props.history} />
        </div>
      </li>
    );
  }
}
