import React, { Component } from "react";
import { connect } from "react-redux";
import Palette from "../Pallete/Palette";
import "./Projects.css";
import {
  deleteProject,
  fetchAllProjects,
  fetchAllPalettes
} from "../../apiCalls";
import { gatherProjects, gatherPalettes } from "../../actions";

export const Projects = props => {
  let paletteList = props.palettes.map(palette => {
    if (palette.project_id === props.id) {
      return <Palette {...palette} key={palette.id} />;
    } else {
      return null;
    }
  });

  const handleDelete = async id => {
    await deleteProject({ id });
    let projects = await fetchAllProjects();
    props.gatherProjects(projects);
    let palettes = await fetchAllPalettes();
    props.gatherPalettes(palettes);
  };

  return (
    <section className="project-section">
      <div className="project-info">
        <h3>{props.name}</h3>
        <p className="delete-btn" onClick={e => handleDelete(props.id)}>
          🗑
        </p>
      </div>
      <section>{paletteList}</section>
    </section>
  );
};

export const mapStateToProps = store => ({
  palettes: store.palettes
});

export const mapDispatchToProps = dispatch => ({
  gatherProjects: projects => dispatch(gatherProjects(projects)),
  gatherPalettes: palettes => dispatch(gatherPalettes(palettes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
