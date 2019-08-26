import React, { Component } from "react";
import ColorSwatch from "../ColorSwatch/ColorSwatch";
import { connect } from "react-redux";

const Projects = props => {
    console.log('2', props)
    const savedPalettes = props.palettes.filter(
      palette => palette.project_id === props.project.id
    );
    const palettes = savedPalettes.map(palette => (
      <ColorSwatch data={palette} key={palette.id} projectID={props.project.id} />
    ));
    return (
      <section className="Project">
        <div className="project-header">
          <div>
            <h3 className="project-title">{props.project.project_name}</h3>
          </div>
          {/* <button
            onClick={() => props.fetchDeleteProject(props.project.id)}
          >
            <i class="fas fa-trash-alt trash-btn fa-2x" />
          </button> */}
        </div>
        <div className="project-palettes">{palettes}</div>
      </section>
    );
};

export const mapStateToProps = state => ({
  palettes: state.palettes
});

export default connect(mapStateToProps)(Projects);
