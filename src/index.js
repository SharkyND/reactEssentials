import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App2";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App login={"SharkyND"} />,
  </Router>,
  document.getElementById("root")
);
