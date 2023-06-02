import React, { useEffect, useState } from 'react'
import './loading.css'




const Loading = ({loading}) => {
    const[display,setDisplay]=useState(true)

useEffect(()=>{

setDisplay(loading)

},[loading])

    

  return (
    <div className={display ? 'loading__container' :'displaynone'}>
        <img  src={require('../../assets/logo-eva.gif')} alt="" />
     
    </div>
  )
}

export default Loading
