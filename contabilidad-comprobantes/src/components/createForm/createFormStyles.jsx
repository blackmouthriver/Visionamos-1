import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
};

const Formulario = styled.form`
  display: grid;
  box-shadow: rgb(0 0 0 / 0%) 0px 2px 3px 0px;
  text-align: center;
  max-height: calc(100vh - 180px);
  padding: 30px 30px 36px;
  background: #fff;
  margin-left: 80px;
  height: 569px;
  grid-template-columns: 1fr;
  gap: 3em;
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 400px);
  }
`;

const Label = styled.label`
    display: block;
    padding: 5px; 10px;
    min-height: 10px;
    cursor: pointer;

    text-align: left;
    font: normal normal medium 20px/18px Montserrat;
    letter-spacing: 0px;
    color: #0E4A7D;
    opacity: 1;
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
      width: 100%;
      background: #fff;
      border-radius: 3px;
      height: 45px;
      line-height: 45px;
      padding: 0 40px 0 10px;
      transition: .3s ease all;
      border: 3px solid #f5f5f5;
      
      &:focus {
          border: 3px solid ${colores.borde}
          outline: none;
          box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
      }
      
`;

const LeyendaError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;
`;

const IconValidation = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;
`;

const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  grid-column: span 1;
`;

//const BotonDropdown = styled.div`
//background-color: #EAF2E3 !important;
//border-color: #EAF2E3 !important;
//`;

const Boton = styled.button`
      height: 45px
      line-height: 45px;
       background: #445DA7 0% 0% no-repeat padding-box;
      opacity: 1;
      color: #fff;
      font-weight: bold;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: .1s ease all;
      border-radius: 100px;

      &:hover {
          box-shadow: 3px 0px 30px rgba(163,163,163, 1)
      }

`;
const Name = styled.h1`
  margin-top: 35px;
  margin-bottom: 35px;
  font-size: 20px;
  text-align: left;
  font: normal normal bold 22px Montserrat;
  letter-spacing: 0px;
  color: #0e4a7d;
  opacity: 1;
`;
const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
  display: none;
`;
const Main = styled.main`
  display: flex;
  background: #f1f1f1;
`;
const Frecuencia = styled.div`
  display: flex;
`;
const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  background: #f66060;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;
const navHome = styled.div`
  display: flex;
  color: red;
  font-size: 20px;
  float: right;
`;
export {
  navHome,
  Formulario,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconValidation,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
  Name,
  Main,
  Frecuencia,
};
