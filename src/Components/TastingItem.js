import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import DeleteButton from "./DeleteButton";

export default class TastingItem extends Component {
  static contextType = Context;
  state = {
    opened: false,
  };

  render() {
    const {
      winename,
      producer,
      varietal,
      vintage,
      region,
      condition,
      concentration,
      colorred,
      colorwhite,
      colorose,
      rim,
      extract,
      tearing,
      gas,
      conditionnose,
      intensity,
      ageassessment,
      fruitred,
      fruitwhite,
      fruitrose,
      sweetness,
      fruitfred,
      fruitfwhite,
      fruitfrose,
      nonfruit,
      earth,
      mineral,
      tannins,
      acidity,
      alcohol,
      complexity,
      length,
      body,
      texture,
      woodage,
      woodsize,
      woodorigin,
      comments,
      score,
    } = this.props;

    return (
      <li className="tasting-item" key="{tasting.id}">
        <div
          className="tasting-item-content"
          onClick={() => this.setState({ opened: !this.state.opened })}
        >
          <h2 className="tasting-item-wineName">{winename}</h2>
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
                <p>{colorred}</p>
                <p>{rim}</p>
                <p>{extract}</p>
                <p>{tearing}</p>
                <p>{gas}</p>
              </div>
              <div className="wine-nose">
                <p>{conditionnose}</p>
                <p>{intensity}</p>
                <p>{ageassessment}</p>
                <p>{fruitred}</p>
              </div>
              <div className="wine-palate">
                <p>{sweetness}</p>
                <p>{fruitfred}</p>
                <p>{nonfruit}</p>
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
                <p>{woodage}</p>
                <p>{woodorigin}</p>
                <p>{woodsize}</p>
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
