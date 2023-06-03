import React from 'react'
import './itemDetailContainer.css'
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { getDoc,collection,doc } from "firebase/firestore"
import { useEffect,useState } from "react"
import ItemDetail from '../itemDetail/ItemDetail';


const ItemdetailContainer = () => {
  const [producto,setProducto]=useState({})
  const {id}=useParams()

    
    useEffect(()=>{
        
        window.scrollTo(0, 0)
        const productCollection=collection(db,'productos')
        const refDoc = doc(productCollection,id)
        getDoc(refDoc)
        .then((res)=>{
            setProducto(
                {
                    id:res.id, ...res.data()
                }
            )
        })
       },[id])

  return (
    <div className='itemDetailContainer'>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemdetailContainer
