import Context from "../Context";
import React, { Component } from "react";
import TastingItem from "./TastingItem";

class TastingList extends Component {
  static contextType = Context;
  state = {
    filter: null,
    filterValue: "all",
  };
  render() {
    const tastings =
      this.state.filter && this.state.filterValue !== "all"
        ? this.context.tastings.filter(
            (t) => t[this.state.filter] === this.state.filterValue
          )
        : this.context.tastings;
    return (
      <section className="tasting-list">
        <h2>TASTINGS</h2>
        <section>
          <label>Filter By:</label>
          <select
            onChange={(e) =>
              this.setState({ filter: "vintage", filterValue: e.target.value })
            }
          >
            <option value="all">Show All</option>
            {[...new Set(this.context.tastings.map((t) => t.vintage))]
              .sort()
              .map((vintage) => (
                <option value={vintage}>{vintage}</option>
              ))}
          </select>
        </section>
        <ul className="ul-tasting-list" aria-live="polite">
          {tastings.map((tasting) => (
            <TastingItem {...tasting} />
          ))}
        </ul>
      </section>
    );
  }
}

export default TastingList;
