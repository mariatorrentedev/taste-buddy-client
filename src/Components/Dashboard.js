import React, { Component } from "react";
import Context from "../Context";

class Dashboard extends Component {
  static contextType = Context;
  state = {};
  render() {
    let { tastings = [] } = this.context;
    // Average Score per user
    let scores = tastings.map(({ score }) => score);
    const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    // Most common varietals
    let varietals = tastings.map(({ varietal }) => varietal);
    let uniqueVarietals = varietals.filter((x, i, a) => a.indexOf(x) == i);

    return (
      <div className="dashboard">
        <section>
          <h2>TasteBuddy Summary</h2>
          <div className="flex">
            <h3>Total TasteBuddy Sheets</h3>
            <p>
              You've done <strong>{tastings.length}</strong> tastings
            </p>
            <h3>Your average score</h3>
            <p>
              <strong>{Number(avgScore)}</strong> points UP
            </p>
            <h3>Common varietals</h3>
            <p>{uniqueVarietals.join(" ")}</p>
          </div>
        </section>
      </div>
    );
  }
}
export default Dashboard;
