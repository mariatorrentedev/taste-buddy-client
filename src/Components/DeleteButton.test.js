import React from "react";
import ReactDOM from "react-dom";
import DeleteButton from "./DeleteButton";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <DeleteButton />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
