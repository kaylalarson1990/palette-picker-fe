import React, { Component } from "react";
import randomHexColor from "random-hex-color";
import NewPaletteForm from "../NewPaletteForm/NewPaletteForm"
import "./Generator.css";

class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["", "", "", "", ""],
      isLocked: [false, false, false, false, false]
    };
  }

  componentDidMount() {
    this.generateHexColors();
  }

  checkIfLocked = (index) => {
    if (this.state.isLocked[index]) {
      return require("../../images/locked.svg");
    } else {
      return require("../../images/unlocked.svg");
    }
  };

  lockAHexColor = palette => {
    const { isLocked } = this.state;
    const newLocked = isLocked.map((bool, index) => {
      if (index === palette) {
        return !bool;
      } else {
        return bool;
      }
    });
    this.setState({ isLocked: newLocked });
  };


  generateHexColors = () => {
    const { isLocked, colors } = this.state;
    const newColors = colors.map((color, index) => {
      return isLocked[index] ? color : randomHexColor();
    });
    this.setState({ colors: newColors });
  };

  render() {
    const { colors } = this.state;
    let lockOne = this.checkIfLocked(0);
    let lockTwo = this.checkIfLocked(1);
    let lockThree = this.checkIfLocked(2);
    let lockFour = this.checkIfLocked(3);
    let lockFive = this.checkIfLocked(4);

    return (
      <div>
        <h1>Palette Picker</h1>
        <section className="palette-container">
          <div
            id="color1"
            className="color-container"
            style={{ backgroundColor: colors[0] }}
          >
            <img
              src={lockOne}
              id="1"
              className="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(0)}
            />
            <p className="hex-color">{colors[0]}</p>
          </div>
          <div
            id="color2"
            className="color-container"
            style={{ backgroundColor: colors[1] }}
          >
            <img
              src={lockTwo}
              id="2"
              className="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(1)}
            />
            <p className="hex-color">{colors[1]}</p>
          </div>
          <div
            id="color3"
            className="color-container"
            style={{ backgroundColor: colors[2] }}
          >
            <img
              src={lockThree}
              id="3"
              className="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(2)}
            />
            <p className="hex-color">{colors[2]}</p>
          </div>
          <div
            id="color4"
            className="color-container"
            style={{ backgroundColor: colors[3] }}
          >
            <img
              src={lockFour}
              id="4"
              className="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(3)}
            />
            <p className="hex-color">{colors[3]}</p>
          </div>
          <div
            id="color5"
            className="color-container"
            style={{ backgroundColor: colors[4] }}
          >
            <img
              src={lockFive}
              id="5"
              className="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(4)}
            />
            <p className="hex-color">{colors[4]}</p>
          </div>
        </section>
        <section className="generate-palette">
          <input
            type="button"
            className="generate-palette-btn button"
            value="Click me to see more colors"
            onClick={this.generateHexColors}
          />
        </section>
        <NewPaletteForm />
      </div>
    );
  }
}

export default Generator;
