import React, {Component} from 'react';
import {connect} from 'react-redux';
import Palette from '../Pallete/Palette'
import './Projects.css'

const Projects = (props) => {
  let paletteList = props.palettes.map(palette => {
    if(palette.project_id === props.id){
    return <Palette {...palette} key={palette.id} />
    } else {
      return null
    }
  })

  return(
    <section className='project-section'>
      <h3>{props.name}</h3>
      <section>
        {paletteList}
      </section>
    </section>
  )
}

const mapStateToProps = store => ({
  palettes: store.palettes
})

export default connect(mapStateToProps)(Projects);