import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styleAutomatic.css"; 
import Ayuda from "../../public/Ayuda_2.png";
import { Name } from "./createFormStyles.jsx";
import { Popover,  PopoverBody} from "reactstrap";
import NavInternaPuc from "../Nav/navInternaPH.jsx";
import PucModal from "./pucModal";
import { useHistory } from "react-router";

function CreatePuc() {
  
  const [popover, setPopover] = useState(false);
  const [popover1, setPopover1] = useState(false);
  const [popover2, setPopover2] = useState(false);

  const [allComprobantes, setallComprobantes] = useState([]);
  console.log(allComprobantes, 'TODAS LAS CUENTAS LINEA 23')
  function getallComprobantes() {
    axios.get("http://localhost:3001/cuentas/all").then((response) => {
      setallComprobantes(response.data);
    });
  }
  useEffect(() => {
    getallComprobantes();
  }, []);
  console.log(allComprobantes,"Todas")
  const history = useHistory();


  const [errors, setErrors] = useState({});
  const [sendModal, setSendModal] = useState(false);
  const [newinput, setNewinput] = useState({
    account: null,
    name: "",
    revelationName: "",
    type: "",
    nature: "",
    unlocked: false,
    gmf: false,
    letAsAccount: "",
    closeBalanced: false,
    nit: null,
    description: "",
    nifAccount: null,
    state: ""
  });

  function validateAccount(input) {
    let errors;
    input.account === null || input.account === ""
    ? (errors = "*Debe ingresar un número de cuenta")
    : (errors = "")
    return errors;
  }

  function validateName(input){
    let errors;
    input.name === ""
    ? (errors = "*Debe ingresar un nombre de cuenta")
    : (errors = "")
    return errors;
  }

  function validateType(input){
    let errors;
    input.type === ""
    ? (errors = "*Debe ingresar un tipo de cuenta")
    : (errors = "")
    return errors

  }
  
  function validateNature(input){
    let errors;
    input.nature === ""
    ? (errors = "*Debe ingresar una naturaleza de cuenta")
    : (errors = "")
    return errors;
  }
  
  function validateNif(input){
    let errors;
    input.nifAccount === null || input.nifAccount === ""
    ? (errors = "*Debe ingresar un número niif de cuenta")
    : (errors = "")
    return errors;
  }

  function validateState(input){
    let errors;
    input.state === ""
    ? (errors = "*Debe ingresar un estado de cuenta")
    : (errors = "")
    return errors;
  }

  function handleChange(e) {
    setSendModal(false);
    setNewinput({
      ...newinput,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "account") {
      setErrors({
        ...errors,
        account: validateAccount({
          ...newinput,
          [e.target.name]: e.target.value,
        }),
      });
    }
    if (e.target.name === "name") {
      setErrors({
        ...errors,
        name: validateName({
          ...newinput,
          [e.target.name]: e.target.value,
        }),
      });
    }
    if (e.target.name === "type") {
      setErrors({
        ...errors,
        type: validateType({
          ...newinput,
          [e.target.name]: e.target.value,
        }),
      });
    }
    if (e.target.name === "nature") {
      setErrors({
        ...errors,
        nature: validateNature({
          ...newinput,
          [e.target.name]: e.target.value,
        }),
      });
    }
    if (e.target.name === "nifAccount") {
      setErrors({
        ...errors,
        nifAccount: validateNif({
          ...newinput,
          [e.target.name]: e.target.value,
        }),
      });
    }
    if (e.target.name === "state") {
      setErrors({
        ...errors,
        state: validateState({
          ...newinput,
          [e.target.name]: e.target.value,
        }),
      });
    }
   
  }

  async function handleSubmit(e) {

    if (
      newinput.account === null ||
      newinput.name === "" ||
      newinput.type === "" ||
      newinput.nature === "" ||
      newinput.nifAccount === null ||
      newinput.state === "" || 
      allComprobantes.find(e=>e.account==newinput.account)
    ) {
      if(allComprobantes.find(e=>e.account==newinput.account)){
        alert("Numero de cuenta ya existe")
      }
    if(newinput.account === null){
      setErrors({
        ...errors,
        account: validateAccount({
          account: e.target.value
        })
      })
    }

    if(newinput.name === ""){
      setErrors({
        ...errors,
        name: validateName({
          name: e.target.nombre
        })
      })
    }

    if(newinput.type === ""){
      setErrors({
        ...errors,
        type: validateType({
          type: e.target.value
        })
      })
    }

    if(newinput.nature === ""){
      setErrors({
        ...errors,
        nature: validateNature({
          nature: e.target.value
        })
      })
    }

    if(newinput.nifAccount === null){
      setErrors({
        ...errors,
        nifAccount: validateNif({
          nifAccount: e.target.value
        })
      })
    }

    if(newinput.state === ""){
      setErrors({
        ...errors,
        state: validateState({
          state: e.target.value
        })
      })
    
    }
  }else{
    const response = await axios.post(
      "http://localhost:3001/cuentas/",
      newinput
    );

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
      history.push("/puc")
      setSendModal(true);
      
    }
  
  } 
 
}

  const onclickReturn = () => {
    history.push("/puc");
  };

  const ShowModal = () => {
    if (sendModal) {
      return (
        <PucModal
          titleody="La cuenta ha sido creada con éxito"
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

  function addBooleans(e){
    if(e.target.name === "closeBalanced" && e.target.value === "true"){
      document.getElementById("nit").disabled = false;
    }
    if(e.target.name === "closeBalanced" && e.target.value === "false"){
      document.getElementById("nit").disabled = true;
    }
    setNewinput({
      ...newinput,
      [e.target.name]: e.target.value
    })
  }

  function togglePopover1() {
    setPopover1(!popover1)
  }

  function togglePopover() {
    setPopover(!popover);
  }

  function togglePopover2() {
    setPopover2(!popover2);
  }

  console.log(newinput, 'lo q llega al estado local')
  console.log(errors, 'los errores q llegan al estado local')
  return (
    <>
      <NavInternaPuc />
      <>
        <div>
          <Name className="name">CREAR CUENTA</Name>
          <form
            className="formulario_comprobante"
            onSubmit={(e) => handleSubmit(e)}
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
                  placeholder="Ingrese número"
                  label="Número de cuenta"
                  required
                  value={newinput.account}
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
                    placeholder="Ingrese nombre"
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
                  placeholder="Ingrese nombre"
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
                        <option hidden>Seleccione una opción</option>
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
                <option hidden>Seleccione una opción</option>
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
                  onChange={(e) => addBooleans(e)}
                  value={newinput.unlocked}
                >
                  <option hidden>Seleccione una opción</option>
                  <option value={true}>Si</option>
                  <option value={false}>No</option>
                </select>
                <button id="Popover" type="button" className="btn-Popover">
                  <img className="ayuda_icon"
                    src={Ayuda}
                    alt="img not fount"         
                   />
                   </button>
                   <Popover 
                      isOpen =  {popover}
                      flip target="Popover"
                      toggle={togglePopover}
                      placement="right" trigger="click" >
                      <PopoverBody className="Popover">
                        Esta opción se activa si se requiere que la cuenta no se pueda
                        afectar de manera manual por medio de captura de movimiento.                     
                      </PopoverBody>
                    </Popover>
              </div>
            </div>
            <div>
                <div className="inputLabelDiv">
                <label className="labelForm">Causar gmf</label>
                    <select className="inputForm" name="gmf" id="gmf" onChange={(e) => addBooleans(e)}>
                        <option hidden>Seleccione una opción</option>
                        <option value={true}>Si</option>
                        <option value={false}>No</option>
                    </select>
                    <button id="Popover1" type="button" className="btn-Popover">
                  <img className="ayuda_icon"
                    src={Ayuda}
                    alt="img not fount"         
                   />
                   </button>
                   <Popover 
                      isOpen =  {popover1}
                      flip target="Popover1"
                      toggle={togglePopover1}
                      placement="right" trigger="click" >
                      <PopoverBody className="Popover1">
                        Esta opción se activa si se requiere que la cuenta no se pueda
                        afectar de manera manual por medio de captura de movimiento.                     
                      </PopoverBody>
                    </Popover>
                </div>
            </div>
           <div>
               <div className="inputLabelDiv">
               <label className="labelForm">Permitir como cuenta por pagar</label>
                   <select className="inputForm" name="letAsAccount" id="letAsAccount" onChange={(e) => addBooleans(e)}>
                       <option hidden>Seleccione una opción</option>
                       <option value={true}>Si</option>
                       <option value={false}>No</option>
                   </select>
                   <button id="Popover2" type="button" className="btn-Popover">
                  <img className="ayuda_icon"
                    src={Ayuda}
                    alt="img not fount"         
                   />
                   </button>
                   <Popover 
                      isOpen =  {popover2}
                      flip target="Popover2"
                      toggle={togglePopover2}
                      placement="right" trigger="click" >
                      <PopoverBody className="Popover1">
                        Se selecciona esta opción si se permite que la cuenta
                        a crear se tome para el manejo de cuentas por pagar.
                      </PopoverBody>
                    </Popover>
               </div>
           </div>
           <div>
               <div className="inputLabelDiv">
               <label className="labelForm">Cerrar saldos de terceros (Cierre anual)</label>
                   <select className="inputForm" name="closeBalanced" id="closeBalanced" onChange={(e) => addBooleans(e)}>
                       <option hidden>Seleccione una opción</option>
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
                    placeholder="Ingrese NIT contrapartida"
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
                   placeholder="Ingrese número"
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
                       <option hidden>Seleccione una opción</option>
                       <option value="Activo">Activo</option>
                       <option value="Inactivo">Inactivo</option>
                   </select>
               </div>
           </div>
           {
             errors.account === undefined || errors.account === "" ? ""
             :
             <p className="errors">{errors.account}</p>
           }
           {
             errors.name === undefined || errors.name === "" ? ""
             :
             <p className="errors">{errors.name}</p>
           }
           {
             errors.type === undefined || errors.type === "" ? ""
             :
             <p className="errors">{errors.type}</p>
           }
           {
             errors.nature === undefined || errors.nature === "" ? ""
             :
             <p className="errors">{errors.nature}</p>
           }
           {
             errors.nifAccount === undefined || errors.nifAccount === "" ? ""
             :
             <p className="errors">{errors.nifAccount}</p>
           }
           {
             errors.state === undefined || errors.state === "" ? ""
             :
             <p className="errors">{errors.state}</p>
           }
          </form>

          {ShowModal()}
          <div className="Adelante_atras">
            <button onClick={onclickReturn} className="atras">
              Atras
            </button>
            <button onClick={handleSubmit} className="adelante" type="submit">
              +Crear
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default CreatePuc;
