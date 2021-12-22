import React from "react";
import ReactDOM from "react-dom";
import { AppProviders } from "./context/AppContext";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <Router>
        <App />
      </Router>
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
