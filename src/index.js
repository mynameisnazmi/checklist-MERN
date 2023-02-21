import ReactDOM from "react-dom/client";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "@heroicons/react/solid";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // BrowserRouter for activate route
  // basename={process.env.PUBLIC_URL}
  <Router>
    <App />
  </Router>
);
