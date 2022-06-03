//import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Testimonios} from './components/Testimonios';
import {Nuevo} from './components/Nuevo';



function App() {

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1 className='titulo_testimonio'>Bienvenidos al bloque</h1>
        
        <Testimonios
          nombre= "Emma Bostian"
          pais = "Suecia"
          imagen = "img1"
          cargo = "Ingeniera de Software"
          empresa = "Spotify"
          testimonio = "Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu"
        />

        <Testimonios
          nombre= "Richard Ponce"
          pais = "Bolivia"
          imagen = "img2"
          cargo = "Area contble"
          empresa = "Spotify new"
          testimonio = "contable de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu"
        />

        <Nuevo
         titulo= "Developer Divops"
         subtitulo = "Trabajamos en Sony"
         caja1 = "base1"
         caja2 = "base2"
         caja3 = "base3"
         image1 = "img1"
         image2 = "img2"
         image3 = "img3"
        />

        <Testimonios
          nombre= "Antonio Ponce"
          pais = "Estados Unidos"
          imagen = "img1"
          cargo = "Desarrollador FrontEnd"
          empresa = "GOOGLE"
          testimonio = "Desarrollador de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu"
        /> 
        
        <Nuevo
         titulo= "Developer BackEnd"
         subtitulo = "Trabajamos en Amazon"
         caja1 = "base4"
         caja2 = "base5"
         caja3 = "base6"
         image1 = "img1"
         image2 = "img2"
         image3 = "img3"
        />

        <Nuevo
         titulo= "Developer FrontEnd"
         subtitulo = "Trabajamos en Google"
         caja1 = "base7"
         caja2 = "base8"
         caja3 = "base9"
         image1 = "img4"
         image2 = "img5"
         image3 = "img3"
        />

        <Header
        item1 = "Casa"
        item2 = "Moto"
        item3 = "carro"
        item4 = "barco"
        imagen = "img6"/>

        
      </div>
    </div>
  );
}

export default App;
