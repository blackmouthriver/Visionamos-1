import "./stylePH.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconoPDF from './icons/IconoPDF.png';
import IconoXSL from './icons/IconoXSL.png';
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import NavInternaPuc from "../Nav/navInternaPH";
import ModalRespuesta from "../createPuc/pucModal";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import MaterialTable from 'material-table'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import ReactToPrint from 'react-to-print';

function PucHome() {
  const [values0, setvalues0] = useState("");
  const [values1, setvalues1] = useState("1");
  const [values2, setvalues2] = useState("2");
  const [values3, setvalues3] = useState("3");
  const [values4, setvalues4] = useState(null);
  const [values5, setvalues5] = useState("5");
  const [searchB, setsearchB] = useState("SB");
  const [searchB1, setsearchB1] = useState("SB");
  const [searchB2, setsearchB2] = useState("SB");
  const [sendModal, setSendModal] = useState(false);

  const [allComprobantes, setallComprobantes] = useState([]);
  const [exportData, setExportData] = useState([]);
  console.log(allComprobantes, 'TODAS LAS CUENTAS LINEA 23')
  function getallComprobantes() {
    axios.get("http://localhost:3001/cuentas/all").then((response) => {
      const tableResult = [];
      response.data.forEach( (elem, i) => {
        tableResult.push([ elem.account.toString(), elem.name, elem.revelationName, elem.nature, elem.type, elem.state, elem.description, elem.nifAccount.toString(), elem.unlocked.toString()])
        
      })
      setallComprobantes(response.data);

      setExportData(tableResult);
    });
  }
  useEffect(() => {
    getallComprobantes();
    document.getElementById('botonExportarExcel').innerHTML = "<img src='http://localhost:8081/38f3592ce50e021c0f2f.png'>Reporte XLS</img>"
  }, []);

  const cleanSelects = () => {
    setvalues0("");
    setvalues1("Todos");
    setvalues2("Todos");
    setvalues3("Todos");
    setvalues4("Todos");
    setvalues5("Todos");
    setsearchB("SB");
    setsearchB1("SB");
    setsearchB2("SB");
    document.getElementById("Buscador").value=null

  };

  const onSelectChange0 = (e) => {
    setsearchB("Buscar");
    setvalues0(e.target.value);
  };

  const onSelectChange1 = (e) => {
    setsearchB("Naturaleza")
    setvalues1(e.target.value);
  };

  const onSelectChange5 = (e) => {
    setsearchB("Tipo")
    setvalues5(e.target.value);
  };

  const onSelectChange2 = (e) => {
    setsearchB("Estado");
    setvalues2(e.target.value);
  };

  const onSelectChange3 = (e) => {
    setsearchB("Bloqueada");
    setvalues3(e.target.value);
  };

  const onSelectChange4 = (e) => {
    setsearchB("Nivel");
    setvalues4(e.target.value);
  };

  const filterData = () => {
    switch (searchB) {
      case "Estado":
        return allComprobantes.filter((e) =>
          e.state.toLowerCase() === values2.toLowerCase()
        );
      case "Naturaleza":
        return allComprobantes.filter((e) =>
          e.nature.toLowerCase().includes(values1.toLowerCase()) 
        );
      case "Tipo":
        return allComprobantes.filter((e) =>
          e.type.toLowerCase().includes(values5.toLowerCase()) 
        );
      case "Bloqueada":
        return allComprobantes.filter((e) => 
          e.unlocked.toString() == values3.toString()
        );
      case "Nivel":
        return allComprobantes.filter((e) => {
          console.log(e.account.toString().length, 'largo del numero de cuenta')
          return e.account.toString().length == values4.toString()
        }
        
        );
      case "Buscar":
        return allComprobantes.filter(
          (e) =>
            e.type.toLowerCase().includes(values0.toLowerCase()) ||
            e.name.toLowerCase().includes(values0.toLowerCase()) ||
            e.revelationName.toLowerCase().includes(values0.toLowerCase()) ||
            e.account.toString().includes(values0)            
        );   
      default:
        return allComprobantes;
    }
  };

  const ShowModal = (id) => {
    if (sendModal) {
      return (
        <ModalRespuesta
          titleody="Borrar Cuenta"
          titleButom1="Cancelar"
          titleButom2="Borrar"
          funcionButton1="borrarComprobante"
          funcionButton2="onclickReturnBorrar"
          id={id}
          contenido1="Si está seguro de borrar esta cuenta, hacer click en el botón 'Borrar'."
          contenido2="Una vez borrado no se podrá recuperar la cuenta, de lo contrario hacer click en el botón 'Cancelar'."
          calseModalboton="Adelante_atras_borrar"
          calseModaltitle="titleBodyCartaBorrar"
        />
      );
    }
  };

  function unlocked(unlocked){
    if(unlocked === true){
      return "Si"
    }

    if(unlocked === false){
      return "No"
    }
  }

  const borrarComprobante = (e) => {
    if (!sendModal) {
      setSendModal(true);
    }
    if (sendModal) {
      setSendModal(false);
    }
  };

  const tBody = () => {
    return filterData()?.map((e) => {
      console.log(e.unlocked, 'unlocked en funcion tbody')
      return (
          <tr key={e.id} >
          <td >
            <input type="checkbox" />
          </td>
          <td>{e.account}</td>
          <td>{e.name}</td>
          <td>{e.revelationName}</td>
          <td className="available">{e.nature}</td>
          <td>1</td>
          <td>{e.type}</td>
          <td>{e.state}</td>
          <td>{e.description}</td>
          <td>{e.nifAccount}</td>
          <td>{unlocked(e.unlocked) }</td>
          <td>
            <div className=" wrapper">
              <Link className="btn-text" to={`/puc/detalle/${e.id}`}>
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
                to={`/puc/actualizar/${e.id}`}
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

  console.log(values3, 'valor de values3')

  //const downloadPdf=()=>{
  //  const doc=new jsPDF()
  //  doc.text("Catálogo de Cuentas",20,10)
  //  doc.autoTable({
  //  columns:columns.map(col=>({...col,datakey:col.field})),
  //  body:allComprobantes
  //  })
  //doc.save('table.pdf')
  //}

  const exportPDF = () => {
    const doc = new jsPDF()

    //doc.autoTable({ html: '#my-table' })
    doc.autoTable({
        head: [['Account','Name','RevelationName','Nature','Type','State','Description','NifAccount','Unlocked']],
        body: exportData,
    })

    doc.save('table.pdf');
}

  return (
    <div className="body-home">
      <NavInternaPuc />
      <div className="container-fluid">
        <h1 className="comprobantes_title">CATÁLOGOS DE CUENTAS</h1>
        <button className='buttonPDF' onClick={exportPDF}><img src={IconoPDF} alt="img not found" />Reporte PDF</button>
              
        <ReactHTMLTableToExcel
          id="botonExportarExcel"
          className='buttonXSL'
          img src= {IconoXSL}
          filename="cuentaExcel"
          table="cuenta" 
          sheet="página 1" 
          buttonText="Reporte XLS"      
        />

        <Link className="buttonCrear1" to="/puc/crear">
          +Crear
        </Link>
      </div>
      <div className="search_body_home">
        <div class="input-group1">
          <span className="nav-labels">Ingresar una Cuenta:</span>
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
          <label className="nav-labels">Naturaleza </label>
          <select
            className="selectsHome"
            value={values1}
            onChange={(e) => onSelectChange1(e)}
          >
            <option hidden value="">
              Todos
            </option>
            <option className="optionselect" value="Crédito">
              Crédito
            </option>
            <option value="Débito">
              Débito
            </option>
          </select>
        </div>

        <div>
          <label className="nav-labels">Tipo</label>
          <select
            className="selectsHome"
            value={values1}
            onChange={(e) => onSelectChange5(e)}
          >
            <option hidden value="">
              Todos
            </option>
            <option className="optionselect" value="Mayor">
              Mayor
            </option>
            <option value="Movimiento">
              Movimiento
            </option>
          </select>
        </div>
        
        <div>
          <label className="nav-labels">Estado</label>
          <select
            className="selectsHome"
            value={values2}
            onChange={(e) => onSelectChange2(e)}
          >
            <option hidden value="">
              Todos
            </option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

        <div>
          <label className="nav-labels">Bloqueada</label>
          <select
            className="selectsHome"
            value={values3}
            onChange={onSelectChange3}
          >
            <option hidden value="">
              Todos
            </option>
            <option value={true}>Si</option>
            <option value={false}>No</option>
          </select>
        </div>
        <div>
          <label className="nav-labels">Nivel</label>
          <select
            className="selectsHome"
            value={values4}
            onChange={onSelectChange4}
          >
            <option hidden value="">
              Todos
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
          {/* <a href="#">
            <FontAwesomeIcon
              className="icon_question"
              icon={faQuestionCircle}
            />
          </a> */}
        </div>
      </div>
      
      <div className="datatable-container">
        <table className="datatable" id="cuenta">
          <thead className="datatable_head">
              <tr>
              <th></th>
              <th>CUENTA</th>
              <th>NOMBRE</th>
              <th>NOMBRE REVELACIÓN</th>
              <th>NATURALEZA</th>
              <th>NIVEL</th>
              <th>TIPO</th>
              <th>ESTADO</th>
              <th>DESCRIPCIÓN</th>
              <th>CUENTA NIIF</th>
              <th>BLOQUEDA</th>
              <th colSpan="3">OPCIONES</th>
            </tr>
          </thead>
          <tbody>{tBody()}</tbody>
        </table>
        
       <div className="footer-tools">
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
        </div>
      </div>
    </div>
  );
}

export default PucHome;
