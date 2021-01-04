import Context from "../../Context";
import React, { Component } from "react";
import TastingItem from "../TastingItem/TastingItem";

class TastingList extends Component {
  static contextType = Context;
  state = {
    filter: {
      winename: "",
    },
    filterValue: "all",
  };

  setFilter = (key, value) => {
    this.setState({
      filter: { ...this.state.filter, [key]: value },
    });
  };

  filterTastings = () => {
    let { tastings = [] } = this.context;
    let { filter } = this.state;

    if (filter.winename !== "") {
      tastings = tastings.filter((t) =>
        t.winename.toLowerCase().includes(filter.winename.toLowerCase())
      );
    }

    if (filter.varietal && filter.varietal !== "all") {
      tastings = tastings.filter((t) => t.varietal === filter.varietal);
    }
    if (filter.vintage && filter.vintage !== "all") {
      tastings = tastings.filter((t) => t.vintage === filter.vintage);
    }
    if (filter.score && filter.score !== "all") {
      tastings = tastings.filter((t) => t.score === filter.score);
    }
    return tastings;
  };

  render() {
    const tastings = this.filterTastings();

    return (
      <section className="tasting-list">
        <h2>Viewing {this.context.tastings.length} wine tasting sheets</h2>
        <section className="input-search">
          <input
            type="text"
            id="search-term"
            placeholder="Wine name search..."
            onChange={(e) => this.setFilter("winename", e.target.value)}
          ></input>
        </section>
        <div className="filters">
          <section className="varietal-filter">
            <img src="Images/varietal.png" alt="varietal" />
            <select
              onChange={(e) => this.setFilter("varietal", e.target.value)}
            >
              <option value="all">All Varietals</option>
              {[...new Set(this.context.tastings.map((t) => t.varietal))].map(
                (varietal, i) => (
                  <option key={i} value={varietal}>
                    {varietal}
                  </option>
                )
              )}
            </select>
          </section>
          <section className="vintage-filter">
            <img src="Images/vintage.png" alt="vintage" />
            <select
              onChange={(e) =>
                this.setFilter("vintage", Number(e.target.value))
              }
            >
              <option value="all">All Vintages</option>
              {[...new Set(this.context.tastings.map((t) => t.vintage))]
                .sort()
                .map((vintage, i) => (
                  <option key={i} value={vintage}>
                    {vintage}
                  </option>
                ))}
            </select>
          </section>
          <section className="score-filter">
            <img src="Images/score.png" alt="score" />
            <select
              onChange={(e) => this.setFilter("score", Number(e.target.value))}
            >
              <option value="all">All Scores</option>
              {[...new Set(this.context.tastings.map((t) => t.score))]
                .sort()
                .map((score, i) => (
                  <option key={i} value={score}>
                    {score}
                  </option>
                ))}
            </select>
          </section>
        </div>
        <section className="tastings">
          <h2>WINE TASTING SHEETS</h2>
          <hr />
          <ul className="ul-tasting-list" aria-live="polite">
            {tastings.map((tasting) => (
              <TastingItem
                key={tasting.id}
                {...tasting}
                deleteTasting={this.context.deleteTasting}
                {...this.props}
              />
            ))}
          </ul>
        </section>
        <hr />
        <section className="conventions">
          <fieldset className="conv-item">
            <legend>Conventions</legend>
            <h3>PROFILE</h3>
            <p>
              <i className="fa fa-wine-glass" /> Wine Name
            </p>
            <p>
              <i className="fas fa-seedling" />
              Varietal
            </p>
            <p>
              <i className="fab fa-product-hunt" /> Producer
            </p>
            <p>
              <i className="fas fa-vote-yea" /> Vintage
            </p>
            <p>
              <i className="fas fa-globe-americas" /> Region
            </p>
            <h3>SIGHT</h3>
            <p>
              <i className="fas fa-fan" /> Condition
            </p>
            <p>
              <i className="fas fa-adjust" /> Concentration
            </p>
            <p>
              <i className="fas fa-palette" /> Color
            </p>
            <p>
              <i className="fas fa-wine-glass-alt" /> Rim Variation
            </p>
            <p>
              <i className="fab fa-mixer" /> Extract
            </p>
            <p>
              <i className="fas fa-tint" /> Tearing
            </p>
            <p>
              <i className="fas fa-burn" />
              Gas
            </p>
            <h3>NOSE</h3>
            <p>
              <i className="fas fa-hand-sparkles" /> Condition
            </p>
            <p>
              <i className="fas fa-signal" /> Intensity
            </p>
            <p>
              <i className="fas fa-clock" /> Age Assessment
            </p>
            <p>
              <i className="fab fa-apple" /> Fruit Aromas
            </p>
            <h3>PALATE</h3>
            <p>
              <i className="fas fa-candy-cane" /> Sweetness
            </p>
            <p>
              <i className="fas fa-lemon" /> Fruit Flavours
            </p>
            <p>
              <i className="fas fa-pepper-hot" /> Non-Fruit
            </p>
            <p>
              <i className="fas fa-mountain" /> Earth
            </p>
            <p>
              <i className="fas fa-spa" /> Mineral
            </p>
            <p>
              <i className="fas fa-certificate" /> Tannins
            </p>
            <p>
              <i className="far fa-lemon" /> Acidity
            </p>
            <p>
              <i className="fas fa-wine-bottle" /> Alcohol
            </p>
            <p>
              <i className="fab fa-creative-commons-remix" /> Complexity
            </p>
            <p>
              <i className="fas fa-ruler" /> Length
            </p>
            <p>
              <i className="fas fa-child" /> Body
            </p>
            <p>
              <i className="fas fa-align-center" /> Texture
            </p>
            <h3>CONCLUSION</h3>
            <p>
              <i className="fas fa-tree" /> Wood
            </p>
            <p>
              <i className="fas fa-pen-square" /> Comments
            </p>
            <p>
              <i className="fas fa-star" /> Score
            </p>
          </fieldset>
          <fieldset className="conv-item2">
            <legend>Scores</legend>
            <h3>50</h3>
            <p>
              <strong>Not Recommended</strong>
            </p>
            <h3>75</h3>
            <p>
              <strong>Mediocre:</strong> a drinkable wine that may have minor
              flaws.
            </p>
            <h3>80</h3>
            <p>
              <strong>Good:</strong> a solid, well-made wine.
            </p>
            <h3>85</h3>
            <p>
              <strong>Very good:</strong> a wine with special qualities.
            </p>
            <h3>90</h3>
            <p>
              <strong>Outstanding:</strong> a wine of superior character and
              style.
            </p>
            <h3>100</h3>
            <p>
              <strong>Classic:</strong> a great quality wine.
            </p>
          </fieldset>
        </section>
      </section>
    );
  }
}

export default TastingList;
