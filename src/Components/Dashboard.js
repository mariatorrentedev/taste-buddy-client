import React, { Component } from "react";
import Context from "../Context";

class Dashboard extends Component {
  static contextType = Context;
  state = {};
  render() {
    return (
      <div className="dashboard">
        <section>
          <h2>TasteBuddy Summary</h2>
          <div className="flex">
            <h3>Total TasteBuddy Sheets</h3>
            <p>You've done {this.context.tastings.length} tasting</p>
            <h3>Your average score</h3>
            <p> points UP</p>
            <h3>Common varietals</h3>
            <p>Malbec, Pinot Noir, Torrontes.</p>
          </div>
        </section>
      </div>
    );
  }
}
export default Dashboard;
