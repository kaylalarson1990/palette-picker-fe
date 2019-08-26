import React from "react";
import { connect } from "react-redux";
import Projects from "../Projects/Projects";

export const ProjectContainer = props => {
    console.log('1', props)
  const projects = props.projects.length ?
        props.projects.reverse().map(project => (
          <Projects key={project.id} project={project} />
        ))
        : <p>Start saving your favorite color palettes - save to a new project!</p>

  return (
    <section class="saved-projects-section">
      {projects}
    </section>
  );
};

export const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectContainer);