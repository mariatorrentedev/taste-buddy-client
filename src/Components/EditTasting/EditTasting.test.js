import React from "react";
import ReactDOM from "react-dom";
import EditTasting from "./EditTasting";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <EditTasting />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
