import React from 'react'

const ViewPersonalInformation = () => {
    return (
        
        <div id='Container'>
            <div>
                 <label id='labelTitle'>Tipo de identificación *</label> 
                 <select id='inputText'>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Cedula de Ciudadania</option>
                        <option value="2">Cedula de Extrangeria</option>
                        <option value="3">Tarjeta de Identidad</option>
                 </select>
                 <label id='labelTitle'>Número identificación *</label>
                 <input id='inputText' type="text" placeholder='Ingrese número'/>
                 <label id='labelTitle'>Fecha de expedición *</label>
                 <input id='inputText' type="date" placeholder="Seleccione Fecha"></input>
                 <label id='labelTitle'>Lugar de expedición</label>
                 <select id='inputText'>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Bogota</option>
                        <option value="2">Medellin</option>
                        <option value="3">Cali</option>
                 </select>
            </div>
            <div>
                 <label id='labelTitleOne'>Primer nombre *</label>
                 <input id='inputText' type="text" placeholder='Ingrese primer nombre'/>  
                 <label id='labelTitleTwo'>Segundo nombre</label>
                 <input id='inputText' type="text" placeholder='Ingrese segundo nombre'/> 
                 <label id='labelTitleThree'>Primer apellido *</label> 
                 <input id='inputText' type="text" placeholder='Ingrese primer apellido'/>
                 <label id='labelTitleFour'>Segundo apellido</label> 
                 <input id='inputText' type="text" placeholder='Ingrese segundo apellido'/>
            </div>
            <div>
                 <label id='labelTitleFive'>Nacionalidad</label>
                 <select id='inputText'>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Colombiano</option>
                        <option value="2">Ecuatoriano</option>
                        <option value="3">Venezolano</option>
                 </select>  
                 <label id='labelTitleSeven'>Ciudad de nacimiento</label>
                 <select id='inputText'>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Bogota</option>
                        <option value="2">Medellin</option>
                        <option value="3">Cali</option>
                 </select> 
                 <label id='labelTitleEigth'>Fecha de nacimiento</label> 
                 <input id='inputText' type="date" placeholder="Seleccione Fecha"></input>
                 <label id='labelTitleNine'>Profesión</label> 
                 <select id='inputText'>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Bogota</option>
                        <option value="2">Medellin</option>
                        <option value="3">Cali</option>
                 </select> 
            </div>
            <div>
                 <label id='labelTitleSix'>Estado civil</label>
                 <select id='inputText'>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Soltero</option>
                        <option value="2">Casado (a)</option>
                        <option value="3">Union Libre</option>
                        <option value="4">Viudo (a)</option>
                 </select> 
                 <label id='labelTitleTen'>Género</label>
                 <select id='inputText'>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                 </select> 
                 <label id='labelTitleEleven'>Estrato</label> 
                 <select id='inputText'>
                        <option selected>Seleccione una opción</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                 </select> 
                 <label id='labelTitleTwelve'>Nivel de escolaridad</label> 
                 <select id='inputText'>
                        <option value="3">Sin escolaridad</option>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Primaria</option>
                        <option value="2">Secundaria</option>
                        <option value="3">Tecnico</option>
                        <option value="3">Tecnologo</option>
                        <option value="3">Universitario</option>
                        <option value="3">Posgrado</option>
                 </select> 
            </div>
            <div>
            <label id='labelTitleSix'>Estado civil</label>
                <select id='inputText'>
                        <option selected>Seleccione una opción</option>
                        <option value="1">Soltero</option>
                        <option value="2">Casado (a)</option>
                        <option value="3">Union Libre</option>
                        <option value="4">Viudo (a)</option>
                </select> 
            </div>
        </div>
    )
}

export default ViewPersonalInformation
