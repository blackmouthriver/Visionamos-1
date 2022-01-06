import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
//import Cobelen from '../Image/Cobelen.jfif';
import Breadcrmb from "../NavabrAndBreadcrumb/Breadcrumb";
const MotionCapture = () => {
    
    const history = useHistory();

    function redireccionar(){
        history.push('/movimientos');
      }

    return ( 
        <div>
         <Breadcrmb />
        <div class="bodyViewMotion">
            <div class="headreceipMotion">
                <p className="titleMovi">RECIBO DE CAPTURA DE MOVIMIENTOS</p>
                <div id="conteinerButton">
                        <button 
                                class="buttonprint" 
                                onClick={() => window.print()}
                                > 
                                <FontAwesomeIcon id="iconPrint" 
                                icon={faPrint}/>   Imprimir</button>
                        <button 
                               class="buttonreturn"
                               onClick={()=>redireccionar()}
                               >
                               Volver
                        </button>
                </div>
            </div>
            <div>
                <div class="headInformation">
                      <p class="titleHead">Información General</p>
                </div>
                 <div class="headInformationlabel">
                     
                      <label class="labeltitle1">Comprobante</label>
                      <input class="inputReceipt"></input>
                      <label class="labeltitle1">Numero</label>
                      <input class="inputReceipt"></input>
                      <label class="labeltitle1">Fecha Contable</label>
                      <input class="inputReceipt"></input>
                      <label  class="labeltitle1">Descripción</label>
                      <input class="inputReceipt"></input>
                 </div> 
            </div>
            <div class="tableviewReceipt">
                <div id="conteinerTableReceipt">
                    <thead id="tablehead">
                            <tr>
                                <th id="titlelabel1">AGENCIA</th>
                                <th id="titlelabel1">CUENTA</th>
                                <th id="titlelabel1">CLIENTE</th>
                                <th id="titlelabel1">COMENTARIO</th>
                                <th id="titlelabel1">REFERENCIA</th>
                                <th id="titlelabel1">DEBITO</th>
                                <th id="titlelabel1">CREDITO</th>
                            </tr>
                    
                    </thead>
                    <tbody>
                        <p>no hay datos</p>
                    </tbody>
                </div>
                    <div id="totales">       
                        <input 
                            id="totalResult"
                            type="text" 
                            name="total " 
                            placeholder='Total'>  
                        </input>
                        <input 
                            id="debitoResult"
                            type="text" 
                            name="SumaDebito " 
                            placeholder='$ 0'>
                        </input>
                        <input 
                            id="creditoResult"
                            type="text" 
                            name="SumaCredito " 
                            placeholder='$ 0'>
                        </input>
                    </div> 
            </div>
            
        </div>
        </div>
     );
  
}
 
export default MotionCapture;