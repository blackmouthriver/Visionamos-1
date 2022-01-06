import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import Crudtablerow from './Crudtablerow';
const CrudView = ({data}) => {
    return (
        <div>

            <thead id="tablehead">
                    <tr>
                        <th  scope="col">AGENCIA</th>
                        <th  scope="col">CUENTA</th>
                        <th  scope="col">CLIENTE</th>
                        <th  scope="col">COMENTARIO</th>
                        <th  scope="col">REFERENCIA</th>
                        <th  scope="col">DB</th>
                        <th  scope="col">CR</th>
                    </tr>
            </thead>
            <tbody>
                    {data.length === 0 ?<tr><tb colSpan="7">No hay Datos en la tabla</tb></tr>:data.map(el=><Crudtablerow key={el.id} el={el}/>)}
            </tbody>
        </div>
    )
}

export default CrudView
