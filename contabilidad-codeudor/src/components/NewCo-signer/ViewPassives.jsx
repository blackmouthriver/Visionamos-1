import React from 'react'

const ViewPassives = () => {
    return (
        <div id='Container'>
              <div id='expense'>
                    <div id='expenseOne'>
                         <label>Pasivos obligaciones</label>
                         <input id="inputTextIncome" type="text" placeholder='0'/> 
                    </div> 
                    <div id='expenseOne'>
                         <label>¿Subsidiado por tercero?</label>
                          <select id="inputTextIncome">
                                  <option selected>Seleccione una opción</option>
                                  <option value="1">Si</option>
                                  <option value="2">No</option>
                          </select> 
                    </div> 
              </div>
              <div id='expense'>
                    <div id='expenseOne'>
                         <label>Nombre tercero</label>
                         <input id="inputTextIncome" type="text" placeholder='Ingrese Nombre'/> 
                    </div>
                    <div id='expenseOne'>
                    <label>Parentesco tercero</label>
                          <select id="inputTextIncome">
                                        <option selected>Seleccione una opción</option>
                                        <option value="1">Padre</option>
                                        <option value="2">Madre</option>
                                        <option value="3">Amigo</option>
                          </select> 
                    </div>
              </div>
              <div id='expenseOne'>
                    <label>Identificación tercero</label>
                    <input id="inputTextIncome" type="text" placeholder='Ingrese Número de identificación'/> 
              </div>
              <div id='expense'>
                    <div id='expenseOne'>
                          <label>Tipo de vivienda</label>
                          <select id="inputTextIncome">
                            <option selected>Seleccione una opción</option>
                            <option value="1">Propia</option>
                            <option value="2">Familiar</option>
                            <option value="3">Arquilada</option>
                          </select> 
                    </div>
                    <div id='expenseOne'>
                         <label>Tiempo de residencia en la vivienda (meses)</label>
                         <input id="inputTextIncome" type="text" placeholder='Ingrese meses'/> 
                    </div>
              </div>
              <div id='expense'>
                    <div id='expenseOne'>
                         <label>¿Maneja recursos de tercero?</label>
                         <select id="inputTextIncome">
                            <option selected>Seleccione una opción</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                         </select> 
                    </div>
                    <div id='expenseOne'>
                         <label>¿Recibe giros de otra ciudad?</label>
                         <select id="inputTextIncome">
                            <option selected>Seleccione una opción</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                         </select> 
                    </div>
              </div>
              <div id='expense'>
                    <div id='expenseOne'>
                         <label>Operación moneda extranjera</label>
                         <select id="inputTextIncome">
                                <option selected>Seleccione una opción</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                         </select> 
                    </div>
                    <div id='expenseOne'>
                         <label>Moneda</label>
                         <select id="inputTextIncome">
                                <option selected>Seleccione una opción</option>
                                <option value="1">Pesos</option>
                                <option value="2">Dolar</option>
                                <option value="3">Euro</option>
                         </select> 
                    </div>
              </div>
              <div id='expense'>
                    <div id='expenseOne'>
                    <label>Sector económico</label>
                    <select id="inputTextIncome">
                            <option selected>Seleccione una opción</option>
                            <option value="1">Publico</option>
                            <option value="2">Privado</option>
                    </select> 
                    </div>
                    <div id='expenseOne'>
                    <label>Personas a cargo</label>
                    <select id="inputTextIncome">
                            <option selected>Seleccione una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                    </select> 
                    </div>
              </div>
            
        </div>
    )
}

export default ViewPassives
