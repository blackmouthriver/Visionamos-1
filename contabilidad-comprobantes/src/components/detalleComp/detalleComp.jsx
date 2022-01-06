import "./styleDetalle.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavInterna from "../../components/Nav/NavInterna";
import { useHistory } from "react-router-dom";

function ComprobantesDetalle() {
  const { idDeta } = useParams();
  const history = useHistory();
  const [allComprobantes, setallComprobantes] = useState([]);
  function getallComprobantes() {
    axios.get("http://localhost:3001/comprobantes/all").then((response) => {
      console.log(response.data, "Linea 600");
      setallComprobantes(response.data);
    });
  }
  useEffect(() => {
    getallComprobantes();
  }, []);

  const detalle = allComprobantes?.filter((e) => e.id == idDeta);
  const onChangeClick = () => {
    history.push(`/comprobantes`);
  };
  const onhandleEditar = (e) => {
    history.push(`/comprobantes/actualizar/${idDeta}`);
  };
  return (
    <div>
      <NavInterna />
      <div className="detalle">
        <h1 className="title-detalle">COMPROBANTE</h1>
        <div className="body-detalle">
          <img className="icon_Detail" src="{Icono}" alt="A qui va el Logo" />
          <br></br>
          <br></br>
          <div className="num_Comprobante">
            <p>Comprobante</p>{" "}
            <p className="num_Comprobante_p">{detalle[0]?.id}</p>
          </div>
          <div className="num_Comprobante_automatico">
            <p>Entidad</p>{" "}
            <p className="num_Entidad_p">{detalle[0]?.name}</p>
          </div>
          <div className="num_Comprobante">
            <p>Secuencia</p>{" "}
            <p className="num_Secuencia_p">{detalle[0]?.sequence}</p>
          </div>
          <div className="num_Comprobante_automatico">
            <p>Tipo</p> <p className="num_Tipo_p">{detalle[0]?.type}</p>
          </div>
          <div className="num_Comprobante">
            <p>Automático</p>{" "}
            <p className="num_Automatico_p">
              {detalle[0]?.automatic === true ? "si" : "no"}
            </p>
          </div>
        </div>
      </div>
      <div className="adelante_atras">
        <button onClick={onChangeClick} className="btn-atras">
          Atrás
        </button>

        <button onClick={onhandleEditar} className="btn-editar">
          Editar
        </button>
      </div>
    </div>
  );
}

export default ComprobantesDetalle;
