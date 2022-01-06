
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./botonDropdown.css";
import "./styleAutomatic.css";
import Ayuda from "../../public/Ayuda_2.png";
import { Name, Frecuencia } from "./createFormStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Popover,  PopoverBody} from "reactstrap";
import NavInterna from "../Nav/NavInterna";
import ModalRespuesta from "./divModal";
import { useHistory } from "react-router";

function CreateForm() {
  
  const [popover, setPopover] = useState(false);
  const [popover1, setPopover1] = useState(false);

  const history = useHistory();

  const validateNombre = (input) => {
    console.log(input.name.length,"dato 900")
    let errors;
    input.name.length >= 30 ? (errors="El máximo de caracteres es de 29"):"";
    input.name === "" ? (errors = "Este campo no puede estar vacio") : "";
    return errors;
  };

  const validateComprobant = (ultimo, input) => {
    let errors;
    if (!/^\d*\.?\d*$/.test(input.vaucher)) {
      errors = "Solo puede ingresar Numeros en este campo";
    } else {
      errors = "";
    }
    if (ultimo.vaucher >= input.vaucher) {
      errors =
        "El número de comprabante ya existe, debe ingresar un número diferente";
    }
    if (input.vaucher === "") {
      errors = "Este campo no puede estar vacio";
    }
    return errors;
  };

  const validateEstado = (input) => {
    let errors;
    input.state === ""
      ? (errors = "Este campo no puede estar vacio")
      : (errors = "");
    return errors;
  };

  const validateTipo = (input) => {
    let errors;
    input.type === "" ? (errors = "Este campo no puede estar vacio") : "";
    return errors;
  };

  const validateSecuencia = (ultimo, input) => {
    let errors;
    if (!/^\d*\.?\d*$/.test(input.sequence)) {
      errors = "Solo puede ingresar Numeros en este campo";
    } else {
      errors = "";
    }
    if (ultimo.sequence >= input.sequence) {
      errors =
        "El número de comprabante ya existe, debe ingresar un número diferente";
    }
    if (input.sequence === "") {
      errors = "Este campo no puede estar vacio";
      console.log(errors, "error dentro de un if funcion validate");
    }
    return errors;
  };

  const [ultimoComprobante, setUltimoComprobante] = useState({});
  const [errors, setErrors] = useState({});
  const [sendModal, setSendModal] = useState(false);
  const [newinput, setNewinput] = useState({
    name: "",
    state: "",
    vaucher: "",
    sequence: "",
    type: "",
    restartSequence: false,
    automatic: false,
  });

  function getUltimocomprobante() {
    axios.get("http://localhost:3001/comprobantes/last").then((response) => {
      setUltimoComprobante(response.data);
    });
  }
  useEffect(() => {
    getUltimocomprobante();
  }, []);

  function reboot(e) {
    //e.preventDefault();
    if (newinput.restartSequence === true) {
      setNewinput({
        ...newinput,
        restartSequence: false,
      });
    } else {
      setNewinput({
        ...newinput,
        restartSequence: true,
      });
    }
  }

  function automatic(e) {
    e.preventDefault();
    if (newinput.automatic === true) {
      setNewinput({
        ...newinput,
        automatic: false,
      });
    } else {
      setNewinput({
        ...newinput,
        automatic: true,
      });
    }
  }

  function addTipo(e) {
    setNewinput({
      ...newinput,
      type: e.target.value,
    });
  }

  /*function addEstado(e) {
    setNewinput({
      ...newinput,
      state: e.target.value,
    });
  }*/

  function handleChange(e) {
    setSendModal(false);
    setNewinput({
      ...newinput,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "name") {
      setErrors({
        ...errors,
        name: validateNombre({
          ...newinput,
          [e.target.name]: e.target.value,
        }),
      });
    }
    if (e.target.name === "state") {
      setErrors({
        ...errors,
        state: validateEstado({
          ...newinput,
          [e.target.name]: e.target.value,
        }),
      });
    }

    if (e.target.name === "vaucher") {
      setErrors({
        ...errors,
        vaucher: validateComprobant(ultimoComprobante, {
          ...newinput,
          [e.target.name]: e.target.value,
        }),
      });
    }

    if (e.target.name === "sequence") {
      setErrors({
        ...errors,
        sequence: validateSecuencia(ultimoComprobante, {
          ...newinput,
          [e.target.name]: e.target.value,
        }),
      });
    }
  }

  async function handleSubmit(e) {
    //e.preventDefault();

    if (
      newinput.state === "" ||
      newinput.name === "" ||
      newinput.vaucher === "" ||
      newinput.sequence === "" ||
      newinput.type === ""
    ) {
      if (newinput.type === "") {
        setErrors({
          ...errors,
          type: validateTipo({
            type: e.target.value,
          }),
        });
      }
      if (newinput.sequence === "") {
        setErrors({
          ...errors,
          sequence: validateSecuencia(ultimoComprobante, {
            sequence: e.target.value,
          }),
        });
      }
      if (newinput.vaucher === "") {
        setErrors({
          ...errors,
          vaucher: validateComprobant(ultimoComprobante, {
            vaucher: e.target.value,
          }),
        });
      }
      if (newinput.state === "") {
        setErrors({
          ...errors,
          state: validateEstado({
            state: e.target.value,
          }),
        });
      }

      if (newinput.name === "") {
        setErrors({
          ...errors,
          name: validateNombre({
            name: e.target.value,
          }),
        });
      }
    } else {
      const response = await axios.post(
        "http://localhost:3001/comprobantes/",
        newinput
      );

      if (response.status === 200) {
        setNewinput({
          name: "",
          state: "",
          vaucher: "",
          sequence: "",
          type: "",
          restartSequence: false,
          automatic: false,
        });
        getUltimocomprobante();
        setSendModal(true);
      }
    }
  }

  const onclickReturn = () => {
    history.push("/comprobantes");
  };

  function togglePopover1() {
    setPopover1(!popover1)
  }

  function togglePopover() {
    setPopover(!popover);

  }

  const ShowModal = () => {
    if (sendModal) {
      return (
        <ModalRespuesta
          titleody="El comprobante ha sido creado con éxito"
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

  return (
    <>
      <NavInterna />
      <>
        <div className="comprobante_creado">
          <Name className="name">CREAR COMPROBANTE</Name>
          <form
            className="formulario_comprobante"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="comprobante_creado_nombre">
              <label className="comporbante_nombre">
                Nombre del Comprobante *
              </label>
              <div className="comprobante_creado_nombre_">
                <input
                  id="nombre"
                  name="name"
                  type="text"
                  label="Nombre de Comprobante"
                  required
                  value={newinput.name}
                  onChange={(e) => handleChange(e)}
                  className={
                    newinput.name !== "" && newinput.name.length < 30 
                      ? "inputValidateOK"
                      : errors.name !== undefined  
                      ? "inputValidateError"
                      : "inputDefault"
                  }
                />
                {newinput.name !== "" && newinput.name.length < 30 ? (
                  <FontAwesomeIcon icon={faCheck} className="confirmacionOK" />
                ) : newinput.name === "" && errors.name !== undefined || newinput.name.length >= 30 ? (
                  <p className="errorMarca">x</p>
                ) : (
                  ""
                )}
              </div>
              {errors.name === undefined || errors.name === "" ? (
                <p className="info">
                  En este campo se pueden usar todos los carácteres entre
                  números y letras.
                </p>
              ) : (
                <p className="infoError">{errors.name}</p>
              )}
            </div>

            <div className="comprobante_creado_nombre">
              <label className="comporbante_nombre">
                Estado del Comprobante *
              </label>
              <div className="comprobante_creado_nombre_">
                <select
                  name="state"
                  required
                  onChange={(e) => handleChange(e)}
                  value={newinput.state}
                  className={
                    newinput.state !== ""
                      ? "inputValidateOK"
                      : errors.state !== undefined
                      ? "inputValidateError"
                      : "inputDefaultSelect"
                  }
                >
                  <option hidden>Seleccione el Estado del Comprobante</option>
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
                {newinput.state !== "" ? (
                  <FontAwesomeIcon icon={faCheck} className="confirmacionOK" />
                ) : newinput.state === "" && errors.state !== undefined ? (
                  <p className="errorMarca">x</p>
                ) : (
                  ""
                )}
              </div>
              {errors.state === undefined ||
              errors.state === "" ||
              newinput.state !== "" ? (
                <p className="info">
                  Se indica el estado del comprobante entre activo e inactivo.
                </p>
              ) : (
                <p className="infoError">{errors.state}</p>
              )}
            </div>

            <div className="comprobante_creado_nombre">
              <label className="comporbante_nombre">Comprobante *</label>
              <div className="comprobante_creado_nombre_">
                <input
                  id="vaucher"
                  name="vaucher"
                  type="number"
                  placeholder={`Número del último Comprobante ${ultimoComprobante?.vaucher}`}
                  required
                  value={newinput.vaucher}
                  onChange={(e) => handleChange(e)}
                  className={
                    newinput.vaucher !== "" && !errors.vaucher
                      ? "inputValidateOK"
                      : errors.vaucher !== undefined
                      ? "inputValidateError"
                      : "inputDefault"
                  }
                />

                {newinput.vaucher === "" && !errors.vaucher ? (
                  ""
                ) : errors.vaucher !== "" ? (
                  <p className="errorMarca">x</p>
                ) : newinput.vaucher !== "" && !errors.vaucher ? (
                  <FontAwesomeIcon icon={faCheck} className="confirmacionOK" />
                ) : (
                  ""
                )}
                
              </div>
              {errors.vaucher === undefined || errors.vaucher === "" ? (
                <p className="info">
                  Código con el que se identifica el comprobante, este campo es
                  único.
                </p>
              ) : (
                <p className="infoError">{errors.vaucher}</p>
              )}
            </div>

            <div className="comprobante_creado_nombre">
              <label className="comporbante_nombre">Secuencia *</label>
              <div className="comprobante_creado_nombre_">
                <input
                  id="comprobante"
                  name="sequence"
                  type="number"
                  label="Comprobante"
                  placeholder={`Número de Secuencia ${ultimoComprobante?.vaucher}`}
                  required
                  value={newinput.sequence}
                  onChange={(e) => handleChange(e)}
                  className={
                    newinput.sequence !== "" && !errors.sequence
                      ? "inputValidateOK"
                      : errors.sequence !== undefined
                      ? "inputValidateError"
                      : "inputDefault"
                  }
                />
                {newinput.sequence === "" && !errors.sequence ? (
                  ""
                ) : errors.sequence !== "" ? (
                  <p className="errorMarca">x</p>
                ) : newinput.sequence !== "" && !errors.sequence ? (
                  <FontAwesomeIcon icon={faCheck} className="confirmacionOK" />
                ) : (
                  ""
                )}
                {/*{newinput.sequence !== "" ? (
                  <FontAwesomeIcon icon={faCheck} className="confirmacionOK" />
                ) : errors.sequence !== undefined ? (
                  <p className="errorMarca">x</p>
                ) : (
                  ""
                )}*/}
              </div>
              {errors.sequence === undefined || errors.sequence === "" ? (
                <p className="info">
                  Se indica el consecutivo en el que empezará almacenarse
                  los movimientos
                  contables.
                </p>
              ) : (
                <p className="infoError">{errors.sequence}</p>
              )}
            </div>

            <div className="comprobante_creado_nombre">
              <label className="comporbante_nombre">
                Tipo De Comprobante *
              </label>
              <div className="comprobante_creado_nombre_">
                <select
                  required
                  className="botonDropdown"
                  onChange={(e) => addTipo(e)}
                  value={newinput.type}
                  className={
                    newinput.type !== ""
                      ? "inputValidateOK"
                      : errors.type !== undefined
                      ? "inputValidateError"
                      : "inputDefaultSelect"
                  }
                >
                  <option hidden>Seleccione el Tipo de Comprobante</option>
                  <option value="Ingreso">Ingreso</option>
                  <option value="Egreso">Egreso</option>
                  <option value="Nota">Nota</option>
                  <option value="Transferencia">Transferencia</option>
                  <option value="Disperción">Disperción</option>
                  <option value="Causación Proveedores">
                    Causación Proveedores
                  </option>
                  <option value="Compensación Coopcentral">
                    Compensación Coopcentral
                  </option>
                  <option value="Desembolso">Desembolso</option>
                  <option value="Liquidacion">Liquidacion</option>
                  <option value="Causación">Causación</option>
                  <option value="Reclasificación">Reclasificación</option>
                  <option value="Provisión">Provisión</option>
                  <option value="Cierre Anual">Cierre Anual</option>
                  <option value="Débito Automático">Débito Automático</option>
                  <option value="Nota Bancaria">Nota Bancaria</option>
                  <option value="Pagos Fechas Anteriores">
                    Pagos Fechas Anteriores
                  </option>
                  <option value="Reviciones">Revisiones</option>
                  <option value="Reviciones de Aportes">
                    Revisiones de Aportes
                  </option>
                  <option value="Aprobaciones">Aprobaciones</option>
                </select>
                {newinput.type !== "" ? (
                  <FontAwesomeIcon icon={faCheck} className="confirmacionOK" />
                ) : newinput.type === "" && errors.type !== undefined ? (
                  <p className="errorMarca">x</p>
                ) : (
                  ""
                )}
              </div>
              {errors.type === undefined ||
              errors.type === "" ||
              newinput.type !== "" ? (
                <p className="info">
                  Se selecciona de la lista desplegable el tipo de comprobante
                  que sé está creando.
                </p>
              ) : (
                <p className="infoError">{errors.type}</p>
              )}
            </div>

            <Frecuencia>
              <div>
                <div className="iniSecuen">
                  <h6 className="iniSecuenTit">
                    Reiniciar secuencia a fin de mes{" "}
                  </h6>
                  <div
                    value={newinput.restartSequence}
                    onClick={(e) => reboot(e)}
                  >
                    <button
                      type="button"
                      className={`btn-sm btn-toggle ${
                        newinput.restartSequence === true ? "active" : ""
                      } `}
                    >
                      <div className="handle"></div>
                    </button>
                  </div>
                  
                  <button id="Popover" type="button" className="btn-Popover">
                  <img className="ayuda_icon"
                    src={Ayuda}
                    alt="img not fount"
                    data-tip data-for="img1"            
                   />
                   </button>
                   <Popover 
                      isOpen =  {popover}
                      flip target="Popover"
                      toggle={togglePopover}
                      placement="right" trigger="click" >
                      <PopoverBody className="Popover">
                         Se debe marcar esta opción si se requiere que el consecutivo de los comprobantes se reinicie cada mes.                     
                      </PopoverBody>
                    </Popover>
                
                </div>

                <div className="iniSecuen">
                  <div className="col-sm-8 toggleTitle">
                    <h6 className="iniSecuenTit">Comprobante Automático</h6>
                  </div>
                  <div
                    className="automatic_"
                    value={newinput.automatic}
                    onClick={(e) => automatic(e)}
                  >
                    <button
                      type="button"
                      className={`btn-sm btn-toggle ${
                        newinput.automatic === true ? "active" : ""
                      } `}
                    >
                      <div className="handle"></div>
                    </button>
                    
                   {/*<Alert variant="filled" severity="info">
                      This is an info alert — check it out!
                    </Alert>*/}
                  </div>
                  {/* <ModalInfo /> */}
                  {/*<div >
                    <FormModal Ayuda={Ayuda}></FormModal> 
                  </div>*/}
                  
                  <button id="Popover1" type="button" className="btn-Popover1">
                   <img
                      className="ayuda_icon1"
                      src={Ayuda}
                      alt="img not fount"
                      data-tip data-for="img2"
                    />
                    </button>

                    <Popover 
                      isOpen =  {popover1}
                      flip target="Popover1"
                      toggle={togglePopover1}
                      placement="right" trigger="click" >
                      <PopoverBody className="Popover1">
                      Para cada tipo de comprobante
                      se debe crear obligatoriamente
                      un comprobante automático, es
                      necesario para la ejecución de
                      los procesos automáticos que 
                      realiza el sistema, por cada 
                      tipo de comprobante se pueden 
                      crear los comprobantes que sean
                      necesarios, pero solo uno debe tener. 
                      </PopoverBody>
                    </Popover>
                </div>

              </div>
            </Frecuencia>
                  
                 {/*  <ReactTooltip id="img1" type="light" place="right" effect="float">
                   <br></br>
                    Se debe marcar esta
                    <br></br>
                    opción si se requiere que el
                    <br></br>
                    consecutivo de los comprobantes
                    <br></br>
                    se reinicie cada mes. 
                    <br></br>
                  </ReactTooltip>
                  
                    <ReactTooltip id="img2" type="light" place="right" effect="float">
                    Para cada tipo de comprobante
                    se debe crear obligatoriamente
                    un comprobante automático, es
                    necesario para la ejecución de
                    los procesos automáticos que 
                    realiza el sistema, por cada 
                    tipo de comprobante se pueden 
                    crear los comprobantes que sean
                    necesarios, pero solo uno debe tener.
                </ReactTooltip>*/}
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

export default CreateForm;
