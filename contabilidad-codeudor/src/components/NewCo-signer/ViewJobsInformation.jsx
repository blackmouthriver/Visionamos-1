import React from 'react'

const ViewJobsInformation = () => {
    return (
        <div id='Container'>
            <div>
                <label id='labelTitleJobOne'>Empresa</label>
                <input id='inputText' type="text" placeholder='Ingrese nombre empresa'/>  
                <label id='labelTitleJobTwo' >Dirección empresa</label>
                <input id='inputText' type="text" placeholder='Ingrese dirección'/> 
                <label id='labelTitleJobThree'>Barrio empresa</label> 
                <input id='inputText' type="text" placeholder='Ingrese barrio'/>
                <label id='labelTitleJobFour'>Teléfono empresa</label> 
                <input id='inputText' type="text" placeholder='Ingrese teléfono'/>
            </div>
            <div>
                <label id='labelTitleJobFive'>Tipo contrato</label>
                <select id='inputText'>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Obra y labor</option>
                        <option value="2">Indefinido</option>
                        <option value="3">Fijo</option>
                </select> 
                <label id='labelTitleJobSix'>Jornada laboral</label>
                <select id='inputText'>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Completa(diurno)</option>
                        <option value="2">Rotativo</option>
                        <option value="3">Medio tiempo</option>
                 </select> 
                <label id='labelTitleJobSeven'>Cargo</label> 
                <select id='inputText'>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Auxiliar</option>
                        <option value="2">Jefe (a) Area</option>
                        <option value="3">Operario (a)</option>
                        <option value="3">Administrativo (a)</option>
                 </select> 
                <label id='labelTitleJobEigth'>Fecha ingreso empresa</label> 
                <input id='inputText' type="date" placeholder='Seleccione fecha'/>
            </div>
                
        </div>
    )
}

export default ViewJobsInformation
