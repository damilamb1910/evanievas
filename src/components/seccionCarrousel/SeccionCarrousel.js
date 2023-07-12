import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './seccionCarrousel.css'
import { Link } from 'react-router-dom';

const SeccionCarrousel = () => {
  return (
    <div className='seccion__carrouesel__container' >

      <div className='seccion__carrousel__column'>

      </div>
       <Carousel  className='carrousel'>
      
    <Carousel.Item > <Link to={'/productos/artesanias'}>
    <img className="d-block w-100"  src={require('../../assets/artesanias.jpg')}
        alt="First slide"
      />
     <Carousel.Caption>
          <h2>ARTESANIAS</h2>
          
        </Carousel.Caption>
    </Link>  
    </Carousel.Item>
    <Carousel.Item > 
      <Link to={'/productos/pinturas'}>
      <img className="d-block w-100"   src={require('../../assets/pintura.jpg')}
        alt="First slide"
      />
     <Carousel.Caption>
          <h2>PINTURAS</h2>
         
        </Carousel.Caption>
      </Link>
       
    </Carousel.Item>
  

    
  </Carousel>
  <div className='seccion__carrousel__column'></div>
    </div>
  )
}

export default SeccionCarrousel
