import React, { Component } from "react";
import { connect } from 'react-redux';
import { postProject, fetchAllProjects } from "../../apiCalls"
import { gatherProjects, addProject } from "../../actions/index"

class NewProjectForm extends Component {
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

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ form: false });
    const newProject = { ...this.state };
    postProject(newProject)
      .then(() => fetchAllProjects())
      .then(projects => this.props.gatherProjects(projects))
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({project_name: ''})
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

export const mapStateToProps = state => ({
  projects: state.projects
});

export const mapDispatchToProps = dispatch => ({
  addProject: project => dispatch(addProject(project)),
  gatherProjects: projects => dispatch(gatherProjects(projects))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm);
