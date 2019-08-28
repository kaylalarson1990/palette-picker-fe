import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postProject, fetchAllProjects} from '../../apiCalls';
import { gatherProjects } from '../../actions';

export class NewProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      form: false,
      project_name: "",
      error: '',
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
    let nameCheck = this.props.projects.find(project => {
      return project.project_name === this.state.project_name
    })
    if(nameCheck){
      this.setState({ error: 'Name Already Exist'})
      return 
    }
    await postProject({project_name: this.state.project_name})
    let projects = await fetchAllProjects()
    this.props.updateProjectsList(projects)
    this.setState({ form: false, error: ''})
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
            {this.state.error}
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

const mapStateToProps = store => ({
  projects: store.projects
})

const mapDispatchToProps = dispatch => ({
  updateProjectsList: (projects) => dispatch(gatherProjects(projects))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm);
