import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./State.logic/ReduxActions";
import App from "./App";

import "./css/bootstrap.min.css";
import "./css/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
