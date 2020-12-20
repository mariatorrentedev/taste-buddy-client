import React from "react";
import ReactDOM from "react-dom";
import TastingList from "./TastingList";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <TastingList />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
