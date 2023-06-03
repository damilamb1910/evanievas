import React from 'react'
import Item from '../item/Item'
import './itemList.css'
import { Link } from 'react-router-dom'

const ItemList = ({listProductos}) => {
  return (
    <div className='itemList'>
      {listProductos.map((prod, i)=> 

<Link key={`${prod.nombre}-${i}`} to={`/detail/${prod.id}`}>
<Item key={`${prod.nombre}-${i}`} producto={prod} /></Link>)}

    </div>
  )
}

export default ItemList
