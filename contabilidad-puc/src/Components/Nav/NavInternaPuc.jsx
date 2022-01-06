import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import "../createPuc/styleAutomaticPuc.css";
const NavInternaPuc = () => {
  const history = useHistory();
  const onclickReturn = () => {
    history.push("/puc");
  };

  return (
    <div className="navHome">
      <div className="navHome_Link">
        <Link className="navHome_a" to="/home">
          Home/
        </Link>
        <Link className="navHome_b" to="/puc">
          contabilidad/
        </Link>
        <Link className="navHome_b" to="/puc">
          PUC SS
        </Link>
      </div>
      <button onClick={onclickReturn} className="navHome_Button">
        <FontAwesomeIcon icon={faArrowLeft}> </FontAwesomeIcon>
        Regresar
      </button>
    </div>
  );
};

export default NavInternaPuc;
