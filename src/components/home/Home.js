
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import './home.css'
import SeccionCarrousel from '../seccionCarrousel/SeccionCarrousel';
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';

const Home = () => {

  const cambiar=()=>{
    setLoading(false)
  }
  const[loading,setLoading]=useState(true)

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true)
    
    
  }, [])


  return (
    <div className='home__container'>
      <Loading loading={loading}/>
        <div className='landing'>
          <img onLoad={cambiar} className='landing__image' src={require('../../assets/nombre_eva.png')} alt="" />
        <Link to={'/productos'}><button className='boton__home'> <span>MI GALERIA</span> </button></Link>

        </div>
        <SeccionCarrousel/>
        <div className='frase__container'>
          <h3>"El lienzo es mi ventana al mundo, donde las pinceladas dan vida a mis sueños y emociones."</h3>
        </div>
        </div>
    
  )
}

export default Home
