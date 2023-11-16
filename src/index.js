import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style.css";
import App from "./App";
import {ThemeProvider} from "./Theme"
ReactDOM.render(<ThemeProvider><App /></ThemeProvider>, document.getElementById("root"));
