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
        <h2>SIGHT</h2>
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
          </div>
          <div className="item">
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
                <strong>*</strong>
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
                produces smaller bubbles that you can identify on the sight.
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

        <h3>
          Then..spin your glass and bring it up to your nose. Is it citrus?
          mineral? floral?
        </h3>
        <ol>
          There are three aroma categories:
          <li>Primary: derived from the grape variety and growing region.</li>
          <li>
            Secondary: produced by the fermentation process. *bread-like aroma
            is a sign yeast.
          </li>
          <li>
            Ternary: comes from the aging process. *Vanilla, cocoa aromas is a
            sign aging and specific oak.
          </li>
        </ol>

        <div className="group">
          <div className="item">
            <fieldset>
              <legend>
                <i className="fas fa-fan"></i> Condition
              </legend>
              The condition in nose determine if the wine is in the proper
              state. There are some aromas that are part from the terroir and
              can generate an intense aroma in the wine.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-signal"></i> Intensity
              </legend>
              The intensity sometimes is confused with the alcohol, here you
              need to identify if the primary aromas intensity.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-clock"> </i> Age Ageassessment
              </legend>
              Sometimes most of young wines have an intense aroma, after aging
              they developed ternary aromas.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fab fa-apple"></i> Fruit Aromas
              </legend>
              This is very subjective, because a lot of aromas can become from
              an specific experience.. But A young wine presents more fruit on
              the nose than an older bottler, which can have more earthy
              components.
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
        <h3>
          The most exciting part of the wine tasting, the palate! Now we all
          deserve a sip. Gently swish the wine around the mounth so it coats
          your tongue..
        </h3>
        <div className="group">
          <div className="item">
            <fieldset>
              <legend>
                <i className="fas fa-candy-cane" /> Sweetness
              </legend>
              The swetness in the palate is determine by the tip of the tongue.
              <p>
                <strong>*</strong> If the wine is dry, it means there is no
                residual sugar, no sweetness.
              </p>
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-lemon" /> Fruit Flavors
              </legend>
              Fluir Flavors will depeng on the state of the fruit, is it fresh?
              is it ripe? is it more madure?
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-pepper-hot" /> Non-Fruit
              </legend>
              Non-fruit flavors will depend on the type of wine, floral notes
              are more common on white wines, minerality and mushrooms in aged
              wines.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-mountain" /> Earth
              </legend>
              Earth notes are related with the aging of the wine and can give
              extraordinary an sensation in the mouth.
            </fieldset>
          </div>
          <div className="item">
            <fieldset>
              <legend>
                <i className="fas fa-spa" /> Mineral
              </legend>
              Minerality is more common in white wines.
              <p>
                <strong>*</strong> The climate and the soils will influence the
                mineral notes in the wine.
              </p>
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-certificate" /> Tannins
              </legend>
              The tannins are described as the drying sensation in your mouth,
              there are two kinds: from the wood and from the skin, seeds and
              stems of the grape.
              <p>
                <strong>*</strong> Oak tannins are softer and smoother so will
                less intensity.
              </p>
            </fieldset>
            <fieldset>
              <legend>
                <i className="far fa-lemon" /> Acidity
              </legend>
              The sides of the tongue detect the acidity and produce a watering
              sensation.
              <p>
                <strong>*</strong> Acidity can reveal clues about the varietal,
                climate and aging of the wine.
              </p>
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-wine-bottle" /> Alcohol
              </legend>
              The alcohol needs to be balance, and not give you a hot sensation,
              as part of the complexity but not the main character.
            </fieldset>
          </div>
          <div className="item">
            <fieldset>
              <legend>
                <i className="fab fa-creative-commons-remix" /> Complexity
              </legend>
              The complexity is the summary from the intensity of the alcohol,
              acidity, intensity and tannins.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-ruler" /> Length
              </legend>
              The length is determine on How long the flavors last after
              tasting, loger time, more flavor and more complexity.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-child" /> Body
              </legend>
              The body will be determined by the alcohol content and teh texture
              of the wine.
            </fieldset>
            <fieldset>
              <legend>
                <i className="fas fa-align-center" /> Texture
              </legend>
              The texture will depend on the tannins and the length.
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
              Used the correctly oak can increase the intensity and complexity
              of the wine.
              <strong>* White Wines:</strong> Oak can generate notes of
              vainilla, butterscotch, and caramel.
              <strong>* Red Wines: </strong> Oak adds smoke, tobacco, leather
              and chocolate.
              <strong>* American Oak</strong> American grows faster than French,
              provides more flavor intensity but fewer tannins.(vanilla,
              tropical and caramel notes).
              <strong>* French Oak</strong> French has a tighter grain, it
              transfer flavors slowly and it's more porous meaning the barrels
              will impart more complex flavors through oxygenation.(Spices,
              toasted nuts, coffee and leather notes.)
            </fieldset>
          </div>
          <div className="item">
            <fieldset>
              <legend>
                <i className="fas fa-pen-square" /> Comments
              </legend>
              The final notes of the wine are the most important, it is where
              you are going to write a small conclusion of the most relevant
              characteristics of the wine together with an ideal pairing that
              highlights the aromas and essence of the wine.
            </fieldset>
          </div>
          <div className="item">
            <fieldset>
              <legend>
                <i className="fas fa-star" /> Score
              </legend>
              The 100-point wine-scoring scale was popularized by the Wine
              Spectator magazine by Robert Parker.
              <strong>*</strong> As subjective as the tasting experience is,
              there is not bad analysis, but keep in mind that with all this
              additional knowledge you can make a much more assertive rating.
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
