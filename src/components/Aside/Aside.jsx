import React, { PureComponent } from "react";

import "./Aside.css";

class Aside extends PureComponent {
  render() {
    return React.createElement(
      "div",
      { className: "pure_component" },
      "this is PureComponent using PureComponent from react and also using React.createElement"
    );
  }
}

export default Aside;
