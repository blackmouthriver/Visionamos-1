import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import creationMovements from "./Component/CreationMovements/creationMovements";
import receiptMotionCapture from "./Component/CreationMovements/receiptMotionCapture";
//import Cobelen from "./Component/Image/Cobelen.jfif"
import receiptMotion from "./Component/Styles/receiptMotion.css"
import style from "./Component/Styles/style.css"
import Modal from "./Component/Styles/Modal.css"
import Breadcrmb from "./Component/NavabrAndBreadcrumb/Breadcrumb";


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





 