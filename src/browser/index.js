import React from "react";
import App from "../shared/App";
import ReactDOM from "react-dom";

ReactDOM.hydrate(
  <App data={window.__INITIAL_DATA__}/>,
  document.getElementById('app')
);
