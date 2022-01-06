import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
const Breadcrmb = () => {

    const history = useHistory();

    function redireccionar(){
        history.push('/');
      }

    return ( 
        <div  class="contain"  id="breadcrmb">


            <p id="breadcrumb">Home/Movimientos Contables</p>
            <button 
                  onClick={()=>redireccionar()}
                  id="buttonreturn">
                  <FontAwesomeIcon 
                  id="iconbuttonreturn" 
                  icon={faArrowLeft} />
                  Regresar
            </button>
        </div>
     );
}
 
export default Breadcrmb;