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
                <p>{varietal}</p>
                <p>{producer}</p>
                <p>{vintage}</p>
                <p>{region}</p>
              </div>
              <div className="wine-sigth">
                <p>{condition}</p>
                <p>{concentration}</p>
                <p>{colorRed}</p>
                <p>{rim}</p>
                <p>{extract}</p>
                <p>{tearing}</p>
                <p>{gas}</p>
              </div>
              <div className="wine-nose">
                <p>{conditionNose}</p>
                <p>{intensity}</p>
                <p>{ageAssessment}</p>
                <p>{fruitRed}</p>
              </div>
              <div className="wine-palate">
                <p>{sweetness}</p>
                <p>{fruitFRed}</p>
                <p>{nonFruit}</p>
                <p>{earth}</p>
                <p>{mineral}</p>
                <p>{tannins}</p>
                <p>{acidity}</p>
                <p>{alcohol}</p>
                <p>{complexity}</p>
                <p>{length}</p>
                <p>{body}</p>
                <p>{texture}</p>
              </div>
              <div className="conclusion">
                <p>{woodAge}</p>
                <p>{woodOrigin}</p>
                <p>{woodSize}</p>
                <p>{comments}</p>
                <p>{score}</p>
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
