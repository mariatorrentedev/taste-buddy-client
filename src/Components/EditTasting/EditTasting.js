import React, { Component } from "react";
import config from "../../config";
import Context from "../../Context";
import tokenService from "../../services/token-service";

class EditTasting extends Component {
  static contextType = Context;

  static defaultProps = {
    match: {
      params: {
        id: 0,
      },
    },
  };

  state = {
    error: null,
    newTasting: {},
  };

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
    fetch(`${config.API_BASE_URL}/tastings/${id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.newTasting),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenService.getAuthToken()}`,
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
        this.context.updateTasting(newTasting, id);
        this.props.history.push("/tastings");
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
  };

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const tasting = this.context.tastings.find((t) => t.id === id);
    this.setState({
      newTasting: tasting,
    });
  }

  render() {
    const { error, newTasting } = this.state;

    return newTasting ? (
      <div>
        <h2>DEDUCTIVE FORMAT</h2>
        <form
          className="add-tasting"
          aria-label="add-tasting"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          {error && <p className="error">{error}</p>}
          <div className="winename">
            <label htmlFor="winename" aria-label="winename">
              Name:
            </label>
            <input
              placeholder="eg. Yacochuya"
              type="text"
              id="winename"
              value={newTasting.winename}
              name="winename"
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
              value={newTasting.producer}
              name="producer"
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
          <div className="region">
            <label htmlFor="region" aria-label="region">
              Region:
            </label>
            <input
              placeholder="eg.Salta's Cafayete valle"
              type="text"
              id="region"
              name="region"
              defaultValue="Veneto"
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
                <option value="pale">Pale</option>
                <option value="medium">Medium</option>
                <option value="deep">Deep</option>
              </select>
            </div>
            <div className="color">
              <h3>Color</h3>
              <div className="colorwhite">
                <label htmlFor="colorwhite" aria-label="colorwhite">
                  White Wines:
                </label>
                <select
                  name="colorwhite"
                  value={newTasting.colorwhite || ""}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="no-whites">No White</option>
                  <option value="water-white">Water White</option>
                  <option value="straw">Straw</option>
                  <option value="yellow">Yellow</option>
                  <option value="gold">Gold</option>
                </select>
              </div>
              <div className="colorred">
                <label htmlFor="colorred" aria-label="colorred">
                  Red Wines:
                </label>
                <select
                  name="colorred"
                  value={newTasting.colorred || ""}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="no-red">No Red</option>
                  <option value="purple">Purple</option>
                  <option value="ruby">Ruby</option>
                  <option value="red">Red</option>
                  <option value="garnet">Garnet</option>
                </select>
              </div>
              <div className="colorrose">
                <label htmlFor="colorrose" aria-label="colorrose">
                  Roses:
                </label>
                <select
                  name="colorrose"
                  value={newTasting.colorrose}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="no-rose">No Rose</option>
                  <option value="ligth-pink">Ligth Pink</option>
                  <option value="ligth-orange">Ligth Orange</option>
                  <option value="tart-cherry">Tart Cherry</option>
                  <option value="dark-pink">Dark Pink</option>
                </select>
              </div>
            </div>
            <div className="radio-buttons">
              <h3>Rim Variation</h3>
              <input
                id="yes-rim"
                value="true"
                name="rim"
                type="radio"
                checked={newTasting.rim === "true"}
                onChange={(e) => this.handleChange(e)}
              />
              Yes
              <input
                id="no-rim"
                value="false"
                name="rim"
                type="radio"
                checked={newTasting.rim === "false"}
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
                <option value="0">Select...</option>
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
                <option value="0">Select...</option>
                <option value="Ligth">Ligth </option>
                <option value="Medium">Medium</option>
                <option value="Heavy">Heavy</option>
              </select>
            </div>
            <div className="radio-buttons">
              <h3>Gas Evidence</h3>
              <input
                id="yes-gas"
                value="true"
                name="gas"
                type="radio"
                checked={newTasting.gas === "true"}
                onChange={(e) => this.handleChange(e)}
              />
              Yes
              <input
                id="no-gas"
                checked={newTasting.gas === "false"}
                value="false"
                name="gas"
                type="radio"
                onChange={(e) => this.handleChange(e)}
              />
              No
            </div>
          </fieldset>
          <fieldset>
            <legend>Nose</legend>
            <div className="conditionnose">
              <label htmlFor="conditionnose" aria-label="conditionnose">
                Condition:
              </label>
              <select
                name="conditionnose"
                value={newTasting.conditionnose}
                onChange={(e) => this.handleChange(e)}
              >
                <option value="0">Select...</option>
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
                <option value="0">Select...</option>
                <option value="delicate">Delicate </option>
                <option value="moderate">Moderate</option>
                <option value="powerfull">Powerfull</option>
              </select>
            </div>
            <div className="ageassessment">
              <label htmlFor="ageassessment" aria-label="ageassessment">
                Age Assessment:
              </label>
              <select
                name="ageassessment"
                value={newTasting.ageassessment}
                onChange={(e) => this.handleChange(e)}
              >
                <option value="0">Select...</option>
                <option value="youthful">Youthful </option>
                <option value="moderate">Developing</option>
                <option value="powerfull">Vinous</option>
              </select>
            </div>
            <div className="fruitN">
              <h3>Fruit Notes</h3>
              <div className="fruitwhite">
                <label htmlFor="fruitwhite" aria-label="fruitwhite">
                  White Wines:
                </label>
                <select
                  name="fruitwhite"
                  value={newTasting.fruitwhite}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="0">Select...</option>
                  <option value="citrus">Citrus</option>
                  <option value="apple,pear">Apple, Pear</option>
                  <option value="Stone, pit">Stone,Pit</option>
                  <option value="tropical,Melon">Tropical,Melon</option>
                </select>
              </div>
              <div className="fruitred">
                <label htmlFor="fruitred" aria-label="fruitred">
                  Red Wines:
                </label>
                <select
                  name="fruitred"
                  value={newTasting.fruitred}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="0">Select...</option>
                  <option value="red ripe">Red Ripe</option>
                  <option value="fresh">Fresh</option>
                  <option value="black tart">Black Tart</option>
                  <option value="blue jammy">Blue Jammy</option>
                </select>
              </div>
              <div className="fruitrose">
                <label htmlFor="fruitrose" aria-label="fruitrose">
                  Roses:
                </label>
                <select
                  name="fruitrose"
                  value={newTasting.fruitrose}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="0">Select...</option>
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
                <option value="0">Select...</option>
                <option value="bone-dry">Bone Dry</option>
                <option value="dry">Dry</option>
                <option value="off-dry">Off Dry</option>
                <option value="medium-sweet">Medium Sweet</option>
                <option value="sweet">Sweet</option>
                <option value="lusciously sweet">Lusciously Sweet</option>
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
                    checked={newTasting.fruitfwhite === "citrus"}
                    value="citrus"
                    name="fruitfwhite"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Apple/Pear
                  <input
                    type="checkbox"
                    checked={newTasting.fruitfwhite === "apple,pear"}
                    value="apple,pear"
                    name="fruitfwhite"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Tropical/Melon
                  <input
                    type="checkbox"
                    checked={newTasting.fruitfwhite === "tropical,melon"}
                    value="tropical,melon"
                    name="fruitfwhite"
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
                    checked={newTasting.fruitfred === "red"}
                    value="red"
                    name="fruitfred"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Black
                  <input
                    type="checkbox"
                    checked={newTasting.fruitfred === "black"}
                    value="black"
                    name="fruitfred"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Blue
                  <input
                    type="checkbox"
                    checked={newTasting.fruitfred === "blue"}
                    value="blue"
                    name="fruitfred"
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
                    checked={newTasting.nonfruit === "floral"}
                    value="floral"
                    name="nonfruit"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Vegetable
                  <input
                    type="checkbox"
                    checked={newTasting.nonfruit === "vegetable"}
                    value="vegetable"
                    name="nonfruit"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Herbal
                  <input
                    type="checkbox"
                    checked={newTasting.nonfruit === "herbal"}
                    value="herbal"
                    name="nonfruit"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Spice
                  <input
                    type="checkbox"
                    checked={newTasting.nonfruit === "spice"}
                    value="spice"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Animal
                  <input
                    type="checkbox"
                    checked={newTasting.nonfruit === "animal"}
                    value="animal"
                    name="nonfruit"
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
                    checked={newTasting.earth === "florest floor"}
                    value="florest floor"
                    name="earth"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Compost
                  <input
                    type="checkbox"
                    checked={newTasting.earth === "compost"}
                    value="compost"
                    name="earth"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Mushrooms
                  <input
                    type="checkbox"
                    checked={newTasting.earth === "mushrooms"}
                    value="mushrooms"
                    name="earth"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Potting Soil
                  <input
                    type="checkbox"
                    checked={newTasting.earth === "potting soil"}
                    value="potting soil"
                    name="earth"
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
                    checked={newTasting.mineral === "mineral"}
                    value="mineral"
                    name="mineral"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Wet Stone
                  <input
                    type="checkbox"
                    checked={newTasting.mineral === "wet stone"}
                    value="wet stone"
                    name="mineral"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Limestone
                  <input
                    type="checkbox"
                    checked={newTasting.mineral === "limestone"}
                    value="limestone"
                    name="mineral"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Chalk
                  <input
                    type="checkbox"
                    checked={newTasting.mineral === "chalk"}
                    value="chalk"
                    name="mineral"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Flint
                  <input
                    type="checkbox"
                    checked={newTasting.mineral === "flint"}
                    value="flint"
                    name="mineral"
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
                  id="wood-old"
                  name="woodage"
                  value="old"
                  checked={newTasting.woodage === "old"}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                New
                <input
                  type="radio"
                  id="wood-new"
                  name="woodage"
                  value="new"
                  checked={newTasting.woodage === "new"}
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
                  id="woodsize"
                  name="woodsize"
                  value="small"
                  checked={newTasting.woodsize === "small"}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                Large
                <input
                  type="radio"
                  id="woodsize"
                  name="woodsize"
                  value="large"
                  checked={newTasting.woodsize === "large"}
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
                  id="woodorigin"
                  name="woodorigin"
                  value="american"
                  checked={newTasting.woodorigin === "american"}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                French
                <input
                  type="radio"
                  id="woodorigin"
                  name="woodorigin"
                  value="french"
                  checked={newTasting.woodorigin === "french"}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
            </div>
            <h4 className="red-f">Comments</h4>
            <textarea
              id="comments"
              name="comments"
              rows="5"
              cols="70"
              value={newTasting.comments}
              onChange={(e) => this.handleChange(e)}
              placeholder="Spectacular wine from Salta. Deep red. Complex, red and ripe fruits..."
            ></textarea>
            <div className="score">
              <label htmlFor="score" aria-label="score">
                Score:
              </label>
              <select
                name="score"
                value={newTasting.score}
                onChange={(e) => this.handleChange(e)}
              >
                <option value="0">Select...</option>
                <option value="50">50 </option>
                <option value="75">75 </option>
                <option value="80">80 </option>
                <option value="85">85</option>
                <option value="90">90</option>
                <option value="100">100</option>
              </select>
            </div>
          </fieldset>
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