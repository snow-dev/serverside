import React from "react";
import App from "../shared/App";
import ReactDOM from "react-dom";

ReactDOM.hydrate(
   <App data="Tyler"/>,
  document.getElementById('app')
 );