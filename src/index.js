import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "mdbreact/dist/css/mdb.css";

import registerServiceWorker from "./registerServiceWorker";
const supportsHistory = "pushState" in window.history;

ReactDOM.render(
  <BrowserRouter forceRefresh={!supportsHistory}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
