import React, { Component } from "react";
import randomHexColor from "random-hex-color";
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
        <section class="palette-container">
          <div
            id="color1"
            class="color-container"
            style={{ backgroundColor: colors[0] }}
          >
            <img
              src={lockOne}
              id="1"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(0)}
            />
            <p class="hex-color">{colors[0]}</p>
          </div>
          <div
            id="color2"
            class="color-container"
            style={{ backgroundColor: colors[1] }}
          >
            <img
              src={lockTwo}
              id="2"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(1)}
            />
            <p class="hex-color">{colors[1]}</p>
          </div>
          <div
            id="color3"
            class="color-container"
            style={{ backgroundColor: colors[2] }}
          >
            <img
              src={lockThree}
              id="3"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(2)}
            />
            <p class="hex-color">{colors[2]}</p>
          </div>
          <div
            id="color4"
            class="color-container"
            style={{ backgroundColor: colors[3] }}
          >
            <img
              src={lockFour}
              id="4"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(3)}
            />
            <p class="hex-color">{colors[3]}</p>
          </div>
          <div
            id="color5"
            class="color-container"
            style={{ backgroundColor: colors[4] }}
          >
            <img
              src={lockFive}
              id="5"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(4)}
            />
            <p class="hex-color">{colors[4]}</p>
          </div>
        </section>
        <section class="generate-palette">
          <input
            type="button"
            class="generate-palette-btn button"
            value="Click me to see more colors"
            onClick={this.generateHexColors}
          />
        </section>
        {/* <NewPaletteForm colors={this.state.colors} /> */}
      </div>
    );
  }
}

export default Generator;
