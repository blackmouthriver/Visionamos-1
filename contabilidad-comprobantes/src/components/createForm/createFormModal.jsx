
import React, { useState } from "react";
import ReactTooltip from 'react-tooltip'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
   
  } from "reactstrap";
 

  export function FormModal({Ayuda}){
    const [backdrop, setBackdrop] = useState(false);
    const [modal, setModal] = useState(false);
       console.log(modal, "linea700")
        return <div>
            <button data-tip data-for="buttonTip" className= "btn-openModal" onClick={()=>
                setModal(!modal)
            }>
            <img
                className="ayuda_icon1"
                src={Ayuda}
                alt="img not fount"
            />
            </button>
            <ReactTooltip id="buttonTip" type="light" place="right" effect="float">
                Se debe marcar esta opción
                si se requiere que el consecutivo
                de los comprobantes se reinicie
                cada mes. 
            </ReactTooltip>
           
            <div className="Modal-Position"> 
            <Modal
              isOpen={modal}
              backdrop={backdrop}
            >      
              
              <ModalBody>
              
                <Button onClick={()=>
                    setModal(!modal)
                  }>
                 X
                  </Button>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.  
               
              </ModalBody>
             
              </Modal>
              </div>
              </div>
         
      
  };