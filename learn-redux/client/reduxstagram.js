// let's go!
import React from "react";
import { render } from "react-dom";

// Import css which is handled by webpack
import css from "./styles/style.styl";

// Import components
import Main from "./components/Main";

render(<Main />, document.getElementById("root"));
