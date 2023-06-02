import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <img className='footer__logo' src={require('../../assets/logo.png')} alt="" />
      <div className='redes__container'>
        <img src={require('../../assets/boton-whats.png')} alt="" />
        <img src={require('../../assets/boton-instagram.png')} alt="" />
        <img src={require('../../assets/boton-face.png')} alt="" />
        <div>

        </div>
        <div>

        </div>
      </div>
      <div className='marketing'>
<h6>2023 | ©Todos los derechos reservados</h6>
      
      <div className='damian'>
        <h6>by</h6>
<img src={require('../../assets/logo2.png')} alt="" />
</div>
      </div>
    </footer>
  )
}

export default Footer
