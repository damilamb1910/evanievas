import React from 'react'
import  { useEffect, useRef, useState } from 'react'
import Carrousel from '../carrousel/Carrousel';
import Loading from '../loading/Loading'
import './itemDetail.css'

const ItemDetail = ({producto}) => {
  const [localWidth,setLocalWidth]=useState(window.innerWidth)
  const [loading,setLoading]=useState(true)
  const cambiarWidth=()=>{
    setLocalWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", cambiarWidth)
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='itemDetail'>
       <Loading loading={loading}/>
      <h3>{producto.titulo}</h3>
      

      <div className='itemDetail__info__container' >
      <h6>{producto.descripcion}</h6>
      
     
     
     { producto.categoria   &&    (  localWidth > 1000 ? (<Carrousel widht={producto.widht} height={producto.height} video={producto.video} images={producto.imagenes}/>)  : (<Carrousel widht={localWidth - 200} height={100} video={producto.video} images={producto.imagenes}/>) )    }
   


      </div>
      
   
    
      
    </div>
  )
}

export default ItemDetail
