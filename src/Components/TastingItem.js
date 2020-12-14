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
    wineName: "",
    producer: "",
    varietal: "",
    vintage: "",
    score: "",
  };
  render() {
    const { wineName, producer, varietal, score } = this.props;

    return (
      <li className="tasting-item">
        <div
          className="tasting-item-content"
          onClick={() => this.setState({ opened: !this.state.opened })}
        >
          <h2 className="tasting-item-wineName">{wineName}</h2>
          {this.state.opened && (
            <section className="tasting-item-expanded">
              <li>{varietal}</li>
              <li>{producer}</li>
              <li>{score}</li>
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
