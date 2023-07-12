import Carousel from 'react-bootstrap/Carousel';
import "./carrousel.css"
import ReactPlayer from 'react-player/lazy'
import React, { useEffect, useRef, useState } from 'react'




const Carrousel=({images,windowWidth,video,widht,height})=> {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const handlePlayerReady = () => {
    playerRef.current?.getInternalPlayer()?.play();
    setIsPlaying(true);
   
  };
  
  console.log(windowWidth)

  

  return (
    <Carousel  className='carrousel'>

     {video && <Carousel.Item>

      <ReactPlayer className={(windowWidth<780) ? "carrousel__img" : "d-block w-100" } volume={0} muted={true} autoPlay controls  loop={true} playing={isPlaying} playsinline={true} onReady={handlePlayerReady} url={video} width={widht}  height={height}/>

      
     </Carousel.Item>  }
        { images &&   images.map((image, index) => ( <Carousel.Item key={index}> <img className={(windowWidth<780) ? "carrousel__img" : "d-block w-100" } src={image}
          alt="First slide"
        />
       
      </Carousel.Item>
    
  )) }
      
    </Carousel>
  );
  
}

export default Carrousel