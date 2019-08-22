import React, {Component} from 'react';

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
      colorFive: ''
    }
  }
  
  render(){
    return (
      <main>
        <h1>Palette Picker</h1>
      </main>
    )
  }
}

export default Generator;