import React from "react";
import TokenService from "../../services/token-service";
import { Redirect } from "react-router-dom";

function LandingPage() {
  return TokenService.hasAuthToken() ? (
    <Redirect to="/home" />
  ) : (
    <div className="landing-page">
      <section className="banner">
        <h2>Take your tasting experience to the next level!</h2>
        <p>
          TasteBuddy is the perfect place to create, save, edit & delete your
          wine tasting sheets.
        </p>
        <p>
          With multiple features available, you can have a complete record of
          your favorite wines!
        </p>
      </section>
      <section>
        <h3>Awaken your senses!</h3>
        <p>
          [<em>placeholder for screenshot of tasting sheet interface</em>]
        </p>
        <p>
          TasteBuddy teaches you how to carry out an effective tasting, making
          you explore and live an entire organoleptic experience.
        </p>
      </section>
      <section>
        <h3>Taste from a professional pespective!</h3>
        <p>
          [<em>placeholder for screenshot of the deductive tasting grid.</em>]
        </p>
        <p>
          Fill out your own deductive tasting format similar to the one that the
          Court of Master Sommeliers use in their studies.
        </p>
      </section>
      <section>
        <h3>Master your technical knowledge!</h3>
        <p>
          [<em>placeholder for screenshot of the TasteBud guide.</em>]
        </p>
        <p>
          With your TasteBud guide, you will be able to understand the function
          of each concept when qualifying your wines, obtain recommendations and
          improve your ability to identify aromas with greater precision.
        </p>
      </section>
    </div>
  );
}

export default LandingPage;
