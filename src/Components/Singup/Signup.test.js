import React from "react";
import ReactDOM from "react-dom";
import Singup from "./Signup";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Singup />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
