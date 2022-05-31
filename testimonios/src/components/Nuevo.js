import React from 'react'
import '../estilos/Nuevo.css'

export const Nuevo = (props) => {
  return (
    <div className='container'>
        <h1 className='container_Title'>{props.titulo}</h1>
        <h2 className='container_Subtitle'>{props.subtitulo}</h2>
        <section className='container_contBox'>
            <div className='container_contBox_box'>
                <h1 className='container_contBox_box_title'>{props.caja1}</h1>

                <div className='container_contBox_box_image'>
                    <img src = { require(`../imagenes/testimonio-${props.image1}.jpg`)}
                    alt="image1" width="100%" height="100%"/>
                </div>
                
            </div>  

            <div className='container_contBox_box'>
                <h1 className='container_contBox_box_title'>{props.caja2}</h1>
                <div className='container_contBox_box_image'>
                    <img src = { require(`../imagenes/testimonio-${props.image2}.jpg`)}
                    alt="image2" width="100%" height="100%"/>
                </div>
            </div>  

            <div className='container_contBox_box'>
                <h1 className='container_contBox_box_title'>{props.caja3}</h1>
                <div className='container_contBox_box_image'>
                    <img src = { require(`../imagenes/testimonio-${props.image3}.png`)}
                    alt="image2" width="100%" height="100%"/>
                </div>
            </div>  
        </section>
       


    </div>
  )
}

//export default Nuevo