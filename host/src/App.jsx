import React from "react";
import ReactDOM from "react-dom";
import Example from "remote/Example";

import BrScan from "brscan/BrScan";
import "./index.css";

const App = () => (
  <div className="container">
    {/* <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div> */}
    <Example text={"example"}/>
    <BrScan />

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
