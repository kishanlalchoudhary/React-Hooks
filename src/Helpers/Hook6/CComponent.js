import React, { Component } from "react";
import { CounterContext } from "./CounterContext";

export default class CComponent extends Component {
  render() {
    return (
      <div className="AppBorder">
        <h2>Class Component</h2>
        <CounterContext.Consumer>
          {(value) => <p>{value}</p>}
        </CounterContext.Consumer>
        <hr />
      </div>
    );
  }
}
