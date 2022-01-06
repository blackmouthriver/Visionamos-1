import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateForm from "./components/createForm/createForm";
import ComprobantesHome from "./components/comprobantes/comprobantesHome";
import ComprobantesDetalle from "./components/detalleComp/detalleComp";
import UpdateFormView from './components/updateForm/updateFormView';
import ModalRespuestaConfirmacion from './components/confirmacion/divConfirmacion';


export default function Root(props) {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <Route exact path="/comprobantes" component={ComprobantesHome}></Route>
        </Switch>
        <Switch>
          <Route exact path="/comprobantes/detalle/:idDeta" component={ComprobantesDetalle}></Route>
        </Switch>
        <Switch>
          <Route exact path="/comprobantes/crear" component={CreateForm}></Route>
        </Switch>
        <Switch>
          <Route exact path="/comprobantes/actualizar/:idDeta" component={UpdateFormView}></Route>
        </Switch>
        <Switch>
          <Route exact path="/comprobantes/confirmacion" component={ModalRespuestaConfirmacion}></Route>
        </Switch>
      </Route>
    </BrowserRouter>
  )
}
