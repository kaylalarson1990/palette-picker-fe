import React, { Component } from "react";
import { connect } from "react-redux";
import Projects from "../Projects/Projects";
import { fetchAllProjects } from "../../apiCalls";
import { gatherProjects } from "../../actions/index";

export class ProjectContainer extends Component {
  componentDidMount() {
    fetchAllProjects().then(data => this.props.gatherProjects(data));
  }

  render() {
    console.log(this.props.projects.length);
    const savedProjects = !this.props.projects.length ? (
      <p>Start saving your favorite color palettes to a new project!</p>
    ) : (
      this.props.projects.map(project => (
        <Projects
          key={project.id}
          name={project.project_name}
          id={project.id}
        />
      ))
    );
    return (
      <>
        <section className="saved-projects-section">{savedProjects}</section>
      </>
    );
  }
}

export const mapStateToProps = state => ({
  projects: state.projects
});

export const mapDispatchToProps = dispatch => ({
  gatherProjects: projects => dispatch(gatherProjects(projects))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer);
