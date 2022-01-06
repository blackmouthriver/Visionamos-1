import React from 'react'

const Crudtablerow = (el) => {
    return (
        <div>
            <tr>
                <td>{el.agency}</td>
                <td>{el.bill}</td>
                <td>{el.client}</td>
                <td>{el.comment}</td>
                <td>{el.reference}</td>
                <td>{el.debit}</td>
                <td>{el.credit}</td>
            </tr>
            
        {/*
            <tr>
                        <td id="selectitems">
                            <input id="selectitems" 
                                  placeholder="Agencia">  
                            </input>
                        </td>
                        <td id="selectitems"><input id="selectitems" placeholder="Ingresar cuenta"></input></td>
                        <td id="selectitems"><input id="selectitems" placeholder="Ingresar cliente"></input></td>
                        <td id="selectitemstree"><input id="selectitemstree" placeholder="Ingresar comentario"></input></td>
                        <td id="selectitems"><input id="selectitems" placeholder="Ingresar referencia"></input></td>
                        <td id="selectitemstwo"><input id="selectitemstwo" placeholder="0"></input></td>
                        <td id="selectitemstwo"><input id="selectitemstwo" placeholder="0"></input></td>
            </tr>
        */}
        </div>
    )
}

export default Crudtablerow
