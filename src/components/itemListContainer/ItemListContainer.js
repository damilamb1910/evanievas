import React from 'react'
import ItemList from '../itemList/ItemList'
import './itemListContainer.css'
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase.js"
import { getDocs,collection,query,where } from "firebase/firestore"
import { useState,useEffect } from "react"
import Loading from '../loading/Loading'

const ItemListContainer = () => {
  const [listProductos,setListProductos]=useState([])
const [loading,setLoading]=useState(true)
const {categoriaId}=useParams()

  useEffect(()=>{

    setLoading(true)
        const prodCollection=collection(db,'productos')
    
         if(categoriaId){
           
            const q=query(prodCollection,where('categoria','==',categoriaId))
            getDocs(q)
        .then(data => setListProductos(data.docs.map(product=>
             ({...product.data(),id:product.id})))).finally(()=>{setLoading(false)})
        }else{
        
        getDocs(prodCollection)
        .then(data => setListProductos(data.docs.map(product=>
             ({...product.data(),id:product.id})))).finally(()=>{setLoading(false)})
        }
        },[categoriaId])
        
  return (
    <div className='itemListContainer' >
      <Loading loading={loading}/>
      <div className='itemListContainer__head'>
       
      <h2>MI GALERIA</h2>
      {categoriaId && <h3>{categoriaId}</h3>}
      </div>
      
      <ItemList listProductos={listProductos}/>
    </div>
  )
}

export default ItemListContainer
