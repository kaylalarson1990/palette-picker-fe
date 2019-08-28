import React, {Component} from 'react';
import {connect} from 'react-redux'
import './NewPaletteForm.css'

export class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: false,
      project_name: '',
      palette_name: ''
    }
  }

  populateForm = () => {
    this.setState({ form: true})
  }

  handleChange = e => {
    this.setState({
      palette_name: e.target.value
    })
  }

  updateProject = e => {
    this.setState({ project_name: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    let projId = this.props.projects.filter(project => {
      if(project.project_name === this.state.project_name){
        return project.id
      }
    })
    this.props.addNewPalette({palette: this.state.palette_name, project: projId[0].id})
    this.setState({ form: false})
  }

  render() {
    let projects = this.props.projects.map(project => {
      return <option>{project.project_name}</option>
    })
    return (
      <section>
      {!this.state.form && <button className='toggle-form' onClick={e => this.populateForm()}>Save palette</button>}
      { this.state.form && 
        <form>
          <select onChange={e => this.updateProject(e)}>
            <option>SELECT PROJECT</option>
            {projects}
          </select>
          <input name="palette-name" className='palette-input-name' placeholder='Enter Palatte Name...' value={this.state.palatte_name} onChange={e => this.handleChange(e)}/>
          <button onClick={e => this.handleSubmit(e)}>Submit</button>
        </form>
      }
      </section>
    )
  }
}

export const mapStateToProps = store => ({
  ...store
})

export default connect(mapStateToProps)(NewPaletteForm);