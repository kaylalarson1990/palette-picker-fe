import React from 'react';
import {connect} from 'react-redux';
import './Palette.css'

const Palette = props => {
  return (
    <div className='palette-box'>
      <h4 className='palette-title'>{props.palette_name}</h4>
      <article className='box-color' style={{backgroundColor: props.c1}}>
        <img />
      </article>
      <article className='box-color' style={{backgroundColor: props.c2}}>
        <img />
      </article>
      <article className='box-color' style={{backgroundColor: props.c3}}>
        <img />
      </article>
      <article className='box-color' style={{backgroundColor: props.c4}}>
        <img />
      </article>
      <article className='box-color' style={{backgroundColor: props.c5}}>
        <img />
      </article>
      <p>🗑</p>
    </div>
  )
}

export default connect(null)(Palette)