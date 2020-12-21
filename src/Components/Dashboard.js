import React, { Component } from "react";
import Context from "../Context";

class Dashboard extends Component {
  static contextType = Context;
  state = {};
  render() {
    let { tastings = [] } = this.context;
    let avgScore = tastings.map((t) => t.score / t.length);
    return (
      <div className="dashboard">
        <section>
          <h2>TasteBuddy Summary</h2>
          <div className="flex">
            <h3>Total TasteBuddy Sheets</h3>
            <p>You've done {tastings.length} tasting</p>
            <h3>Your average score</h3>
            <p>{Number(avgScore)} points UP</p>
            <h3>Common varietals</h3>
            {/*Map tastings arr and then tastings.varietals take the top 3 varietals that are repeat by user*/}
            <p>Malbec, Pinot Noir, Torrontes.</p>
          </div>
        </section>
      </div>
    );
  }
}
export default Dashboard;
