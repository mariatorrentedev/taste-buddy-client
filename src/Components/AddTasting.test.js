import React from "react";
import ReactDOM from "react-dom";
import AddTasting from "./AddTasting";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <AddTasting />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
