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
        <h2>
          Viewing {this.context.tastings.length} wine tasting sheets during X
          amount of time.
        </h2>
        <section className="input-search">
          <input
            type="text"
            id="search-term"
            onChange={(e) =>
              this.setState({ filter: "wineName", filterValue: e.target.value })
            }
          ></input>
          <input
            type="submit"
            onClick={[
              ...new Set(this.context.tastings.map((t) => t.wineName)),
            ].map((wineName) => wineName)}
          ></input>
        </section>
        <div className="all-filters">
          <section className="varietal-filter">
            <label>Varietal:</label>
            <select
              onChange={(e) =>
                this.setState({
                  filter: "varietal",
                  filterValue: e.target.value,
                })
              }
            >
              <option value="all">All</option>
              {[...new Set(this.context.tastings.map((t) => t.varietal))].map(
                (varietal) => (
                  <option value={varietal}>{varietal}</option>
                )
              )}
            </select>
          </section>
          <section className="vintage-filter">
            <label>Vintage:</label>
            <select
              onChange={(e) =>
                this.setState({
                  filter: "vintage",
                  filterValue: e.target.value,
                })
              }
            >
              <option value="all">All</option>
              {[...new Set(this.context.tastings.map((t) => t.vintage))]
                .sort()
                .map((vintage) => (
                  <option value={vintage}>{vintage}</option>
                ))}
            </select>
          </section>
          <section className="score-filter">
            <label>Score:</label>
            <select
              onChange={(e) =>
                this.setState({
                  filter: "score",
                  filterValue: e.target.value,
                })
              }
            >
              <option value="all">All</option>
              {[...new Set(this.context.tastings.map((t) => t.score))]
                .sort()
                .map((score) => (
                  <option value={score}>{score}</option>
                ))}
            </select>
          </section>
        </div>
        <ul className="ul-tasting-list" aria-live="polite">
          {tastings.map((tasting) => (
            <TastingItem
              key={tasting.id}
              {...tasting}
              deleteTasting={this.context.deleteTasting}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default TastingList;
