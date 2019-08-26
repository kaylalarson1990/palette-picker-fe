import React from "react";
import { connect } from "react-redux";
import Projects from "../Projects/Projects";

export const ProjectContainer = props => {
  const savedProjects = props.projects.length ?
        props.projects.reverse().map(project => (
          <Projects key={project.id} project={project} />
        ))
        : <p>Start saving your favorite color palettes to a new project!</p>

  return (
    <section class="saved-projects-section">
      {savedProjects}
    </section>
  );
};

export const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectContainer);