import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section>
        <h2>TasteBuddy Guide</h2>
        <div className="video-form">
          <video width="100%" height="300" controls>
            <source src="/Videos/taste-buddy-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section>
        <h2>Things to keep in mind before starting the tasting</h2>
        <img src="/Images/home-intro.png" alt="wine intro" />
        <div className="group">
          <div className="item">
            <ul>
              <li>
                Prepare your enviroment, don't wear perfume, and try to choose a
                natural light room.
              </li>
              <li>Try not to have coffee, eat spicy food, garlic or onion.</li>
              <li>
                Tasting Order: white wines before red wines, ligther wines
                before heavier, and sweet wines for the end.
              </li>
              <li>
                <strong>Ideal temperature: 18°-20°C </strong>take out the wines
                and keep them between 2-3 hours at room temperature. YES, ALL!
                even the white wines. It would have the correct volatility to
                identify aromas.
              </li>
              <li>
                Between tastings, it's important to 'reset' your palate with a
                swirl of water, or some bites of neutral food, like crackers or
                bread.
              </li>
            </ul>
          </div>

          <div className="item">
            <fieldset>
              <h3>
                This is a support guide exclusively for TasteBuddy members. A
                basic explanation of the technical concepts to take into account
                when doing a wine tasting.
              </h3>
              <h3>
                <Link to="/tastings/add"> Deductive Format Here</Link>
              </h3>
            </fieldset>
          </div>
        </div>
      </section>
      <section>
        <h2>A wine, a buddy..</h2>
        <div className="group">
          <div className="item">
            <fieldset>
              <legend>
                <i className="fa fa-wine-glass" /> Wine Name
              </legend>
              <p>
                Most wine names tie to the region where they're crafted or the
                grapes used during their production.
                <strong> Old World Wines: </strong> labeled by region.
                <strong> New World Wines </strong> labeled by grape.
              </p>
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-seedling" /> Varietal
              </legend>
              <p>
                When identifying the varietal, it is advisable to make a
                separate list to have key aromas and flavors, which you can save
                in your taste memory.
              </p>
            </fieldset>
          </div>
          <div className="item">
            <fieldset>
              <legend>
                <i className="fab fa-product-hunt" /> Producer
              </legend>
              The producer name is either obvious or in small text at the top or
              the bottom of the label.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-vote-yea" /> Vintage
              </legend>
              The vintage tells you in which year the grapes were picked and is
              always written in the label.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-globe-americas" /> Region
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
          </div>
        </div>
      </section>
      <section>
        <h2>Awaken your senses</h2>
        <h2>SIGTH</h2>
        <div className="item">
          <img src="/Images/wine-sigth.png" alt="wine profile" />
        </div>
        <h3>
          Slow down and focus on your visual examination, take a look at your
          wine glass and try to put a white paper to highlight the colors or any
          visual identifier.
        </h3>
        <div className="group">
          <div className="item">
            <fieldset>
              <legend>
                <i className="fas fa-fan"></i> Condition
              </legend>
              The condition is to determine if it is in good condition to be
              tasted.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-adjust"></i> Concentration
              </legend>
              The concentration will give you an indication of the wine age and
              grape variety.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-palette" /> Color
              </legend>
              The color will give you an indication of the wine varietal and the
              wine aging.
              <p>
                <strong>Red Wines </strong>lose color and become brown or
                brickish the older they get.
              </p>
              <p>
                <strong>White Wines </strong>become more yellow and increase
                pigment as they age.
              </p>
            </fieldset>
          </div>
          <div className="item">
            <fieldset>
              <legend>
                <i className="fas fa-wine-glass-alt" /> Rim
              </legend>
              The rim variation will give you the color reflections, it can
              determine the age of the wine, and influence on the acidity.
              <strong>
                A very tight rim variation can show you a very young wine. A
                blue tinge of a red wine can indicates a higher acidity.
              </strong>
            </fieldset>
            <fieldset>
              <legend>
                <i className="fab fa-mixer" /> Extraction
              </legend>
              The extract will give you also an idea of the flavour intensity,
              tannins, and colour from grape skins before and after the
              fermentation process.
              <strong>
                The potential color extraction is derived from the skin, a
                thinner skin means less area for potential extraction, leading
                to ligth wines.
              </strong>
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-tint"></i> Tearing
              </legend>
              The tearing will influence the alcohol of the wine, this is
              basically refering to the wine legs, and you can identify it
              visualy with the viscosity of the wine.
              <strong>
                When the legs are more dense, it means the wine have more
                alcohol, which will taste with a burning sensation in the back
                throat.
              </strong>
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-burn"></i> Gas
              </legend>
              This will not apply to all wines, but will determine the type of
              sparkling wine and some special wines.
              <p>
                <strong>*</strong> An example, the <strong>Champagne</strong>{" "}
                uses the traditional method which involves a second fermentation
                in the bottle where sugars and yeasts are added, this method
                produces smaller bubbles that you can identify on the sigth.
              </p>
              <p>
                <strong>*</strong> But there are some other interesting signs
                for bubbles that you can identify. There is a process called
                <strong> Carbonic Maceration</strong>, in about five to fifteen
                days a 3% of alcohol by volume is produced + some bubbles
                because the anaerobic atmosphere inside the grape that allows
                the fermenation to continue, Beajolais Nouveau is an example of
                wine.
              </p>
            </fieldset>
          </div>
        </div>
      </section>
      <section>
        <h2>NOSE</h2>
        <div className="group">
          <div className="item">
            <fieldset>
              <legend>
                <i className="fas fa-fan"></i> Condition
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-signal"></i> Intensity
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-clock"> </i> Age Ageassessment
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fab fa-apple"></i> Fruit Aromas
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
          </div>
          <div className="item">
            <img src="/Images/wine-nose.png" alt="wine profile" />
          </div>
        </div>
      </section>
      <section>
        <h2>PALATE</h2>

        <div>
          <img src="/Images/wine-palate.png" alt="wine profile" />
        </div>
        <div className="group">
          <div className="item">
            <fieldset>
              <legend>
                <i className="fas fa-candy-cane" /> Sweetness
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-lemon" /> Fruit Flavors
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-pepper-hot" /> Non-Fruit
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-mountain" /> Earth
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
          </div>
          <div className="item">
            <fieldset>
              <legend>
                <i className="fas fa-spa" /> Mineral
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-certificate" /> Tannins
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
            <fieldset>
              <legend>
                <i className="far fa-lemon" /> Acidity
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-wine-bottle" /> Alcohol
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
          </div>
          <div className="item">
            <fieldset>
              <legend>
                <i className="fab fa-creative-commons-remix" /> Complexity
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-ruler" /> Length
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-child" /> Body
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-align-center" /> Texture
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
          </div>
        </div>
      </section>
      <section>
        <h2>How to make an effective conclusion?</h2>
        <div className="group">
          <div className="item">
            <fieldset>
              <legend>
                <i className="fas fa-tree" /> Wood
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
          </div>
          <div className="item">
            <fieldset>
              <legend>
                <i className="fas fa-pen-square" /> Comments
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
          </div>
          <div className="item">
            <fieldset>
              <legend>
                <i className="fas fa-star" /> Score
              </legend>
              The region is where the wine is produce and it varies depending on
              the area, since each one has its regulations.
            </fieldset>
          </div>
        </div>
        <h3>
          <Link to="/tastings/add"> Deductive Format Here</Link>
        </h3>
      </section>
    </div>
  );
}

export default Home;
