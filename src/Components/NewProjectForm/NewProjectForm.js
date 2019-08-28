import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postProject, fetchAllProjects} from '../../apiCalls';
import { gatherProjects } from '../../actions';

export class NewProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      form: false,
      project_name: ""
    };
  }

  populateForm = () => {
    this.setState({ form: true });
  };

  handleChange = e => {
    this.setState({
      project_name: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await postProject({project_name: this.state.project_name})
    let projects = await fetchAllProjects()
    this.props.updateProjectsList(projects)
    this.setState({ form: false})
  }

  render() {
    return (
      <section>
        {!this.state.form && (
          <button className="toggle-form" onClick={e => this.populateForm()}>
            Save project
          </button>
        )}
        {this.state.form && (
          <form>
            <input
              className="project-name"
              placeholder="Enter Project Name..."
              value={this.state.project_name}
              onChange={e => this.handleChange(e)}
            />
            <button onClick={e => this.handleSubmit(e)}>Submit</button>
          </form>
        )}
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateProjectsList: (projects) => dispatch(gatherProjects(projects))
})

export default connect(null, mapDispatchToProps)(NewProjectForm);
