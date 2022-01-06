import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styleAutomaticPU.css";
import { Name } from "../createPuc/createFormStyles";
import { useParams } from "react-router-dom";
import NavInternaPuc from "../Nav/navInternaPH"
import PucModalUpdate from './pucModalUpdate';
import { useHistory } from "react-router-dom";

function UpdatePuc() {
  const { idDeta } = useParams();
  const history = useHistory();
  const [allCuentas, setallCuentas] = useState([]);
  const [sendModal, setSendModal] = useState(false);

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

 async function onHandlerEditar() {
   const response = await axios.put(`http://localhost:3001/cuentas/actualizar/${idDeta}`, newinput)
    if (response.status === 200) {
        setNewinput({
            account: null,
            name: "",
            revelationName: "",
            type: "",
            nature: "",
            unlocked: false,
            gmf: false,
            letAsAccount: "",
            closeBalanced: false,
            nit: false,
            description: "",
            nifAccount: null,
            state: ""
        });
        setSendModal(true);
  };

}

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
  const [newinput, setNewinput] = useState({
    account: detalle.account,
    name: detalle.name,
    revelationName: detalle.revelationName,
    type: detalle.type,
    nature: detalle.nature,
    unlocked: detalle.unlocked,
    gmf: detalle.gmf,
    letAsAccount: detalle.letAsAccount,
    closeBalanced: detalle.closeBalanced,
    nit: detalle.nit,
    description: detalle.description,
    nifAccount: detalle.nifAccount,
    state: detalle.state
})

const handleChange = (e) => {
    e.preventDefault();
    setNewinput({
        ...newinput,
        [e.target.name]: e.target.value
    })
}

const ShowModal = () => {
    if (sendModal) {
      return (
        <PucModalUpdate
        titleody="La cuenta ha sido actualizada con éxito"
        titleButom1="Regresar"
        titleButom2="Aceptar"
        funcionButton1="goInicio"
        funcionButton2="onclickReturn"
        id=""
        contenido1=""
        contenido2=""
        contenido3=""
        calseModalboton="Adelante_atras"
        calseModaltitle="titleBodyCarta"
        />
      );
    }
  };
  console.log(sendModal, 'estado sendModal en updatePuc')
  return (
    <>
    <NavInternaPuc />
    <>
      <div>
        <Name className="name">EDITAR CUENTA</Name>
        <form
          className="formulario_comprobante"
        >
          <div className="inputLabelDiv">
            <label className="labelForm">
              Número de cuenta *
            </label>
            <input
                className="inputForm"
                id="account"
                name="account"
                type="number"
                placeholder={detalle.account}
                label="Número de cuenta"
                disabled
                onChange={(e) => handleChange(e)}
              />
            <div >
            
            </div>
          </div>
          <div>
              
              <div className="inputLabelDiv">
              <label className="labelForm">Nombre *</label>
                  <input
                  className="inputForm"
                  id="name"
                  name="name"
                  type="text"
                  placeholder={detalle.name}
                  required
                  value={newinput.name}
                  onChange={(e) => handleChange(e)}
                  />
              </div>
          </div>
          <div className="inputLabelDiv">
            <label className="labelForm">Nombre Revelación</label>
            <input
                className="inputForm"
                id="revelationName"
                name="revelationName"
                type="text"
                placeholder={detalle.revelationName}
                required
                value={newinput.revelationName}
                onChange={(e) => handleChange(e)}
              />
            <div>
            </div>
          </div>
          <div>
              <div className="inputLabelDiv">
              <label className="labelForm">Tipo *</label>
                  <select
                  className="inputForm"
                  id="type"
                  name="type"
                  required
                  value={newinput.type}
                  onChange={(e) => handleChange(e)}
                  >
                      <option hidden>{detalle.type}</option>
                      <option value="Mayor">Mayor</option>
                      <option value="Movimiento">Movimiento</option>
                  </select>
              </div>
          </div>
          <div>
            <div className="inputLabelDiv">
            <label className="labelForm">Naturaleza *</label>
              <select
                className="inputForm"
                id="nature"
                name="nature"
                required
                value={newinput.nature}
                onChange={(e) => handleChange(e)}
              >
              <option hidden>{detalle.nature}</option>
              <option value="Débito">Débito</option>
              <option value="Crédito">Crédito</option>
          </select>
            </div>
          </div>
          <div>
            <div className="inputLabelDiv">
            <label className="labelForm">
              Bloquear captura de movimientos
            </label>
              <select
                className="inputForm"
                name="unlocked"
                id="unlocked"
                required
                onChange={(e) => handleChange(e)}
                value={newinput.unlocked}
              >
                <option hidden>{detalle.unlocked}</option>
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>
          <div>
              <div className="inputLabelDiv">
              <label className="labelForm">Causar gmf</label>
                  <select className="inputForm" name="gmf" id="gmf" onChange={(e) => addBooleans(e)}>
                      <option hidden>{detalle.gmf}</option>
                      <option value={true}>Si</option>
                      <option value={false}>No</option>
                  </select>
              </div>
          </div>
         <div>
             <div className="inputLabelDiv">
             <label className="labelForm">Permitir como cuenta por pagar</label>
                 <select className="inputForm" name="letAsAccount" id="letAsAccount" onChange={(e) => addBooleans(e)}>
                     <option hidden>{detalle.letAsAccount}</option>
                     <option value={true}>Si</option>
                     <option value={false}>No</option>
                 </select>
             </div>
         </div>
         <div>
             <div className="inputLabelDiv">
             <label className="labelForm">Cerrar saldos de terceros (Cierre anual)</label>
                 <select className="inputForm" name="closeBalanced" id="closeBalanced" onChange={(e) => addBooleans(e)}>
                     <option hidden>{detalle.closeBalanced}</option>
                     <option value={true}>Si</option>
                     <option value={false}>No</option>
                 </select>
             </div>
         </div>
         <div>
              <div className="inputLabelDiv">
              <label className="labelForm">NIT contrapartida</label>
                  <input
                  disabled
                  className="inputForm"
                  type="number"
                  name="nit"
                  id="nit"
                  placeholder={detalle.nit}
                  onChange={(e) => handleChange(e)}
                   />
              </div>
         </div>
         <div>
             <div className="inputLabelDiv">
             <label className="labelDescription">Descripción</label>
                 <input
                 className="inputDescription"
                 type="text"
                 name="description"
                 id="description"
                 placeholder={detalle.description}
                 onChange={(e) => handleChange(e)} 
                 />
             </div>
         </div>
         <div className="inputLabelDiv">
             <label className="labelForm">Cuenta NIIF *</label>
                 <input
                 className="inputForm"
                 name="nifAccount"
                 id="nifAccount"
                 type="number"
                 placeholder={detalle.nifAccount}
                 onChange={(e) => handleChange(e)} 
                 />
         </div>
         <div>
           <input hidden />
         </div>
         <div>
             <div className="inputLabelDivState">
             <label className="labelState">Estado *</label>
                 <select className="inputState" name="state" id="state" onChange={(e) => handleChange(e)}>
                     <option hidden>{detalle.state}</option>
                     <option value="Activo">Activo</option>
                     <option value="Inactivo">Inactivo</option>
                 </select>
             </div>
         </div>
        </form>

        {ShowModal()}
        <div className="Adelante_atras">
          <button onClick={onChangeClick} className="atras">
            Atrás
          </button>
          <button onClick={onHandlerEditar} className="adelante" type="submit">
            Actualizar
          </button>
        </div>
      </div>
    </>
  </>
  );
}

export default UpdatePuc;