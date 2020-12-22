import React from "react";
import ReactDOM from "react-dom";
import TastingItem from "./TastingItem";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <TastingItem />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
