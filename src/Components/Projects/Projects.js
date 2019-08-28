import React, {Component} from 'react';
import {connect} from 'react-redux';
import Palette from '../Pallete/Palette'
import './Projects.css'
import { deleteProject, fetchAllProjects, fetchAllPalettes } from '../../apiCalls';
import { gatherProjects, gatherPalettes } from '../../actions';

const Projects = (props) => {
  let paletteList = props.palettes.map(palette => {
    if(palette.project_id === props.id){
    return <Palette {...palette} key={palette.id} />
    } else {
      return null
    }
  })

  const handleDelete = async id => {
    await deleteProject({id})
    let projects = await fetchAllProjects()
    props.removeProject(projects)
    let palettes = await fetchAllPalettes()
    props.removePalette(palettes)
  }

  return(
    <section className='project-section'>
    
      <div className='project-info'>
        <h3>{props.name}</h3>
        <p onClick={e => handleDelete(props.id)}>🗑</p>
      </div>
      <section>
        {paletteList}
      </section>
    </section>
  )
}

const mapStateToProps = store => ({
  palettes: store.palettes
})

const mapDispatchToProps = dispatch => ({
  removeProject: projects => dispatch(gatherProjects(projects)),
  removePalette: palettes => dispatch(gatherPalettes(palettes))
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects);