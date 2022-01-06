import React from "react";
import { useHistory } from "react-router";
import "../puc/styleModal.css";


export const PucConfirmacion = () => {

    const history = useHistory();

    const goInicio = () => {
        history.push("/puc");
    };

    return (
        <div className="">
            <div className={`lightbox `} id="img1">
                <div id="videoModal1" className="modal hide in" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel" aria-hidden="false" style={{ display: "block" }}>

                    <div className="modal-body bodyModal">
                        <div className="carta">
                            <p className="titleModal">CUENTAS</p>
                            <p className="headCarta"></p>
                            <p className="titleBodyCartaBorrar">Cuenta eliminada con éxito</p>

                            <div className="Adelante_atras_borrar">                               
                                <button
                                    onClick={goInicio}
                                    className="buttom2">
                                    <p className="textButtom">
                                        ACEPTAR
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


