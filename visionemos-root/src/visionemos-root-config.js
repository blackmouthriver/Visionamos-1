import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();

registerApplication({
  name: "@visionemos/root",
  app: () => System.import("@visionemos/root"),
  activeWhen: ["/root"]
});

registerApplication({
  name: "@visionemos/home",
  app: () => System.import("@visionemos/home"),    
  //activeWhen: ()=>true
  activeWhen: ["/home"]
 
});

registerApplication({
  name: "@visionemos/comprobantes",
  app: () => System.import("@visionemos/comprobantes"),    
  activeWhen: ["/comprobantes"]
});

registerApplication({
  name: "@visionemos/comprobantes/crear",
  app: () => System.import("@visionemos/createForm"),    
  activeWhen: ["/comprobantes/crear"]
});

registerApplication({
  name: "@visionemos/comprobantes/detalle",
  app: () => System.import("@visionemos/detalleComp"),    
  activeWhen: ["/comprobantes/detalle/:idDeta"]
});

registerApplication({
  name: "@visionemos/comprobantes/actualizar",
  app: () => System.import("@visionemos/updateForm"),    
  activeWhen: ["/comprobantes/actualizar/:idDeta"]
});

registerApplication({
  name: "@visionemos/comprobantes/confirmacion",
  app: () => System.import("@visionemos/confirmacion"),    
  activeWhen: ["/comprobantes/confirmacion"]
});

registerApplication({
  name: "@visionemos/puc",
  app: () => System.import("@visionemos/puc"),    
  activeWhen: ["/puc"]
});

registerApplication({
  name: "@visionemos/puc/crear",
  app: () => System.import("@visionemos/createPuc"),    
  activeWhen: ["/puc/crear"]
});

registerApplication({
  name: "@visionemos/movimientos",
  app: () => System.import("@visionemos/movimientos"),    
  activeWhen: ["/movimientos"]
});

registerApplication({
  name: "@visionemos/movimientos/captura",
  app: () => System.import("@visionemos/receiptMotionCapture"),    
  activeWhen: ["/movimientos/captura"]
});


registerApplication({
  name: "@visionemos/codeudor",
  app: () => System.import("@visionemos/codeudor"),    
  activeWhen: ["/codeudor"]
});

registerApplication({
  name: "@visionemos/codeudor/vercodeudor",
  app: () => System.import("@visionemos/ViewCosigner"),    
  activeWhen: ["/codeudor/vercodeudor"]
});

start({
  urlRerouteOnly: true,
});

    