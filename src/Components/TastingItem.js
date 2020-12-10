import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

export default class TastingItem extends React.Component {
  state = {
    opened: false,
  };

  static defaultProps = {
    wineName: "",
    wineUrl: "",
    producer: "",
    varietal: "",
    vintage: "vintage",
  };
  render() {
    const { wineName, wineUrl, producer, varietal } = this.props;
    return (
      <li className="tasting-item">
        <div
          className="tasting-item-content"
          onClick={() => this.setState({ opened: !this.state.opened })}
        >
          <h3 className="tasting-item-wineName">{wineName}</h3>
          {this.state.opened && (
            <p>
              {wineUrl}, {varietal}, {producer}
            </p>
          )}
        </div>
        <div className="tasting-item-buttons">
          <button className="edit-tasting">Edit</button>
          <button
            className="delete-tasting"
            //onClick={() => onClickDelete(id)}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
}

TastingItem.defaultProps = {
  onClickDelete: () => {},
};
