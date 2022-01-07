import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileCsv} from "@fortawesome/free-solid-svg-icons";
import Modals from '../../Modals/Modals';

const DrogAndDrag = () => {
    {/*
    const dropArea = document.querySelector(".drag-area");
    const dragtext = dropArea.querySelector("h2");
    const button = dropArea.querySelector("button");
    const input = dropArea.querySelector("input-file");
    let files;
    

    button.addEventListener("click", (e) =>{
        input.click();
    });

    input.addEventListener("change", (e) =>{
        input.click();
    });
    */}
    return (
        <div id="drag-container">
            <div id='modal-cotainer'>
                 <Modals />
            </div>
        <div class="drag-area">
        
            <h2 id="TextDrog"> <FontAwesomeIcon id="iconfile" icon={faFileCsv} /> Arrastra o seleccione un archivo de su equipo</h2>
        </div>
             <div>
             <div id='preview'></div>
             <input type="file" id="input-file" hidden />
             <button id="buttonimport">Importar</button>
             </div>
        </div>
    )
}

export default DrogAndDrag
