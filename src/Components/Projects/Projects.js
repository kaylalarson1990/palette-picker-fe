import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Projects.css'

const Projects = (props) => {
  let paletteList = props.palettes.filter(palette => {
    if(palette.project_id === props.id){
    return palette
    }
  })
  console.log(paletteList)
  return(
    <section className='project-section'>
      <h3>{props.name}</h3>
      {paletteList.length &&
      <div className='palette-box'>
        <article className='box-color' style={{backgroundColor: paletteList[0].c1}}>
          <img />
        </article>
        <article className='box-color' style={{backgroundColor: paletteList[0].c2}}>
          <img />
        </article>
        <article className='box-color' style={{backgroundColor: paletteList[0].c3}}>
          <img />
        </article>
        <article className='box-color' style={{backgroundColor: paletteList[0].c4}}>
          <img />
        </article>
        <article className='box-color' style={{backgroundColor: paletteList[0].c5}}>
          <img />
        </article>
      </div>
      }
    </section>
  )
}

const mapStateToProps = store => ({
  palettes: store.palettes
})

export default connect(mapStateToProps)(Projects);