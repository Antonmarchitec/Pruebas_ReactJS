import React from 'react'
import "../estilos/Header.css"
import  ColocarImagen from "../imagenes/testimonio-img5.jpg"

export const Header = (props) => {
  return (
    <nav className='containerHeader'>
        <div className='containerHeader_contLogo'>
          <h1 className='containerHeader_contBtn_logo'>MyLogo</h1>   
        </div>

        <ul className='containerHeader_contNabvar'>
            <li className='containerHeader_contNabvar_li'><a href='/' className='link'>{props.item1}</a></li>
            <li className='containerHeader_contNabvar_li'><a href='/' className='link'>{props.item2}</a></li>
            <li className='containerHeader_contNabvar_li'><a href='/' className='link'>{props.item3}</a></li>
            <li className='containerHeader_contNabvar_li'><a href='/' className='link'>{props.item4}</a></li>
        </ul>

        <div className='containerHeader_contBtn'>
          <img src={ColocarImagen} width="100%" height="100%"/>
          <img src={require('../imagenes/testimonio-img5.jpg')} width="100%" height="100%"/>
          <img src={require(`../imagenes/testimonio-${props.imagen}.jpg`)} width="100%" height="100%"/>
        </div>
    </nav>
  )
}

//export default Header