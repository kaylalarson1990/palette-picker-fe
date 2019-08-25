import React, {Component} from 'react';
import Color from '../Color/Color';

class Generator extends Component {
  constructor() {
    super();
    this.state = {
      projectName: '',
      paletteName: '',
      colorOne: '',
      colorTwo: '',
      colorThree: '',
      colorFour: '',
      colorFive: '',
    }
  }

  generateHexCode = () => {
      return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
  };
    
    render(){
     let colorsArray = [
        this.state.colorOne,
        this.state.colorTwo,
        this.state.colorThree,
        this.state.colorFour,
        this.state.colorFive
      ]

      let paletteList = colorsArray.map(color => {
        if(color === ''){
          let hex = this.generateHexCode();
          return <Color hex={hex} />
        } else {
          return <Color hex='Blue' />
        }
      })
    
    return (
      <main>
        <h1>Palette Picker</h1>
        {paletteList}
      </main>
    )
  }
}

export default Generator;