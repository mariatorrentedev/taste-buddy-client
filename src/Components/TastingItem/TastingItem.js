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
                <p>
                  <i className="fas fa-seedling"></i>
                  {varietal}
                </p>
                <p>
                  <i className="fab fa-product-hunt"></i>
                  {producer}
                </p>
                <p>
                  <i className="fas fa-vote-yea"></i>
                  {vintage}
                </p>
                <p>
                  <i className="fas fa-globe-americas"></i> {region}
                </p>
              </div>
              <div className="wine-sigth">
                <h3 className="sense">Sight</h3>
                <p>
                  <i className="fas fa-fan"></i>
                  {condition}
                </p>
                <p>
                  <i className="fas fa-adjust"></i>
                  {concentration}
                </p>
                <p>
                  <i className="fas fa-palette"></i>
                  {colorred || ""} {colorwhite || ""} {colorrose || ""}
                </p>
                <p>
                  <i className="fas fa-wine-glass-alt"></i>
                  {rim.toString()}
                </p>
                <p>
                  <i className="fab fa-mixer"></i>
                  {extract}
                </p>
                <p>
                  <i className="fas fa-tint"></i>
                  {tearing}
                </p>
                <p>
                  <i className="fas fa-burn"></i>
                  {gas.toString()}
                </p>
              </div>
              <div className="wine-nose">
                <h3 className="sense">Nose</h3>
                <p>
                  <i className="fas fa-hand-sparkles"></i> {conditionnose}
                </p>
                <p>
                  <i className="fas fa-signal"></i> {intensity}
                </p>
                <p>
                  <i className="fas fa-clock"> </i> {ageassessment}
                </p>
                <p>
                  <i className="fab fa-apple"></i>
                  {fruitred || ""} {fruitwhite || ""} {fruitrose || ""}
                </p>
              </div>
              <div className="wine-palate">
                <h3 className="sense">Palate</h3>
                <p>
                  <i className="fas fa-candy-cane" /> {sweetness}
                </p>
                <p>
                  <i className="fas fa-lemon" />
                  {fruitfred || ""} {fruitfwhite || ""} {fruitfrose || ""}
                </p>
                <p>
                  <i className="fas fa-pepper-hot" /> {nonfruit}
                </p>
                <p>
                  <i className="fas fa-mountain" /> {earth}
                </p>
                <p>
                  <i className="fas fa-spa" /> {mineral}
                </p>
                <p>
                  <i className="fas fa-certificate" /> {tannins}
                </p>
                <p>
                  <i className="far fa-lemon" /> {acidity}
                </p>
                <p>
                  <i className="fas fa-wine-bottle" /> {alcohol}
                </p>
                <p>
                  <i className="fab fa-creative-commons-remix" /> {complexity}
                </p>
                <p>
                  <i className="fas fa-ruler" /> {length}
                </p>
                <p>
                  <i className="fas fa-child" /> {body}
                </p>
                <p>
                  <i className="fas fa-align-center" /> {texture}
                </p>
              </div>
              <div className="wine-comments">
                <h3 className="sense">Conclusion</h3>
                <p>
                  <i className="fas fa-tree" /> {woodage} | {woodorigin} |
                  {woodsize}
                </p>
                <p>
                  <i className="fas fa-pen-square" /> {comments}
                </p>
                <p>
                  <i className="fas fa-star" /> {score}
                </p>
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
