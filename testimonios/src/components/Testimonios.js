import React from 'react'
import '../estilos/Testimonios.css'


//TRABAJO CON COMPONENTES FUNCIONALES
export const Testimonios = (props) => {
  return (
    <div className='contenedor-testimonio'>
      <img className ='imagen-testimonio' 
           src = {require(`../imagenes/testimonio-${props.imagen}.jpg`)} 
           alt = 'imagen1'/>

      <div className='contenedor-texto-testimonio'>
         <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
         <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
         <p className='texto-testimonio'>{props.testimonio}</p>
      </div>     
    </div>


    
  )
}

//export default Testimonios