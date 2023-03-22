import React, { Component } from "react";

export default class CComponent extends Component {
  state = {
    message: "Class Component",
    time: new Date().toString(),
  };

  showDate = () => {
    this.setState({ time: new Date().toString() });
  };

  componentDidMount() {
    console.log("I am from Did Mount");
    this.interval = setInterval(this.showDate, 1000);
  }

  componentDidUpdate() {
    console.log("I am from Update");
  }

  componentWillUnmount() {
    console.log("I am from Unmount");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="ccomponent">
        {this.state.message}
        <div>{this.state.time}</div>
      </div>
    );
  }
}
