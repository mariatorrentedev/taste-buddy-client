import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LadingPage";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <LandingPage />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
