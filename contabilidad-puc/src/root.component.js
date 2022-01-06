import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePuc from "./Components/createPuc/createPuc";
import PucHome from "./Components/puc/pucHome";
//import PucDetalle from "./components/detallePuc/detallePuc";
//import UpdatePucView from './components/updatePuc/updatePucView';
//import ModalRespuestaConfirmacion from './components/confirmacion/divConfirmacion';
import PucDetalle from "./Components/pucDetalle/pucDetalle";
import { PucConfirmacion } from './Components/confirmacion/pucConfirmacion';
import UpdatePuc from './Components/updatePuc/updatePuc';


export default function Root(props) {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <Route exact path="/puc" component={PucHome}></Route>
        </Switch>
        <Switch>
          <Route exact path="/puc/detalle/:idDeta" component={PucDetalle}></Route>
        </Switch>
        <Switch>
          <Route exact path="/puc/crear" component={CreatePuc}></Route>
        </Switch>
        <Switch>
          <Route exact path="/puc/actualizar/:idDeta" component={UpdatePuc}></Route>
        </Switch>
        <Switch>
          <Route exact path="/puc/confirmacion" component={PucConfirmacion}></Route>
        </Switch>
      </Route>
    </BrowserRouter>
  )
}

