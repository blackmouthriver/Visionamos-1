import React from 'react'
import { useHistory } from 'react-router-dom';
import Cobelen from "./Image/Cobelen.jfif";
import Breadcrmb from './NavabrAndBreadcrumb/Breadcrumb';

const Home = () => {
  const history = useHistory();

  function redireccionar(){
    history.push('/CREACIÓN DE MOVIMIENTOS CONTABLES');
  }
  function redireccionarTWO(){
    history.push('/NUEVO CODEUDOR');
  }
    return (
        <div>
          <Breadcrmb />
          <div>Hola es toy en inicio</div> 
          <div> 
          <img  id='imagen1' src={Cobelen} />
          </div>
          <button 
          id='ButtonAceptar'
          onClick={()=>redireccionar()}>Creación de movimientos</button> 
          <button 
          id='ButtonAceptar'
          onClick={()=>redireccionarTWO()}>Nuevo codeudor</button> 
        </div>
    )
}

export default Home
