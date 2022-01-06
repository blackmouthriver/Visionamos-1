import React from 'react'

const ViewIncome = () => {
    return (
        <div id='Container'>
              <div id='expense'>
                   <div id='expenseOne'>
                        <label>Salario</label>
                        <input id="inputTextIncome" type="text" placeholder='0'/> 
                   </div>
                  <div id='expenseOne'>
                    <label>Ingresos Honorarios</label>
                    <input id="inputTextIncome" type="text" placeholder='0'/> 
                  </div>
              </div>
              <div id='expense'>
                  <div id='expenseOne'>
                        <label>Ingresos arriendos</label>
                        <input id="inputTextIncome" type="text" placeholder='0'/> 
                  </div>
                  <div id='expenseOne'> 
                    <label>Ingresos Financieros</label>
                    <input id="inputTextIncome" type="text" placeholder='0'/> 
                  </div>
              </div>
              <div id='expense'>
                    <div id='expenseOne'>
                         <label>Otros Ingresos</label>
                         <input id="inputTextIncome" type="text" placeholder='0'/> 
                    </div>
                    <div id='expenseOne'>
                         <label>Descripción otros ingresos</label>
                         <input id="inputTextIncome" type="text" placeholder='Agregar descripción'/> 
                    </div>
              </div>
              <div id='expenseOne'>
                    <label >Ingresos mensuales</label>
                    <input id="inputTextIncome" type="text" placeholder='0'/> 
              </div>
            
        </div>
    )
}

export default ViewIncome
