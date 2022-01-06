import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CrudTableRow from "./CrudTableRow";

import "../createForm/botonDropDown.css";
//import Paginado from '../PaginationTable/Pagination'
import { byOrder, getComprobantes } from "../../redux/actions/index";
//import './TablaComprobantesComponent'

export default function CrudTable() {
  const dispatch = useDispatch();
  const filterComprobantes = useSelector((state) => state.filterComprobantes);
  const allComprobantes = useSelector((state) => state.comprobantes);
  //console.log(data, "linea 400")
  const [currentPage, setCurrentPage] = useState(1);
  const [comprobantesPerPage] = useState(7);
  const [order, setOrder] = useState("");
  const indexOfLastComprobante = currentPage * comprobantesPerPage;
  const indexOfFirstComprobante = indexOfLastComprobante - comprobantesPerPage;
  const currentComprobantes = filterComprobantes.slice(
    indexOfFirstComprobante,
    indexOfLastComprobante
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getComprobantes());
  }, [dispatch]);

  function handleOrder(e) {
    e.preventDefault();
    dispatch(byOrder(e.target.value));
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`);
  }

  return (
    <div className="container">
      <div className="title">
        <h3>COMPROBANTES</h3>
      </div>
      <select onChange={(e) => handleOrder(e)} className="filters">
        <option value="">Ordenar Por</option>
        <option value="Asc">Ascendente</option>
        <option value="Desc">Descendente</option>
      </select>

      <table id="main-container" className="container">
        <thead>
          <tr>
            <th>COMPROBANTE</th>
            <th>SECUENCIA</th>
            <th>TIPO DE COMPROBANTE</th>
            <th>NOMBRE</th>
            <th>ESTADO</th>
            <th>AUTOMÁTICO</th>
            <th>REINICIAR CONSECUTIVO</th>
            <i></i>
          </tr>
        </thead>

        {/*<Paginado
                    comprobantesPerPage = {comprobantesPerPage}
                    allComprobantes={filterComprobantes.length}
                    paginado={paginado}
                />*/}

       {/* <tbody>
          
        </tbody>*/}
       </table>
      {/* {allComprobantes.length === 0 ? (
            <tr>
              <td colSpan="7">Sin datos</td>
            </tr>
          ) : (
            currentComprobantes?.map((el) => (
              <CrudTableRow key={el.comprobante} el={el} />
            ))
          )}*/}
    </div>
  );
}
