import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section>
        <h2>Welcome TasteBuddy!</h2>
        <p>Your wine tasting journey is about to begin...</p>
        <p>
          After reading and understanding this technical guide, you will be able
          to complete your first deductive tasting format
          <Link to="/tastings/add"> Here</Link>
        </p>
      </section>
      <section>
        <h2>TasteBud Guide</h2>
        <p>
          [<em>placeholder for an introductory video.</em>]
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
