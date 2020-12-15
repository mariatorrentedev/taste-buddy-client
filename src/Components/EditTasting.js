import React, { Component } from "react";
import config from "../config";
import Context from "../Context";
import { CountryDropdown } from "react-country-region-selector";

class EditTasting extends Component {
  static contextType = Context;
  state = {
    error: null,
    newTasting: {},
  };

  selectCountry(val) {
    this.setState({ country: val });
  }

  handleChange(e) {
    this.setState({
      newTasting: { ...this.state.newTasting, [e.target.name]: e.target.value },
    });
  }
  handleClickCancel = () => {
    this.props.history.push("/tastings");
  };
  //Submit Form Tastings

  handleSubmit = (e) => {
    e.preventDefault();
    const id = Number(this.props.match.params.id);
    this.setState({ error: null });
    /*fetch(`${config.API_BASE_URL}/tastings/${id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.newTasting),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${config.API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((newTasting) => {
        e.target.reset();
        this.setState({
          tastings: [...this.state.tastings, newTasting],
          newTasting: {},
        });
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });*/

    this.context.updateTasting(this.state.newTasting, id);
    this.props.history.push("/tastings");
  };

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const tasting = this.context.tastings.find((t) => t.id === id);
    this.setState({
      newTasting: tasting,
    });
  }

  render() {
    const { country, error, newTasting } = this.state;

    return newTasting ? (
      <div>
        <h2>DEDUCTIVE FORMAT</h2>
        <form
          className="add-tasting"
          aria-label="add-tasting"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          {error && <p className="error">{error}</p>}
          <div className="wine-name">
            <label htmlFor="wine-name" aria-label="wine-name">
              Name:
            </label>
            <input
              placeholder="eg. Yacochuya"
              type="text"
              id="wine-name"
              name="wineName"
              value={newTasting.wineName}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="producer">
            <label htmlFor="producer" aria-label="producer">
              Producer:
            </label>
            <input
              placeholder="eg.The Etcharts"
              type="text"
              id="producer"
              name="producer"
              value={newTasting.producer}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="varietal">
            <label htmlFor="varietal" aria-label="varietal">
              Varietal:
            </label>
            <input
              placeholder="eg.Malbec"
              type="text"
              id="varietal"
              name="varietal"
              value={newTasting.varietal}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="vintage">
            <label htmlFor="vintage" aria-label="vintage">
              Vintage:
            </label>
            <input
              placeholder="eg.2017"
              type="number"
              id="vintage"
              name="vintage"
              value={newTasting.vintage}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="hiding-form">
            <div className="country">
              <label htmlFor="country" aria-label="country">
                Country:
              </label>
              <CountryDropdown
                value={newTasting.country}
                onChange={(val) => this.selectCountry(val)}
              />
            </div>
            <div className="region">
              <label htmlFor="region" aria-label="region">
                Region:
              </label>
              <input
                placeholder="eg.Salta's Cafayete valle"
                type="text"
                id="region"
                name="region"
                value={newTasting.region}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <fieldset>
              <legend>Sigh</legend>
              <div className="condition">
                <label htmlFor="condition" aria-label="condition">
                  Condition:
                </label>
                <select
                  name="condition"
                  value={newTasting.condition}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="">Select...</option>
                  <option value="clear">Clear</option>
                  <option value="hazy">Hazy</option>
                  <option value="turbid">Turbid</option>
                </select>
              </div>
              <div className="concentration">
                <label htmlFor="concentration" aria-label="concentration">
                  Concentration:
                </label>
                <select
                  name="concentration"
                  value={newTasting.concentration}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="">Select...</option>
                  <option value="pale">Pale</option>
                  <option value="medium">Medium</option>
                  <option value="deep">Deep</option>
                </select>
              </div>
              <div className="color">
                <h3>Color</h3>
                <div className="colorWhite">
                  <label htmlFor="colorWhite" aria-label="colorWhite">
                    White Wines:
                  </label>
                  <select
                    name="colorWhite"
                    value={newTasting.colorWhite}
                    onChange={(e) => this.handleChange(e)}
                  >
                    <option value="">Select...</option>
                    <option value="water-white">Water White</option>
                    <option value="straw">Straw</option>
                    <option value="yellow">Yellow</option>
                    <option value="gold">Gold</option>
                  </select>
                </div>
                <div className="colorRed">
                  <label htmlFor="colorRed" aria-label="colorRed">
                    Red Wines:
                  </label>
                  <select
                    name="colorRed"
                    value={newTasting.colorRed}
                    onChange={(e) => this.handleChange(e)}
                  >
                    <option value="">Select...</option>
                    <option value="purple">Purple</option>
                    <option value="ruby">Ruby</option>
                    <option value="red">Red</option>
                    <option value="garnet">Garnet</option>
                  </select>
                </div>
                <div className="colorRose">
                  <label htmlFor="colorRose" aria-label="colorRose">
                    Roses:
                  </label>
                  <select
                    name="colorRose"
                    value={newTasting.colorRose}
                    onChange={(e) => this.handleChange(e)}
                  >
                    <option value="">Select...</option>
                    <option value="ligth_pink">Ligth Pink</option>
                    <option value="ligth_orange">Ligth Orange</option>
                    <option value="tart_cherry">Tart Cherry</option>
                    <option value="dark_pink">Dark Pink</option>
                  </select>
                </div>
              </div>
              <div className="radio-buttons">
                <h3>Rim Variation</h3>
                <input
                  id="yes-rim"
                  value={newTasting.rim}
                  name="rim"
                  type="radio"
                  onChange={(e) => this.handleChange(e)}
                />
                Yes
                <input
                  id="no-rim"
                  value={newTasting.rim}
                  name="rim"
                  type="radio"
                  onChange={(e) => this.handleChange(e)}
                />
                No
              </div>
              <div className="extract">
                <label htmlFor="extract" aria-label="extract">
                  Extract/Staning:
                </label>
                <select
                  name="extract"
                  value={newTasting.extract}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="">Select...</option>
                  <option value="Ligth">Ligth </option>
                  <option value="Medium">Medium</option>
                  <option value="Heavy">Heavy</option>
                </select>
              </div>
              <div className="tearing">
                <label htmlFor="tearing" aria-label="tearing">
                  Tearing:
                </label>
                <select
                  name="tearing"
                  value={newTasting.tearing}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="">Select...</option>
                  <option value="Ligth">Ligth </option>
                  <option value="Medium">Medium</option>
                  <option value="Heavy">Heavy</option>
                </select>
              </div>
              <div className="radio-buttons">
                <h3>Gas Evidence</h3>
                <input
                  id="yes-gas"
                  value={newTasting.gas}
                  name="gas"
                  type="radio"
                  onChange={(e) => this.handleChange(e)}
                />
                Yes
                <input
                  id="no-gas"
                  value={newTasting.gas}
                  name="gas"
                  type="radio"
                  onChange={(e) => this.handleChange(e)}
                />
                No
              </div>
            </fieldset>
            <fieldset>
              <legend>Nose</legend>
              <div className="conditionNose">
                <label htmlFor="conditionNose" aria-label="conditionNose">
                  Condition:
                </label>
                <select
                  name="conditionNose"
                  value={newTasting.conditionNose}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="">Select...</option>
                  <option value="tca">TCA</option>
                  <option value="h2s">H2S</option>
                  <option value="volatile-acidity">Volatile Acidity</option>
                  <option value="ethyl-acetate">Ethyl Acetate</option>
                  <option value="brettanomyces">Brettanomyces</option>
                  <option value="oxidation">Oxidation</option>
                  <option value="none">None</option>
                </select>
              </div>
              <div className="intensity">
                <label htmlFor="intensity" aria-label="intensity">
                  Intensity:
                </label>
                <select
                  name="intensity"
                  value={newTasting.intensity}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="">Select...</option>
                  <option value="delicate">Delicate </option>
                  <option value="moderate">Moderate</option>
                  <option value="powerfull">Powerfull</option>
                </select>
              </div>
              <div className="ageAssessment">
                <label htmlFor="ageAssessment" aria-label="ageAssessment">
                  Age Assessment:
                </label>
                <select
                  name="ageAssessment"
                  value={newTasting.ageAssessment}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="">Select...</option>
                  <option value="youthful">Youthful </option>
                  <option value="moderate">Developing</option>
                  <option value="powerfull">Vinous</option>
                </select>
              </div>
              <div className="fruitN">
                <h3>Fruit Notes</h3>
                <div classNameName="fruitWhite">
                  <label htmlFor="fruitWhite" aria-label="fruitWhite">
                    White Wines:
                  </label>
                  <select
                    name="fruitWhite"
                    value={newTasting.fruitWhite}
                    onChange={(e) => this.handleChange(e)}
                  >
                    <option value="">Select...</option>
                    <option value="water-white">Water White</option>
                    <option value="straw">Straw</option>
                    <option value="yellow">Yellow</option>
                    <option value="gold">Gold</option>
                  </select>
                </div>
                <div className="fruitRed">
                  <label htmlFor="fruitRed" aria-label="fruitRed">
                    Red Wines:
                  </label>
                  <select
                    name="fruitRed"
                    value={newTasting.fruitRed}
                    onChange={(e) => this.handleChange(e)}
                  >
                    <option value="">Select...</option>
                    <option value="purple">Purple</option>
                    <option value="ruby">Ruby</option>
                    <option value="red">Red</option>
                    <option value="garnet">Garnet</option>
                  </select>
                </div>
                <div className="fruitRose">
                  <label htmlFor="fruitRose" aria-label="fruitRose">
                    Roses:
                  </label>
                  <select
                    name="fruitRose"
                    value={newTasting.fruitRose}
                    onChange={(e) => this.handleChange(e)}
                  >
                    <option value="">Select...</option>
                    <option value="ligth-pink">Ligth Pink</option>
                    <option value="ligth-orange">Ligth Orange</option>
                    <option value="tart-cherry">Tart Cherry</option>
                    <option value="dark-pink">Dark Pink</option>
                  </select>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Palate</legend>
              <div className="sweetness">
                <label htmlFor="sweetness" aria-label="sweetness">
                  Sweetness:
                </label>
                <select
                  name="sweetness"
                  value={newTasting.sweetness}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="">Select...</option>
                  <option value="tca">TCA</option>
                  <option value="h2s">H2S</option>
                  <option value="volatile-acidity">Volatile Acidity</option>
                  <option value="ethyl-acetate">Ethyl Acetate</option>
                  <option value="brettanomyces">Brettanomyces</option>
                  <option value="oxidation">Oxidation</option>
                  <option value="none">None</option>
                </select>
              </div>
              <div className="fruitN">
                <h3>Fruit Flavours</h3>
                <div className="item">
                  <h4 className="gray">White Wines</h4>
                  <label>
                    Citrus
                    <input
                      type="checkbox"
                      value={newTasting.fruitFtWhite}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Apple/Pear
                    <input
                      type="checkbox"
                      value={newTasting.fruitFtWhite}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Tropical/Melon
                    <input
                      type="checkbox"
                      value={newTasting.fruitFtWhite}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="item">
                  <h4 className="gray">Red Wines</h4>
                  <label>
                    Red
                    <input
                      type="checkbox"
                      value={newTasting.fruitFRed}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Black
                    <input
                      type="checkbox"
                      value={newTasting.fruitFRed}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Blue
                    <input
                      type="checkbox"
                      value={newTasting.fruitFRed}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="item">
                  <h4 className="red-f">Non-fruit</h4>
                  <label>
                    Floral
                    <input
                      type="checkbox"
                      value={newTasting.nonFruit}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Vegetable
                    <input
                      type="checkbox"
                      value={newTasting.nonFruit}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Herbal
                    <input
                      type="checkbox"
                      value={newTasting.nonFruit}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Spice
                    <input
                      type="checkbox"
                      value={newTasting.nonFruit}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Animal
                    <input
                      type="checkbox"
                      value={newTasting.nonFruit}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="item">
                  <h4 className="red-f">Earth</h4>
                  <label>
                    Florest Floor
                    <input
                      type="checkbox"
                      value={newTasting.earth}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Compost
                    <input
                      type="checkbox"
                      value={newTasting.earth}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Mushrooms
                    <input
                      type="checkbox"
                      value={newTasting.earth}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Potting Soil
                    <input
                      type="checkbox"
                      value={newTasting.earth}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="item">
                  <h4 className="red-f">Mineral</h4>
                  <label>
                    Mineral
                    <input
                      type="checkbox"
                      value={newTasting.mineral}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Wet Stone
                    <input
                      type="checkbox"
                      value={newTasting.mineral}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Limestone
                    <input
                      type="checkbox"
                      value={newTasting.mineral}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Chalk
                    <input
                      type="checkbox"
                      value={newTasting.mineral}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label>
                    Flint
                    <input
                      type="checkbox"
                      value={newTasting.mineral}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="tannins" aria-label="tannins">
                  Tannins:
                </label>
                <select
                  name="tannins"
                  value={newTasting.tannins}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="low">Low</option>
                  <option value="med-">Med-</option>
                  <option value="medium">Medium</option>
                  <option value="med+">Med+</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label htmlFor="acidity" aria-label="acidity">
                  Acidity:
                </label>
                <select
                  name="acidity"
                  value={newTasting.acidity}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="low">Low</option>
                  <option value="med-">Med-</option>
                  <option value="medium">Medium</option>
                  <option value="med+">Med+</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label htmlFor="alcohol" aria-label="alcohol">
                  Alcohol:
                </label>
                <select
                  name="alcohol"
                  value={newTasting.alcohol}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="low">Low</option>
                  <option value="med-">Med-</option>
                  <option value="medium">Medium</option>
                  <option value="med+">Med+</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label htmlFor="complexity" aria-label="complexity">
                  Complexity:
                </label>
                <select
                  name="complexity"
                  value={newTasting.complexity}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="low">Low</option>
                  <option value="med-">Med-</option>
                  <option value="medium">Medium</option>
                  <option value="med+">Med+</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label htmlFor="length" aria-label="length">
                  Length:
                </label>
                <select
                  name="length"
                  value={newTasting.length}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="short">Short</option>
                  <option value="med-">Med-</option>
                  <option value="medium">Medium</option>
                  <option value="med+">Med+</option>
                  <option value="long">Long</option>
                </select>
              </div>
              <div>
                <label htmlFor="body" aria-label="body">
                  Body:
                </label>
                <select
                  name="body"
                  value={newTasting.body}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="ligth">Ligth</option>
                  <option value="medium">Medium</option>
                  <option value="full">Full</option>
                </select>
              </div>
              <div>
                <label htmlFor="texture" aria-label="texture">
                  Texture:
                </label>
                <select
                  name="texture"
                  value={newTasting.texture}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="creamy">Creamy</option>
                  <option value="round">Round</option>
                  <option value="lean">Lean</option>
                </select>
              </div>
            </fieldset>
            <fieldset>
              <legend>Conclusion</legend>
              <h4 className="red-f">Wood</h4>
              <div className="item">
                <h4 className="gray">Age</h4>
                <label>
                  Old
                  <input
                    type="radio"
                    id="age-old-p"
                    name="age-p"
                    value={newTasting.woodAge}
                    onChange={(e) => this.handleChange(e)}
                  />
                </label>
                <label>
                  New
                  <input
                    type="radio"
                    id="age-new-p"
                    name="age-p"
                    value={newTasting.woodAge}
                    onChange={(e) => this.handleChange(e)}
                  />
                </label>
              </div>
              <div className="item">
                <h4 className="gray">Size</h4>
                <label>
                  Small
                  <input
                    type="radio"
                    id="size-s-p"
                    name="size-p"
                    value={newTasting.woodSize}
                    onChange={(e) => this.handleChange(e)}
                  />
                </label>
                <label>
                  Large
                  <input
                    type="radio"
                    id="size-l-p"
                    name="size-p"
                    value={newTasting.woodSize}
                    onChange={(e) => this.handleChange(e)}
                  />
                </label>
              </div>
              <div className="item">
                <h4 className="gray">Origin</h4>
                <label>
                  American
                  <input
                    type="radio"
                    id="origin-american-p"
                    name="origin-p"
                    value={newTasting.woodOrigin}
                    onChange={(e) => this.handleChange(e)}
                  />
                </label>
                <label>
                  French
                  <input
                    type="radio"
                    id="origin-french-p"
                    name="origin-p"
                    value={newTasting.woodOrigin}
                    onChange={(e) => this.handleChange(e)}
                  />
                </label>
              </div>
              <h4 className="red-f">Comments</h4>
              <textarea
                id="comments"
                name="wine-review"
                onChange={(e) => this.handleChange(e)}
                rows="5"
                cols="70"
                placeholder="Spectacular wine from Salta. Deep red. Complex, red and ripe fruits..."
              ></textarea>
              <div classNameName="score">
                <label htmlFor="score" aria-label="score">
                  Score:
                </label>
                <select
                  name="score"
                  value={newTasting.score}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="">Select...</option>
                  <option value="50-74">50-74</option>
                  <option value="75-79">75-79</option>
                  <option value="80-84">80-84</option>
                  <option value="85-89">85-89</option>
                  <option value="90-94">90-94</option>
                  <option value="95-100">95-100</option>
                </select>
              </div>
            </fieldset>
          </div>
          <button type="button" onClick={this.handleClickCancel}>
            Cancel
          </button>
          <button type="submit">Edit Tasting</button>
        </form>
      </div>
    ) : (
      <h2>Loading Tasting...</h2>
    );
  }
}
export default EditTasting;
