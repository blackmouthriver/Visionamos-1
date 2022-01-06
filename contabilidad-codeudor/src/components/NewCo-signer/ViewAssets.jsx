import React from 'react'

const ViewAssets = () => {
    return (
        <div id='Container'>
              <div id='expense'>
                  <div id='expenseOne'>
                        <label>Activos inversiones</label>
                        <input id="inputTextIncome" type="text" placeholder='0'/> 
                  </div> 
                  <div id='expenseOne'>
                        <label>Descripción activos inversiones</label>
                        <input id="inputTextIncome" type="text" placeholder='Agregar descripción'/> 
                  </div> 
              </div>
              <div id='expense'>
                  <div id='expenseOne'>
                    <label>Descripción vehículo</label>
                    <input id="inputTextIncome" type="text" placeholder='Agregar descripción'/> 
                  </div>
                  <div id='expenseOne'> 
                    <label>Valor comercial propiedad raíz</label>
                    <input id="inputTextIncome" type="text" placeholder='0'/> 
                  </div>
              </div>
              <div id='expense'>
                  <div id='expenseOne'>
                    <label>Otros Activos</label>
                    <input id="inputTextIncome" type="text" placeholder='0'/> 
                  </div> 
                  <div id='expenseOne'>
                    <label>Descripción otros activos</label>
                    <input id="inputTextIncome" type="text" placeholder='0'/> 
                  </div>
              </div>
              <div id='expenseOne'>
                    <label>Total activos</label>
                    <input id="inputTextIncome" type="text" placeholder='0'/> 
              </div>
            
        </div>
    )
}

export default ViewAssets
