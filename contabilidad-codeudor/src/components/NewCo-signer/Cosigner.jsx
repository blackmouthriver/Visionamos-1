import React from 'react'
import Breadcrmb from '../NavabrAndBreadcrumb/Breadcrumb'
import { Accordion, Card, Button } from 'react-bootstrap' 
import ViewPersonalInformation from './ViewPersonalInformation'
import ViewJobsInformation from './ViewJobsInformation'
import ViewContacInformation from './ViewContacInformation'
import ViewIncome from './ViewIncome'
import ViewExpenses from './ViewExpenses'
import ViewAssets from './ViewAssets'
import ViewPassives from './ViewPassives'

const Cosigner = () => {
    return (
        <div>
            <Breadcrmb />
                <div id='titlehead'>
                    <br></br>
                    <h1 className="title">NUEVO CODEUDOR</h1>
                </div>
            <Accordion defaultActiveKey="0" flush id='accordionBody'>
                        <Accordion.Item  flush id='accordionItem' eventKey="1">
                        <Accordion.Header flush id='accordionHeader'>Datos Personales</Accordion.Header>
                                        <Accordion.Body id='subAccordionBody'>
                                            <ViewPersonalInformation />
                                        </Accordion.Body>
                                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                        <Accordion.Header id='accordionHeader'>Datos Laborales</Accordion.Header>
                                        <Accordion.Body id='subAccordionBody'>
                                            <ViewJobsInformation />
                                        </Accordion.Body>
                                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header id='accordionHeader'>Datos de Contacto</Accordion.Header>
                                        <Accordion.Body>
                                            <ViewContacInformation />
                                        </Accordion.Body>
                                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                        <Accordion.Header id="accordionHeadertwo"> Información Económica</Accordion.Header>
                                        <Accordion.Body id='interAccordionBody'>
                        <Accordion defaultActiveKey="5">
                        <Accordion.Item eventKey="6">
                                        <Accordion.Header id='accordionHeader'> Ingresos</Accordion.Header>
                                        <Accordion.Body>
                                             <ViewIncome />
                                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                                        <Accordion.Header id='accordionHeader'>Egresos</Accordion.Header>
                                        <Accordion.Body>
                                              <ViewExpenses />
                                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                                        <Accordion.Header id='accordionHeader'> Activos</Accordion.Header>
                                        <Accordion.Body>
                                              <ViewAssets />
                                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                                        <Accordion.Header id='accordionHeader'> Pasivos</Accordion.Header>
                                        <Accordion.Body>
                                                 <ViewPassives />  
                                        </Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion>      
                                        </Accordion.Body>
                        </Accordion.Item>
             </Accordion> 
             <div id='spaceButtonAccept'>
             <button id="ButtonAceptar">Aceptar</button>  
             </div>   
        </div>
    )
}

export default Cosigner

