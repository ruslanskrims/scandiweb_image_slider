import React from "react";
import ReactDOM from "react-dom";
import { Slider } from "./src/components";
import { images } from "./src/images";
ReactDOM.render(<Slider slides={images} />, document.getElementById("app"));
