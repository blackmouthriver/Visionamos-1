import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styleAutomaticPD.css";
import { Name } from '../createPuc/createFormStyles';
import { useParams } from "react-router-dom";
import NavInternaPuc from "../Nav/navInternaPH";
import { useHistory } from "react-router-dom";

function PucDetalle() {
  const { idDeta } = useParams();
  const history = useHistory();
  const [allCuentas, setallCuentas] = useState([]);
  function getallCuentas() {
    axios.get("http://localhost:3001/cuentas/all").then((response) => {
      console.log(response.data, "Linea 600");
      setallCuentas(response.data);
    });
  }
  useEffect(() => {
    getallCuentas();
  }, []);

  const detallex = allCuentas?.filter((e) => e.id == idDeta);
  const onChangeClick = () => {
    history.push(`/puc`);
  };
  const onhandleEditar = (e) => {
    history.push(`/puc/actualizar/${idDeta}`);
  };

  const detalle = {
    account: detallex[0]?.account,
    name: detallex[0]?.name,
    revelationName: detallex[0]?.revelationName,
    type: detallex[0]?.type,
    nature: detallex[0]?.nature,
    unlocked: detallex[0]?.unlocked === true ? "Si" : "No",
    gmf: detallex[0]?.gmf === true ? "Si" : "No",
    letAsAccount: detallex[0]?.letAsAccount === true ? "Si" : "No",
    closeBalanced: detallex[0]?.closeBalanced === true ? "Si" : "No",
    nit: detallex[0]?.nit,
    description: detallex[0]?.description,
    nifAccount: detallex[0]?.nifAccount,
    state: detallex[0]?.state
  }
  console.log(detalle, 'detalle en pucDetalle')
  return (
    <div>
      <NavInternaPuc />
      <div className="detalle">
        <Name className="name">DATOS DE LA CUENTA</Name>
        <div className="body-detalle">
          <img className="icon_Detail" src="{Icono}" alt="A qui va el Logo" />
          <br></br>
          <br></br>
          <form
            className="formulario_comprobante"
          >
          <div className="inputLabelDiv">
              <label className="labelForm">
                Número de cuenta *
              </label>
              <label
                  className="inputForm"
                >
                {detalle?.account}
              </label>
              <div >
              
              </div>
            </div>
            <div>
                
                <div className="inputLabelDiv">
                <label className="labelForm">Nombre *</label>
                    <label
                    className="inputForm"
                    >
                    {detalle?.name}
                    </label>
                </div>
            </div>
            <div className="inputLabelDiv">
              <label className="labelForm">Nombre Revelación</label>
              <label
                  className="inputForm"
                >
                {detalle?.revelationName}
              </label>
              <div>
              </div>
            </div>
            <div>
                <div className="inputLabelDiv">
                <label className="labelForm">Tipo *</label>
                    <label
                    className="inputForm"
                    >
                      {detalle?.type}
                    </label>
                </div>
            </div>
            <div>
              <div className="inputLabelDiv">
              <label className="labelForm">Naturaleza *</label>
                <label
                  className="inputForm"
                >
                {detalle?.nature}
            </label>
              </div>
            </div>
            <div>
              <div className="inputLabelDiv">
              <label className="labelForm">
                Bloquear captura de movimientos
              </label>
                <label
                  className="inputForm"
                >
                  {detalle?.unlocked}
                </label>
              </div>
            </div>
            <div>
                <div className="inputLabelDiv">
                <label className="labelForm">Causar gmf</label>
                    <label className="inputForm">
                        {detalle?.gmf}
                    </label>
                </div>
            </div>
           <div>
               <div className="inputLabelDiv">
               <label className="labelForm">Permitir como cuenta por pagar</label>
                   <label className='inputForm'>
                     {detalle?.letAsAccount}
                   </label>
               </div>
           </div>
           <div>
               <div className="inputLabelDiv">
               <label className="labelForm">Cerrar saldos de terceros (Cierre anual)</label>
                   <label className="inputForm">
                   {detalle?.closeBalanced}    
                   </label>
               </div>
           </div>
           <div>
                <div className="inputLabelDiv">
                <label className="labelForm">NIT contrapartida</label>
                    <label
                    disabled
                    className="inputForm"
                     >
                    {detalle?.nit}
                    </label>
                </div>
           </div>
           <div>
               <div className="inputLabelDiv">
               <label className="labelDescription">Descripción</label>
                   <label
                   className="inputDescription"
                   >
                    {detalle?.description}
                   </label>
               </div>
           </div>
           <div className="inputLabelDiv">
               <label className="labelForm">Cuenta NIIF *</label>
                   <label
                   className="inputForm"
                   >
                     {detalle?.nifAccount}
                  </label>
           </div>
           <div>
             <input hidden />
           </div>
           <div>
               <div className="inputLabelDivState">
               <label className="labelState">Estado *</label>
                   <label className="inputState">
                       {detalle?.state}
                   </label>
               </div>
           </div>
          </form>
        </div>
      </div>
      <div className="Adelante_atras">
        <button onClick={onChangeClick} className="atras">
          Atrás
        </button>

        <button onClick={onhandleEditar} className="adelante">
          Editar
        </button>
      </div>
    </div>
  );
}

export default PucDetalle;