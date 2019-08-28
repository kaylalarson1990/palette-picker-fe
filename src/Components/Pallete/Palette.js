import React from 'react';
import {connect} from 'react-redux';
import './Palette.css'
import {gatherPalettes } from '../../actions';
import {fetchAllPalettes, deletePalette} from '../../apiCalls'

const Palette = props => {
  const handleDelete = async id => {
    await deletePalette({id})
    let palettes = await fetchAllPalettes()
    props.removePalette(palettes)
  }

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
      <p onClick={e => handleDelete(props.id)}>🗑</p>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  removePalette: palettes => dispatch(gatherPalettes(palettes))
})

export default connect(null, mapDispatchToProps)(Palette)