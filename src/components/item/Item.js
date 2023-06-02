import React from 'react'
import './item.css'

const Item = () => {
  return (
    <div className='item__container'>
        <img src={require('../../assets/eva_back.png')} alt="" />
        <h4>Titulo</h4>
      
    </div>
  )
}

export default Item
