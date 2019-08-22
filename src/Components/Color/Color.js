import React, { Component } from "react";
import "./Color.css";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locked: false,
      hex: ""
    };
  }

  checkIfLocked = () => {
    if (this.state.locked) {
      return require("../../images/locked.svg");
    } else {
      return require("../../images/unlocked.svg");
    }
  };

  lockColor = color => {
    if (this.state.locked) {
      this.setState({
        locked: false,
        // hex: ""
      });
    } else {
      this.setState({
        locked: true,
        // hex: color
      });
    }
  };

  render() {
    let lock = this.checkIfLocked();
    // let hexcode = this.generateHexCode();
    return (
      <section>
        <img
          className="saved-color"
          src={lock}
          onClick={e => this.lockColor()}
        />
        <p>{this.props.hex}</p>
      </section>
    );
  }
}

export default Color;
