import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cosigner from "./components/NewCo-signer/Cosigner"
import ViewCosigner from './components/Cosigner/ViewCosigner';
import "./components/Styles/styleCosigner.css"
import "./components/Styles/style.css"
import "./components/Styles/receiptMotion.css"


export default function Root(props) {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <Route exact path="/codeudor" component={Cosigner}></Route>
        </Switch>
        <Switch>
          <Route exact path="/codeudor/vercodeudor" component={ViewCosigner}></Route>
        </Switch>
       {/* <Switch>
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
       </Switch>*/}
      </Route>
    </BrowserRouter>
  )
      };