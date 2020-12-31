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
        <div className="group">
          <div className="item">
            <img src="/Images/dash-tastings.png" alt="tasting sheets" />
            <h3>Total TasteBuddy Sheets</h3>
            <p>
              You've done <strong>{tastings.length}</strong> tastings
            </p>
          </div>
          <div className="item">
            <img src="/Images/dash-score.png" alt="wine profile" />
            <h3>Your average score</h3>
            <p>
              <strong>{Math.round(Number(avgScore))}</strong> points UP
            </p>
          </div>
          <div className="item">
            <img src="/Images/dash-varietal.png" alt="wine profile" />
            <h3>Common varietals</h3>
            <p>
              <i>{uniqueVarietals.sort().join(", ")}</i>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Dashboard;
