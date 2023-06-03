import React, { useEffect, useState } from 'react'
import './loading.css'




const Loading = ({loading}) => {
    


    

  return (
    <div className={loading ? 'loading__container' :'displaynone'}>
        <img  src={require('../../assets/logo-eva.gif')} alt="" />
     
    </div>
  )
}

export default Loading
