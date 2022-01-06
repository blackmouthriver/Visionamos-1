import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';

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

const initialForm = {

    agency:"",
    bill:"",
    client:"",
    comment:"",
    reference:"",
    debit:"",
    credit:"",
    id: null,
}



const Crudform = () => {
    const [form, setForm] = useState(initialForm);
    const history = useHistory();

    function redireccionar(){
        history.push('/movimientos/captura');
      }

    const handleChange =(e) =>{

    }

    const handleSubmit =(e) =>{
        
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                        id="selectitems"
                        type="text" 
                        name="Agencia " 
                        placeholder='Seleccionar' 
                        >
                </input>
                <input 
                        id="selectitems"
                        type="text" 
                        name="Cuenta " 
                        placeholder='Ingresar cuenta' 
                        >
                 </input>
                <input  
                        id="selectitems"
                        type="text" 
                        name="Cliente " 
                        placeholder='Ingresar cliente' 
                        >
                </input>
                <input 
                        id="selectitemstree"
                        type="text" 
                        name="Comentario " 
                        placeholder='Ingresar Comentario' 
                        >
                </input>
                <input 
                        id="selectitemsref"
                        type="text" 
                        name="Referencia " 
                        placeholder='Ingresar referencia' 
                        >
                </input>
                <input 
                        id="selectitemstwo"
                        type="text" 
                        name="Debito " 
                        placeholder='0' 
                        >
                </input>
                <input 
                        id="selectitemstwo"
                        type="text" 
                        name="Credito " 
                        placeholder='0' 
                        >
                </input>
                <button 
                       id="buttonselectoption">
                       <FontAwesomeIcon id="iconbutabletrash" 
                       icon={faTrash} />
                       </button>
            </form>
                <div>
                    <button id="ButtonAgregar">
                             Agregar 
                             <FontAwesomeIcon id="iconbuttonplus" 
                             icon={faTimes} />
                    </button>
                </div>
                <div id="footerView">
                    <input
                          id="resulselect"
                          type="text" 
                          name="total " 
                          placeholder='Total'>  
                    </input>
                    <input 
                          id="resulselecttwo"
                          type="text" 
                          name="SumaDebito " 
                          placeholder='$ 0'>
                    </input>
                    <input 
                          id="resulselecttwo"
                          type="text" 
                          name="SumaCredito " 
                          placeholder='$ 0'>
                    </input>
                    <button id="ButtonAceptar"
                     onClick={() =>redireccionar()}>
                    Aceptar
                    </button>
                </div>
        </div>
    )
}

export default Crudform
