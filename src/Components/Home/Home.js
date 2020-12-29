import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section>
        <h2>TasteBuddy Guide</h2>
        <div className="video-form">
          <video width="360" height="300" controls>
            <source src="/Videos/taste-buddy-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section>
        <h2>Things to keep in mind before starting the tasting</h2>
        <ul>
          <li>
            Prepare your enviroment, don't wear perfume, and try to choose a
            natural light room.
          </li>
          <li>Try not to have coffee, eat spicy food, garlic or onion.</li>
          <li>
            Tasting Order: white wines before red wines, ligther wines before
            heavier, and sweet wines for the end.
          </li>
          <li>
            <strong>Ideal temperature: 18°-20°C </strong>take out the wines and
            keep them between 2-3 hours at room temperature. YES, ALL! even the
            white wines. It would have the correct volatility to identify
            aromas.
          </li>
        </ul>
        <p>
          After reading and understanding this technical guide, you will be able
          to complete your first deductive tasting format
          <Link to="/tastings/add"> Here</Link>
        </p>
      </section>
      <section>
        <h2>A wine, a buddy..</h2>
        <p>
          [<em>placeholder for wine basic profile concepts</em>]
        </p>
      </section>
      <section>
        <h2>Awaken your senses</h2>
        <article>
          <h3>SIGTH</h3>
          <p>
            [<em>placeholder for sigth technical concepts</em>]
          </p>
        </article>
        <article>
          <h3>NOSE</h3>
          <p>
            [<em>placeholder for nose technical concepts</em>]
          </p>
        </article>
        <article>
          <h3>PALATE</h3>
          <p>
            [<em>placeholder for palate technical concepts</em>]
          </p>
        </article>
      </section>
      <section>
        <h2>How to make an effective conclusion?</h2>
        <p>
          [
          <em>
            placeholder on how to make an effective summary based on your
            organoleptic experience and technical knowledge.
          </em>
          ]
        </p>
      </section>
    </div>
  );
}

export default Home;
