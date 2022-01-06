import React, { useEffect } from 'react';
import './sidebar.Styles.css';
import Virtualcoopicono from '../../assets/icons/Virtualcoopicono.png'
import VirtualcoopLogo from '../../assets/icons/VirtualcoopLogo.png'
import Home from '../../assets/icons/Home.png'
import Fabrica from '../../assets/icons/Fabrica.png'
import Operativos from '../../assets/icons/Operativos.png'
import Tesoreria from '../../assets/icons/Tesoreria.png'
import Contabilidad from '../../assets/icons/Contabilidad.png'
import Cartera from '../../assets/icons/Cartera.png'
import Reportes from '../../assets/icons/Reportes.png'
import {initial} from './script'


const sidebarMenu = () => {

 useEffect(()=> initial(), [])


     return(

        <body id="body">
              <header>
                <div class="icon__menu">
                    <i class="fas fa-bars" id="btn_open"></i>
                </div>
              </header>

            <div class="menu__side" id="menu_side">

                <div className="logo">
                    <img src={Virtualcoopicono} alt="visionemos"/>
                    <img src={VirtualcoopLogo} alt="visionemos"/>
                </div>
        
              <div class="options__menu">	
            
                   <a href="#" >
                     <div class="option">
                        <img src={Home} alt="Home" title="Home"/>
                        <h4>Home</h4>
                     </div>
                    </a>    
          
                   <a href="#" class="selected">
                     <div class="option">
                       <img src={Operativos} alt="Operativos" title="Operativos"/>
                       <h4>Operativos</h4>
                     </div>
                   </a>

                   <a href="#">
                     <div class="option">
                     <img src={Fabrica} alt="Fabrica" title="Fabrica de Créditos"/>
                       <h4>Fabrica de Créditos</h4>
                     </div>
                   </a>
            
                   <a href="#">
                     <div class="option1" >
                       <img src={Tesoreria} alt="Tesoreria" title="Tesorería"/>
                       <h4>Tesoreria</h4>
                    </div>
                    </a>

                   <a href="#">
                   <div class="option">
                     <img src={Contabilidad} alt="Contabilidad" title="Contabilidad"/>
                       <h4>Contabilidad</h4>
                     </div>
                   </a>

                   <a href="#">
                   <div class="option">
                     <img src={Cartera} alt="Cartera" title="Cartera"/>
                       <h4>Cartera</h4>
                     </div>
                   </a>

                   <a href="#">
                   <div class="option">
                     <img src={Reportes} alt="Reportes" title="Reportes"/>
                       <h4>Reportes</h4>
                     </div>
                    </a>
               </div>
    
            </div>
            {/*<div>
              <h1>Title Example</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptatibus voluptas porro dolores praesentium a aliquam quia iusto vitae rem quas est unde, modi odit voluptatum illo reiciendis ut sed.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet explicabo excepturi voluptatum porro impedit molestiae cum unde odit, commodi nam ipsa voluptas at quia quisquam iure fugiat quo ea?</p>
            </div>*/}
            
        </body>
    );

}

export default sidebarMenu

