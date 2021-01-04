import React, { Component } from "react";
import config from "../../config";
import Context from "../../Context";
import tokenService from "../../services/token-service";

class AddTasting extends Component {
  static contextType = Context;
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
    this.props.history.push("/home");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    fetch(`${config.API_BASE_URL}/tastings`, {
      method: "POST",
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
        this.context.addTasting(newTasting);
        this.props.history.push("/tastings");
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <section className="form">
        <h2>DEDUCTIVE FORMAT</h2>
        <p>All fields with * are required</p>
        <form
          className="add-tasting"
          aria-label="add-tasting"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          {error && <p className="error">{error}</p>}
          <fieldset>
            <legend>Profile</legend>
            <div className="winename">
              <label htmlFor="winename" aria-label="winename">
                <h3>Wine Name *</h3>
              </label>
              <input
                placeholder="eg. Yacochuya"
                type="text"
                id="winename"
                name="winename"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="producer">
              <label htmlFor="producer" aria-label="producer">
                <h3>Producer: *</h3>
              </label>
              <input
                placeholder="eg.The Etcharts"
                type="text"
                id="producer"
                name="producer"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="varietal">
              <label htmlFor="varietal" aria-label="varietal">
                <h3>Varietal: *</h3>
              </label>
              <input
                placeholder="eg.Malbec"
                type="text"
                id="varietal"
                name="varietal"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="vintage">
              <label htmlFor="vintage" aria-label="vintage">
                <h3>Vintage: *</h3>
              </label>
              <input
                placeholder="eg.2017"
                type="number"
                id="vintage"
                name="vintage"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="region">
              <label htmlFor="region" aria-label="region">
                <h3>Region: *</h3>
              </label>
              <input
                placeholder="eg.Salta's Cafayete valle"
                type="text"
                id="region"
                name="region"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Sight</legend>
            <div className="condition">
              <label htmlFor="condition" aria-label="condition">
                <h3>Condition: *</h3>
              </label>
              <select
                name="condition"
                required
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
                <h3>Concentration: *</h3>
              </label>
              <select
                name="concentration"
                required
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
              <div className="colorwhite">
                <label htmlFor="colorwhite" aria-label="colorwhite">
                  White Wines:
                </label>
                <select
                  name="colorwhite"
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="">Select...</option>
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
                <select name="colorred" onChange={(e) => this.handleChange(e)}>
                  <option value="">Select...</option>
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
                <select name="colorrose" onChange={(e) => this.handleChange(e)}>
                  <option value="">Select...</option>
                  <option value="light-pink">Light Pink</option>
                  <option value="light-orange">Light Orange</option>
                  <option value="tart-cherry">Tart Cherry</option>
                  <option value="dark-pink">Dark Pink</option>
                </select>
              </div>
            </div>
            <div className="radio-buttons">
              <h3>Rim Variation *</h3>
              <input
                id="rim"
                value="true"
                name="rim"
                type="radio"
                onChange={(e) => this.handleChange(e)}
              />
              True
              <input
                id="rim"
                value="false"
                name="rim"
                type="radio"
                onChange={(e) => this.handleChange(e)}
              />
              False
            </div>
            <div className="extract">
              <label htmlFor="extract" aria-label="extract">
                <h3>Extract/Stanning: *</h3>
              </label>
              <select
                name="extract"
                required
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select...</option>
                <option value="Light">Light </option>
                <option value="Medium">Medium</option>
                <option value="Heavy">Heavy</option>
              </select>
            </div>
            <div className="tearing">
              <label htmlFor="tearing" aria-label="tearing">
                <h3>Tearing *</h3>
              </label>
              <select
                name="tearing"
                required
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select...</option>
                <option value="Light">Light </option>
                <option value="Medium">Medium</option>
                <option value="Heavy">Heavy</option>
              </select>
            </div>
            <div className="radio-buttons">
              <h3>Gas Evidence *</h3>
              <input
                id="gas"
                value="true"
                name="gas"
                type="radio"
                onChange={(e) => this.handleChange(e)}
              />
              True
              <input
                id="gas"
                value="false"
                name="gas"
                type="radio"
                onChange={(e) => this.handleChange(e)}
              />
              False
            </div>
          </fieldset>
          <fieldset>
            <legend>Nose</legend>
            <div className="conditionnose">
              <label htmlFor="conditionnose" aria-label="conditionnose">
                <h3>Condition: *</h3>
              </label>
              <select
                name="conditionnose"
                required
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select...</option>
                <option value="clean">Clean</option>
                <option value="tca">TCA</option>
                <option value="h2s">H2S</option>
                <option value="volatile-acidity">Volatile Acidity</option>
                <option value="ethyl-acetate">Ethyl Acetate</option>
                <option value="brettanomyces">Brettanomyces</option>
                <option value="oxidation">Oxidation</option>
              </select>
            </div>
            <div className="intensity">
              <label htmlFor="intensity" aria-label="intensity">
                <h3>Intensity: *</h3>
              </label>
              <select
                name="intensity"
                required
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select...</option>
                <option value="delicate">Delicate </option>
                <option value="moderate">Moderate</option>
                <option value="powerfull">Powerfull</option>
              </select>
            </div>
            <div className="ageassessment">
              <label htmlFor="ageassessment" aria-label="ageassessment">
                <h3>Age Assessment: *</h3>
              </label>
              <select
                name="ageassessment"
                required
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
              <div className="fruitwhite">
                <label htmlFor="fruitwhite" aria-label="fruitwhite">
                  White Wines:
                </label>
                <select
                  name="fruitwhite"
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="">Select...</option>
                  <option value="citrus">Citrus</option>
                  <option value="apple,pear">Apple, Pear</option>
                  <option value="Stone, pit">Stone,Pit</option>
                  <option value="tropical,Melon">Tropical,Melon</option>
                </select>
              </div>
              <div className="fruitred">
                <label htmlFor="fruitred" aria-label="fruitred">
                  <h4> Red Wines:</h4>
                </label>
                <select name="fruitred" onChange={(e) => this.handleChange(e)}>
                  <option value="">Select...</option>
                  <option value="red ripe">Red Ripe</option>
                  <option value="fresh">Fresh</option>
                  <option value="black tart">Black Tart</option>
                  <option value="blue jammy">Blue Jammy</option>
                </select>
              </div>
              <div className="fruitrose">
                <label htmlFor="fruitrose" aria-label="fruitrose">
                  <h4>Roses:</h4>
                </label>
                <select name="fruitrose" onChange={(e) => this.handleChange(e)}>
                  <option value="">Select...</option>
                  <option value="light-pink">Light Pink</option>
                  <option value="light-orange">Light Orange</option>
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
                <h3>Sweetness: *</h3>
              </label>
              <select
                name="sweetness"
                required
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select...</option>
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
                    value="blue"
                    name="fruitfred"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="item">
                <h3>Non-fruit *</h3>
                <label>
                  Floral
                  <input
                    type="checkbox"
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
                    value="spice"
                    name="nonfruit"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Animal
                  <input
                    type="checkbox"
                    value="animal"
                    name="nonfruit"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="item">
                <h3>Earth *</h3>
                <label>
                  Forest Floor
                  <input
                    type="checkbox"
                    value="forest floor"
                    name="earth"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Compost
                  <input
                    type="checkbox"
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
                    value="potting soil"
                    name="earth"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="item">
                <h3>Mineral *</h3>
                <label>
                  Mineral
                  <input
                    type="checkbox"
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
                    value="wetstone"
                    name="mineral"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label>
                  Limestone
                  <input
                    type="checkbox"
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
                <h3>Tannins *</h3>
              </label>
              <select
                name="tannins"
                required
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select...</option>
                <option value="low">Low</option>
                <option value="med-">Med-</option>
                <option value="medium">Medium</option>
                <option value="med+">Med+</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label htmlFor="acidity" aria-label="acidity">
                <h3>Acidity: *</h3>
              </label>
              <select
                name="acidity"
                required
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select...</option>
                <option value="low">Low</option>
                <option value="med-">Med-</option>
                <option value="medium">Medium</option>
                <option value="med+">Med+</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label htmlFor="alcohol" aria-label="alcohol">
                <h3>Alcohol: *</h3>
              </label>
              <select
                name="alcohol"
                required
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select...</option>
                <option value="low">Low</option>
                <option value="med-">Med-</option>
                <option value="medium">Medium</option>
                <option value="med+">Med+</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label htmlFor="complexity" aria-label="complexity">
                <h3>Complexity: *</h3>
              </label>
              <select
                name="complexity"
                required
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select...</option>
                <option value="low">Low</option>
                <option value="med-">Med-</option>
                <option value="medium">Medium</option>
                <option value="med+">Med+</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label htmlFor="length" aria-label="length">
                <h3>Length: *</h3>
              </label>
              <select
                name="length"
                required
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select...</option>
                <option value="short">Short</option>
                <option value="med-">Med-</option>
                <option value="medium">Medium</option>
                <option value="med+">Med+</option>
                <option value="long">Long</option>
              </select>
            </div>
            <div>
              <label htmlFor="body" aria-label="body">
                <h3> Body: *</h3>
              </label>
              <select
                name="body"
                required
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select...</option>
                <option value="light">Light</option>
                <option value="medium">Medium</option>
                <option value="full">Full</option>
              </select>
            </div>
            <div>
              <label htmlFor="texture" aria-label="texture">
                <h3> Texture: *</h3>
              </label>
              <select
                name="texture"
                required
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select...</option>
                <option value="creamy">Creamy</option>
                <option value="round">Round</option>
                <option value="lean">Lean</option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <legend>Conclusion</legend>
            <h3>Wood</h3>
            <div className="item">
              <h3>Age *</h3>
              <label>
                Old
                <input
                  type="radio"
                  id="wood-old"
                  name="woodage"
                  value="old"
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
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
            </div>
            <div className="item">
              <h3>Size *</h3>
              <label>
                Small
                <input
                  type="radio"
                  id="woodsize"
                  name="woodsize"
                  value="small"
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
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
            </div>
            <div className="item">
              <h3>Origin *</h3>
              <label>
                American
                <input
                  type="radio"
                  id="woodorigin"
                  name="woodorigin"
                  value="american"
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
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
            </div>
            <h3>Comments </h3>
            <textarea
              id="comments"
              name="comments"
              rows="5"
              cols="50"
              onChange={(e) => this.handleChange(e)}
              placeholder="Spectacular wine from Salta. Deep red. Complex, red and ripe fruits..."
            ></textarea>
            <div className="score">
              <label htmlFor="score" aria-label="score">
                <h3>Score: *</h3>
              </label>
              <select
                name="score"
                required
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select...</option>
                <option value="50">50 </option>
                <option value="75">75 </option>
                <option value="80">80 </option>
                <option value="85">85</option>
                <option value="90">90</option>
                <option value="100">100</option>
              </select>
            </div>
          </fieldset>
          <section className="buttons-form">
            <button type="submit" onClick={this.handleClickCancel}>
              Cancel
            </button>
            <button type="submit">Add Tasting</button>
          </section>
        </form>
      </section>
    );
  }
}

export default AddTasting;
