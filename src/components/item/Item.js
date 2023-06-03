import React from 'react'
import './item.css'

const Item = ({producto}) => {
  return (
    <div className='item__container'>
      <div className='item__image__container'>
      <img src={producto.img} alt="" />
      </div>
        
        <h4>"{producto.titulo}"</h4>
      
    </div>
  )
}

export default Item
