import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileCsv} from "@fortawesome/free-solid-svg-icons";
import Crudform from "./Crudform";
import Breadcrmb from "../NavabrAndBreadcrumb/Breadcrumb";
const initialDb = [
    {
        id:1,
        agency: "agencia1",
        bill: "123456789",
        client: "Arturo Casas",
        comment: "hoy es lunes",
        reference: "12345678910",
        debit: "1000000",
        credit: "2345678",
    },
    {
        id:2,
        agency: "agencia2",
        bill: "234567891",
        client: "Armado Casas",
        comment: "hoy es martes",
        reference: "79634982334",
        debit: "23987482",
        credit: "238964879823",
    },
    {
        id:3,
        agency: "agencia3",
        bill: "781927381",
        client: "Alan Brito",
        comment: "hoy es Miercoles",
        reference: "987128741324",
        debit: "7349857435",
        credit: "345453423",
    },
    {
        id:4,
        agency: "agencia4",
        bill: "4798327434",
        client: "Elmo Rongo",
        comment: "hoy es jueves",
        reference: "345345345345",
        debit: "354345433",
        credit: "43545345",
    },
    {
        id:5,
        agency: "agencia5",
        bill: "739187391",
        client: "Elsa Porico",
        comment: "hoy es viernes",
        reference: "123719831",
        debit: "456456456",
        credit: "45645645",
    },
    {
        id:6,
        agency: "agencia6",
        bill: "157677567",
        client: "elvis Conio",
        comment: "hoy es sabado",
        reference: "136464364",
        debit: "46456456",
        credit: "6346456456",
    },
    {
        id:7,
        agency: "agencia7",
        bill: "1627836273",
        client: "Armando Puertas",
        comment: "hoy es Domingo",
        reference: "13467456754",
        debit: "57656756756",
        credit: "56756756",
    }
    ];

const CreationView = (initialDb) => {
    const [db, setDb] = useState([]);
    return ( 
          <div>
                <Breadcrmb />
                <div id="tablebody">     

                        <br></br>
                        <h1 className="title">CREACIÓN DE MOVIMIENTOS CONTABLES</h1>
                        <div id="globalconteinerhead">
                        <div class="container-sm">
                        <div id="conteinerHead">
                            <label id="label1">Comprobante*</label>

                                <select class="form-select" id="SelecComp">
                                    <option selected>Seleccione un comprobante</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label id="label1">Fecha contable*</label>
                                <input type="date" class="form-control" id="SelecComp" placeholder="Seleccione Fecha"></input>
                            </div>    
                            <textarea type="text" class="form-control" id="inputtext" placeholder="Descripción"></textarea>
                        </div>

                        <div class="contaniner" id="ContenedorArchivoCarga">
                            <div>
                            <div id="drag-area"  class="drag-area">
                                <p id="textcargue"> <FontAwesomeIcon id="iconfile" icon={faFileCsv} />      Arrastra o seleccione un archivo de su equipo</p>                    
                            </div>
                            <div id="progressAndButton">
                                <button id="buttonimport">Importar</button>
                            </div>
                            </div>

                            
                        </div> 
                        </div>
                        <div id="ContenedorTabla">
                            <table class="table">
                                    <thead id="tablehead">
                                        <tr>
                                        <th id="tableTop1">AGENCIA</th>
                                        <th id="tableTop1">CUENTA</th>
                                        <th id="tableTop1">CLIENTE</th>
                                        <th id="tableTop4">COMENTARIO</th>
                                        <th id="tableTop1">REFERENCIA</th>
                                        <th id="tableTop5">DB</th>
                                        <th id="tableTop5">CR</th>
                                        <th id="tableTop3">OPCIONES</th>
                                        </tr>
                                    </thead>
                                <Crudform data={db}/> 
                                    {/*<tbody>
                                        <tr>
                                        <td>
                                        <select class="form-select" id="select">
                                            <option selected>Seleccionar</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        </td>
                                        <td id="selectitems"><input id="selectitems" placeholder="Ingresar cuenta"></input></td>
                                        <td id="selectitems"><input id="selectitems" placeholder="Ingresar cliente"></input></td>
                                        <td id="selectitemstree"><input id="selectitemstree" placeholder="Ingresar comentario"></input></td>
                                        <td id="selectitems"><input id="selectitems" placeholder="Ingresar referencia"></input></td>
                                        <td id="selectitemstwo"><input id="selectitemstwo" placeholder="0"></input></td>
                                        <td id="selectitemstwo"><input id="selectitemstwo" placeholder="0"></input></td>
                                        <td id="selectitemsfour"><button id="buttonselectoption"><FontAwesomeIcon id="iconbutabletrash" icon={faTrash} /></button></td>
                                        </tr>
                                    </tbody>*/}
                            </table>
                            {/*
                            <div>
                            <div id="contenedorarchivo">
                            </div>
                            </div>
                            <div id="tablebutton">
                                <table class="table" id="table">
                                        <tr>
                                            <td id="tablebuttontwo"><label>Total</label></td>
                                            <td><input id="tablebuttontwo"></input></td>
                                            <td><input id="tablebuttontwo"></input></td>
                                        </tr>
                                </table>
                                <div>
                                <button id="ButtonAceptar">Aceptar</button>
                                </div>
                            </div>
                            */}
                        </div>
                </div>
         </div>
     );
}
 
export default CreationView;