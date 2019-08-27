import React, {Component} from 'react';
import './NewPaletteForm.css'

export class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: false,
      palatteName: ''
    }
  }

  populateForm = () => {
    this.setState({ form: true})
  }

  handleChange = e => {
    this.setState({
      palatteName: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ form: false})
  }

  render() {
    return (
      <section>
      {!this.state.form && <button className='toggle-form' onClick={e => this.populateForm()}>Save palette</button>}
      { this.state.form && 
        <form>
          <input className='palette-name' placeholder='Enter Palatte Name...' value={this.state.palatteName} onChange={e => this.handleChange(e)}/>
          <button onClick={e => this.handleSubmit(e)}>Submit</button>
        </form>
      }
      </section>
    )
  }
}

export default NewPaletteForm;