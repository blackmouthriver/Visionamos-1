import React from 'react'

const ViewExpenses = () => {
    return (
        <div id='Container'>
              
              <div id='expense'>
                    <div id='expenseOne'>
                         <label>Egresos familiares</label>
                         <input id="inputTextIncome" type="text" placeholder='0'/> 
                    </div>
                    <div id='expenseOne'>
                         <label>Egresos fijos hogar</label>
                         <input id="inputTextIncome" type="text" placeholder='0'/> 
                    </div>
              </div>
              <div id='expense'>
                  <div id='expenseOne'>
                    <label>Egresos financieros</label>
                    <input id="inputTextIncome" type="text" placeholder='0'/> 
                  </div>  
                  <div id='expenseOne'>
                    <label>Egresos personales</label>
                    <input id="inputTextIncome" type="text" placeholder='0'/> 
                  </div>
              </div>
              <div id='expenseOne'>
                    <label>Egresos arriendo hipoteca</label>
                    <input id="inputTextIncome" type="text" placeholder='0'/> 
              </div>
              <div id='expense'>
                  <div id='expenseOne'>
                    <label>Otros egresos</label>
                    <input id="inputTextIncome" type="text" placeholder='0'/> 
                  </div> 
                  <div id='expenseOne'>
                    <label>Descripción otros egresos</label>
                    <input id="inputTextIncome" type="text" placeholder='Agregar descripción'/> 
                  </div> 
              </div>
              <div id='expenseOne'>
                    <label>Egresos mensuales</label>
                    <input id="inputTextIncome" type="text" placeholder='0'/> 
              </div>
            
        </div>
    )
}

export default ViewExpenses
