import React, { Component } from "react";
import ColorSwatch from "../ColorSwatch/ColorSwatch";
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

  // checkIfLocked = () => {
  //   if (this.state.isLocked) {
  //     return require("../../images/locked.svg");
  //   } else {
  //     return require("../../images/unlocked.svg");
  //   }
  // };

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

  determineIfColorIsLocked = index => {
    const { isLocked } = this.state;
    if(isLocked[index]) {
      return ""
    } else {
      return "saved"
    }
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

    return (
      <div>
        <h1>Palette Picker</h1>
        <section class="palette-container">
          <div
            id="color1"
            class="color-container"
            style={{ backgroundColor: colors[0] }}
          >
            <button
              id="1"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(0)}
            >
              <i
                id="1"
                class={`lock${this.determineIfColorIsLocked(0)}`}
              />
            </button>
            <p id="color1-name" class="color-hex">
              {colors[0]}
            </p>
          </div>
          <div
            id="color2"
            class="color-container"
            style={{ backgroundColor: colors[1] }}
          >
            <button
              id="2"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(1)}
            >
              <i
                id="2"
                class={`lock${this.determineIfColorIsLocked(1)}`}
              />
            </button>
            <p id="color2-name" class="color-hex">
              {colors[1]}
            </p>
          </div>
          <div
            id="color3"
            class="color-container"
            style={{ backgroundColor: colors[2] }}
          >
            <button
              id="3"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(2)}
            >
              <i
                id="3"
                class={`lock${this.determineIfColorIsLocked(2)}`}
              />
            </button>
            <p id="color3-name" class="color-hex">
              {colors[2]}
            </p>
          </div>
          <div
            id="color4"
            class="color-container"
            style={{ backgroundColor: colors[3] }}
          >
            <button
              id="4"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(3)}
            >
              <i
                id="4"
                class={`lock${this.determineIfColorIsLocked(3)}`}
              />
            </button>
            <p id="color4-name" class="color-hex">
              {colors[3]}
            </p>
          </div>
          <div
            id="color5"
            class="color-container"
            style={{ backgroundColor: colors[4] }}
          >
            <button
              id="5"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockAHexColor(4)}
            >
              <i
                id="5"
                class={`lock${this.determineIfColorIsLocked(4)}`}
              />
            </button>
            <p id="color5-name" class="color-hex">
              {colors[4]}
            </p>
          </div>
        </section>
        <section class="generate-palette">
          <input
            type="button"
            class="generate-palette-btn button"
            value="Regenerate Colors"
            onClick={this.generateHexColors}
          />
        </section>
        {/* <Form colors={this.state.colors} /> */}
      </div>
    );
  }
}

export default Generator;
