import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
import DeleteButton from "../DeleteButton/DeleteButton";
import "../../App/App.css";

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
      colorrose,
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
      <li className="tasting-item" key={this.props.id}>
        <div
          className="tastinng-item-content"
          onClick={() => this.setState({ opened: !this.state.opened })}
        >
          <section className="unexpanded">
            <h2 className="winename">{winename}</h2>
          </section>
          {this.state.opened && (
            <section className="tasting-item-expanded">
              <div className="wine-profile">
                <h3 className="sense">Wine Profile</h3>
                <p>{varietal}</p>
                <p>{producer}</p>
                <p>{vintage}</p>
                <p>{region}</p>
              </div>
              <div className="wine-sigth">
                <h3 className="sense">Sigth</h3>
                <p>{condition}</p>
                <p>{concentration}</p>
                <p>{colorred || ""}</p>
                <p>{colorwhite || ""}</p>
                <p>{colorrose || ""}</p>
                <p>{rim}</p>
                <p>{extract}</p>
                <p>{tearing}</p>
                <p>{gas}</p>
              </div>
              <div className="wine-nose">
                <h3 className="sense">Nose</h3>
                <p>{conditionnose}</p>
                <p>{intensity}</p>
                <p>{ageassessment}</p>
                <p>{fruitred || ""}</p>
                <p>{fruitwhite || ""}</p>
                <p>{fruitrose || ""}</p>
              </div>
              <div className="wine-palate">
                <h3 className="sense">Palate</h3>
                <p>{sweetness}</p>
                <p>{fruitfred || ""}</p>
                <p>{fruitfwhite || ""}</p>
                <p>{fruitfrose || ""}</p>
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
              <div className="wine-comments">
                <h3 className="sense">Conclusion</h3>
                <p>{woodage}</p>
                <p>{woodorigin}</p>
                <p>{woodsize}</p>
                <p>{comments}</p>
                <p>{score}</p>
              </div>
              <div className="tasting-item-buttons">
                <Link to={`/edittasting/${this.props.id}`}>
                  <button className="edit-tasting">Edit</button>
                </Link>
                <DeleteButton
                  key={TastingItem}
                  id={this.props.id}
                  history={this.props.history}
                />
              </div>
            </section>
          )}
        </div>
      </li>
    );
  }
}
