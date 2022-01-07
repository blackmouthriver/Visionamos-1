import '../Styles/Modal.css';
import { useHistory } from 'react-router-dom';

const Modal = ({children, isOpen, closeModal}) => {
    const history = useHistory();

    function redireccionar(){
        history.push('/RECIBO DE CAPTURA DE MOVIMIENTOS');
      }

    return (
        <article className={`Modal ${isOpen && "is-open"}`}>

        <div className="modal-container">
        {children}
        <button class="modal-close" onClick={closeModal}>Cancelar</button>
        <button class="modal-accept" onClick={()=>redireccionar()}>Aceptar</button>
        </div>
            
        </article>
    )
}

export default Modal;

