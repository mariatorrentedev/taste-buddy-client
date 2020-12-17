import React, { Component } from "react";
import config from "../config";
import Context from "../Context";
import tokenService from "../services/token-service";

export default class DeleteButton extends Component {
  static contextType = Context;

  handleDelete = (e) => {
    e.preventDefault();
    const id = this.props.id;
    fetch(`${config.API_BASE_URL}/tastings/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${tokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
      })
      .then((res) => {
        this.context.deleteTasting(id);
        this.props.history.push("/tastings");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="DeleteBtn">
        <button onClick={(e) => this.handleDelete(e)}>Delete</button>
      </div>
    );
  }
}
