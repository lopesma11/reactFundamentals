import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <>
    <GlobalStyle /> <App />{" "}
  </>,
  document.getElementById("root")
);
