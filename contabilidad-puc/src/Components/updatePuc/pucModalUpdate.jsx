import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../createPuc/styleModal.css"


const PucModalUpdate = ({ titleody, titleButom1, titleButom2, funcionButton1, funcionButton2, id, contenido1, contenido2, contenido3, calseModalboton, calseModaltitle }) => {


    const history = useHistory();
    const [cerrar, setcerrar] = useState("");    

    const showButtum = () => {
        if (funcionButton1 === "goInicio") {
            return goInicio
        }
        if (funcionButton1 === "borrarComprobante") {
            return borrarComprobante
        }
    }

    const showButtum2 = () => {
        if (funcionButton2 === "onclickReturn") {
            return onclickReturn
        }
        if (funcionButton2 === "onclickReturnBorrar") {
            return onclickReturnBorrar
        }
    }
    const goInicio = () => {
        history.push("/puc");
    };

    const borrarComprobante = async () => {
        const repuesta = await axios.delete(`http://localhost:3001/cuentas/borrar/${id}`);
        if (repuesta.status === 200) {

            history.push("/puc/confirmacion");
            
          }

    }

    const onclickReturn = () => {

        setcerrar("ocultarModal");
        history.push("/puc/crear");
    }

    const onclickReturnBorrar = () => {
        setcerrar("ocultarModal");
        window.location.reload(true);
    }

    const showContenido = () => {
        if (id !== "") {
            return (
                <div className="DivModalContenido">
                    <ul className="DivModalContenido_Ul" >
                        <li ><span className="DivModalContenido_P">{contenido1}</span></li>
                        <li><span className="DivModalContenido_P">{contenido2}</span></li>                        
                    </ul>
                </div>
            )
        }
    }
    console.log("clase", calseModalboton)
    return (
        <div className="">
            <div className={`lightbox ${cerrar}`} id="img1">
                <div id="videoModal1" className="modal hide in" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel" aria-hidden="false" style={{ display: "block" }}>

                    <div className="modal-body bodyModal">
                        <div className="carta">
                            <p className="titleModal">CUENTAS</p>
                            <p className="headCarta"></p>
                            <p className={calseModaltitle}>{titleody}</p>
                            {showContenido()}

                            <div className={calseModalboton}>
                                <button
                                    onClick={showButtum2()}
                                    className="buttom1">
                                    <p className="textButtom">
                                        {titleButom1}
                                    </p>
                                </button>
                                <button
                                    onClick={showButtum()}
                                    className="buttom2">
                                    <p className="textButtom">
                                        {titleButom2}
                                    </p>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PucModalUpdate;
