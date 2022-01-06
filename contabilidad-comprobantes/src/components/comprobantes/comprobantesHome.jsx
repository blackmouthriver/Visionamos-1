import "./styleCH.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import NavInterna from "../Nav/NavInterna";
import ModalRespuesta from "../createForm/divModal";

function ComprobantesHome() {
  const [values0, setvalues0] = useState("");
  const [values1, setvalues1] = useState("1");
  const [values2, setvalues2] = useState("2");
  const [values3, setvalues3] = useState("3");
  const [values4, setvalues4] = useState("4");
  const [searchB, setsearchB] = useState("SB");
  const [searchB1, setsearchB1] = useState("SB");
  const [searchB2, setsearchB2] = useState("SB");
  const [sendModal, setSendModal] = useState(false);

  const [allComprobantes, setallComprobantes] = useState([]);
  function getallComprobantes() {
    axios.get("http://localhost:3001/comprobantes/all").then((response) => {
      setallComprobantes(response.data);
    });
  }
  useEffect(() => {
    getallComprobantes();
  }, []);

  const cleanSelects = () => {
    setvalues0("");
    setvalues1("1");
    setvalues2("2");
    setvalues3("3");
    setvalues4("4");
    setsearchB("SB");
    setsearchB1("SB");
    setsearchB2("SB");
    document.getElementById("Buscador").value=null

  };

  const onSelectChange0 = (e) => {
    setsearchB("all");
    setvalues0(e.target.value);
  };

  const onSelectChange1 = (e) => {
    setvalues1(e.target.value);
  };

  const onSelectChange2 = (e) => {
    setsearchB("Buscar");
    setvalues2(e.target.value);
  };

  const onSelectChange3 = (e) => {
    setsearchB1("Buscar_estado");
    setvalues3(e.target.value);
  };

  const onSelectChange4 = (e) => {
    setsearchB2("Buscar_automatico");
    setvalues4(e.target.value);
    console.log("ver", values4, searchB2);
  };

  const filterData = () => {
    switch (searchB) {
      case "Buscar":
        return allComprobantes.filter((e) =>
          e.type.toLowerCase().includes(values2.toLowerCase())
        );
      case "all":
        return allComprobantes.filter(
          (e) =>
            e.type.toLowerCase().includes(values0.toLowerCase()) ||
            e.vaucher.toString().includes(values0) ||
            e.sequence.toString().includes(values0) ||
            e.name.toLowerCase().includes(values0.toLowerCase())
        );
      default:
        return allComprobantes;
    }
  };

  const dataFilterEstado = () => {
    switch (searchB1) {
      case "Buscar_estado":
        return filterData().filter((e) => e.state.includes(values3));
      default:
        return filterData();
    }
  };

  const dataFilterAutomatico = () => {
    switch (searchB2) {
      case "Buscar_automatico":
        return dataFilterEstado().filter(
          (e) => e.automatic.toString() === values4
        );
      default:
        return dataFilterEstado();
    }
  };

  const OrdenData = () => {
    switch (values1) {
      case "Ascendente":
        return dataFilterAutomatico().sort((a, b) => {
          const IdA = parseInt(a.id);
          const IdB = parseInt(b.id);

          if (IdA < IdB) {
            return -1;
          }
          if (IdA > IdB) {
            return 1;
          }
          return 0;
        });

      case "Descendente":
        return dataFilterAutomatico().sort((a, b) => {
          return parseInt(b.id) - parseInt(a.id);
        });

      default:
        return dataFilterAutomatico();
    }
  };

  const ShowModal = (id) => {
    if (sendModal) {
      return (
        <ModalRespuesta
          titleody="Borrar Comprobante"
          titleButom1="Cancelar"
          titleButom2="Borrar"
          funcionButton1="borrarComprobante"
          funcionButton2="onclickReturnBorrar"
          id={id}
          contenido1="Si está seguro de borrar este comprobante, hacer click en el botón 'Borrar'."
          contenido2="Una vez borrado no se podrá recuperar el comprobante, de lo contrario hacer click en el botón 'Cancelar'."
          calseModalboton="Adelante_atras_borrar"
          calseModaltitle="titleBodyCartaBorrar"
        />
      );
    }
  };

  const borrarComprobante = (e) => {
    if (!sendModal) {
      setSendModal(true);
    }
    if (sendModal) {
      setSendModal(false);
    }
  };

  const tBody = () => {
    return OrdenData()?.map((e) => {
      return (
        <tr key={e.id}>
          <td>
            <input type="checkbox" />
          </td>
          <td>{e.vaucher}</td>
          <td>{e.sequence}</td>
          <td>{e.type}</td>
          <td>{e.name}</td>
          <td className="available">{e.state}</td>
          <td>{e.automatic == true ? "si" : "no"}</td>
          <td>{e.restartSequence == true ? "si" : "no"}</td>
          <td>
            <div className=" wrapper">
              <Link className="btn-text" to={`/comprobantes/detalle/${e.id}`}>
                <span>
                  <FontAwesomeIcon icon={faEye} />
                </span>

                <span>Ver</span>
              </Link>
            </div>
          </td>
          <td>
            <div className=" wrapper">
              <Link
                className="btn-text"
                to={`/comprobantes/actualizar/${e.id}`}
              >
                <span>
                  <FontAwesomeIcon icon={faPen} />
                </span>
                <span>Editar</span>
              </Link>
            </div>
          </td>
          <td>
            <div className=" wrapper">
              <div className="btn-text">
                <span>
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                <span onClick={borrarComprobante}>Borrar</span>
              </div>
            </div>
          </td>
          {ShowModal(e.id)}
        </tr>
      );
    });
  };

  return (
    <div className="body-home">
      <NavInterna />
      <div className="container-fluid">
        <h1 className="comprobantes_title">COMPROBANTES</h1>
        <Link className="buttonCrear1" to="/comprobantes/crear">
          +Crear
        </Link>
      </div>
      <div className="search_body_home">
        <div class="input-group1">
          <span className="nav-labels">Buscar por:</span>
          <input
            type="text"
            placeholder="| Buscar"
            id="Buscador"
            onChange={onSelectChange0}
          />
        </div>
        <div className="ordenPor">
          <label className="nav-labels">Ordenar por:</label>
          <button className="ver_todos" onClick={cleanSelects}>
            Ver todos
          </button>
        </div>
        <div>
          <label className="nav-labels">Comprobante </label>
          <select
            className="selectsHome"
            value={values1}
            onChange={onSelectChange1}
          >
            <option hidden value="">
              Todos
            </option>
            <option className="optionselect" value="Ascendente">
              Ascendente
            </option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>

        <div>
          <label className="nav-labels">Tipo de comprobante</label>
          <select
            className="selectsHome"
            value={values2}
            onChange={onSelectChange2}
          >
            <option hidden value="">
              Todos
            </option>
            <option value="Ingreso">Ingreso</option>
            <option value="Egreso">Egreso</option>
            <option value="Nota">Nota</option>
            <option value="Transferencia">Transferencia</option>
            <option value="Disperción">Disperción</option>
            <option value="Causación Proveedores">Causación Proveedores</option>
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
            <option value="Reviciones de Aportes">Revisiones de Aportes</option>
            <option value="Aprobaciones">Aprobaciones</option>
          </select>
        </div>

        <div>
          <label className="nav-labels">Estado</label>
          <select
            className="selectsHome"
            value={values3}
            onChange={onSelectChange3}
          >
            <option hidden value="">
              Todos
            </option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
        <div>
          <label className="nav-labels">Automático</label>
          <select
            className="selectsHome"
            value={values4}
            onChange={onSelectChange4}
          >
            <option hidden value="">
              Todos
            </option>
            <option value="true">Automático</option>
            <option value="false">Manual</option>
          </select>
          <a href="#">
            <FontAwesomeIcon
              className="icon_question"
              icon={faQuestionCircle}
            />
          </a>
        </div>
      </div>

      <div className="datatable-container">
        <table className="datatable">
          <thead className="datatable_head">
            <tr>
              <th></th>
              <th>COMPROBANTE</th>
              <th>SECUENCIA</th>
              <th>TIPO DE COMPROBANTE</th>
              <th>NOMBRE</th>
              <th>ESTADO</th>
              <th>AUTOMÁTICO</th>
              <th>REINICIAR CONSECUTIVO</th>
              <th colSpan="3">OPCIONES</th>
            </tr>
          </thead>
          <tbody>{tBody()}</tbody>
        </table>

       { /*<div className="footer-tools">
          <div className="pages">
            <ul>
              <li>
                <span className="active">1</span>
              </li>
              <li>
                <button>2</button>
              </li>
              <li>
                <button>3</button>
              </li>
              <li>
                <button>4</button>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <button>9</button>
              </li>
              <li>
                <button>10</button>
              </li>
            </ul>
          </div>
        </div>*/}
      </div>
    </div>
  );
}

export default ComprobantesHome;
