import React from 'react'

const ViewContacInformation = () => {
    return (
        <div id='Container'>
        <div>
            <label id='labelTitleContactOne'>Dirección *</label>
            <input id='inputText' type="text" placeholder='Ingrese dirección'/>  
            <label id='labelTitleContactTwo'>Barrio</label>
            <input id='inputText' type="text" placeholder='Ingrese barrio'/> 
            <label id='labelTitleContactThree'>Ciudad *</label> 
            <select id='inputText'>
                    <option selected>Seleccione una opción</option>
                    <option value="1">Bogota</option>
                    <option value="2">Medellin</option>
                    <option value="3">Barranquilla</option>
            </select> 
            <label id='labelTitleContactFour'>Teléfono</label> 
            <input id='inputText' type="text" placeholder='Ingrese teléfono'/>
        </div>
        <div>
            <label id='labelTitleContactFive'>Teléfono 2</label>
            <input id='inputText' type="text" placeholder='Ingrese teléfono'/> 
            <label id='labelTitleContactSix'>Dir. de correspondencia</label>
            <input id='inputText' type="text" placeholder='Ingrese dirección'/> 
            <label id='labelTitleContactSeven'>Barrio correspondencia</label> 
            <input id='inputText' type="text" placeholder='Ingrese barrio'/> 
            <label id='labelTitleContactEigth'>Dirección Electrónica</label> 
            <input id='inputText' type="date" placeholder='Ingrese dirección electrónica'/>
        </div>
        <div>
            <label id='labelTitleContactNine'>Número de celular</label>
            <input id='inputText' type="text" placeholder='Ingrese teléfono'/> 
        </div>
    </div>
    )
}

export default ViewContacInformation
