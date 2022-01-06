import React from 'react'
import './CrudStyletable.css'


const CrudTableRow = ({el}) => {
    const reinicio=el.reinicio.toString();
    const automatico=el.automatico.toString();
    
    return (
 
        <tr id="main-container" className="container">
           <td>{el.comprobante}</td>
           <td>{el.secuencia}</td>
           <td>{el.tipo}</td>
           <td>{el.nombre}</td>
           <td>{el.estado}</td>
           <td>{automatico}</td>
           <td>{reinicio}</td>
           <td>
             <button>Editar </button>
             <button>Eliminar</button>
             
           </td>
          
        </tr>         
    )
}


export default CrudTableRow;