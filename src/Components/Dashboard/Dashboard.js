import React, { Component } from "react";
import Context from "../../Context";

class Dashboard extends Component {
  static contextType = Context;
  render() {
    let { tastings = [] } = this.context;
    // Avg score.
    let scores = tastings.map(({ score }) => score);
    const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length || 0;
    // Most common varietals.
    let varietals = tastings.map(({ varietal }) => varietal);
    // Getting Non-repeat varietals.
    let uniqueVarietals = varietals.filter((x, i, a) => a.indexOf(x) === i);

    return (
      <section className="dashboard">
        <h2>TasteBuddy Summary</h2>
        <div className="flex">
          <h3>Total TasteBuddy Sheets</h3>
          <p>
            You've done <strong>{tastings.length}</strong> tastings
          </p>
          <h3>Your average score</h3>
          <p>
            <strong>{Math.round(Number(avgScore)).toFixed(2)}</strong> points UP
          </p>
          <h3>Common varietals</h3>
          <i>{uniqueVarietals.sort().join(", ")}</i>
        </div>
      </section>
    );
  }
}
export default Dashboard;
