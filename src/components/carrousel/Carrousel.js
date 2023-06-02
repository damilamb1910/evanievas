import Carousel from 'react-bootstrap/Carousel';
import "./carrousel.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../Loading/Loading'
import { useState } from 'react';

const Carrousel=({images,windowWidth})=> {
  
  console.log(windowWidth)

  

  return (
    <Carousel  className='carrousel'>
      
        {images.map((image, index) => ( <Carousel.Item key={index}>   <img className={(windowWidth<780) ? "carrousel__img" : "d-block w-100" } src={image}
          alt="First slide"
        />
       
      </Carousel.Item>
    
  )) }
      
    </Carousel>
  );
  
}

export default Carrousel