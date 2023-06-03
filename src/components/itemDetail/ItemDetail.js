import React from 'react'
import  { useEffect, useRef, useState } from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div>
      <h3>{producto.titulo}</h3>
      <h6>{producto.descripcion}</h6>
      <img src={producto.img} alt="" />
    </div>
  )
}

export default ItemDetail
