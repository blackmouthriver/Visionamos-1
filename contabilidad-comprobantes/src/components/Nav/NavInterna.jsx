import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import "../createForm/styleAutomatic.css";
const NavInterna = () => {
  const history = useHistory();
  const onclickReturn = () => {
    history.push("/comprobantes");
  };

  return (
    <div className="navHome">
      <div className="navHome_Link">
        <Link className="navHome_a" to="/home">
          Home/
        </Link>
        <Link className="navHome_b" to="/comprobantes">
          contabilidad
        </Link>
      </div>
      <button onClick={onclickReturn} className="navHome_Button">
        <FontAwesomeIcon icon={faArrowLeft}> </FontAwesomeIcon>
        Regresar
      </button>
    </div>
  );
};

export default NavInterna;
