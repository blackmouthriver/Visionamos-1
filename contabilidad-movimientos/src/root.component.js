import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import creationMovements from "./Component/CreationMovements/creationMovements";
import receiptMotionCapture from "./Component/CreationMovements/receiptMotionCapture";
//import Cobelen from "./Component/Image/Cobelen.jfif"
import "./Component/Styles/receiptMotion.css"
import "./Component/Styles/style.css"
import "./Component/Styles/Modal.css"
import './Component/Styles/DragAndDrog.css';

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <Route exact path="/movimientos" component={creationMovements}></Route>
        </Switch>
        <Switch>
          <Route exact path="/movimientos/captura" component={receiptMotionCapture}></Route>
        </Switch>
       {/* <Switch>
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
       </Switch>*/}
      </Route>
    </BrowserRouter>
  )
}





 