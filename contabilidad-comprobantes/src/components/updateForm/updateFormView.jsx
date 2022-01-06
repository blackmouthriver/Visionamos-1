import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateForm from './updateForm';

function updateFormView () {

    const { idDeta } = useParams();
  const [allComprobantes, setallComprobantes] = useState([]);
  function getallComprobantes() {
    axios.get("http://localhost:3001/comprobantes/all").then((response) => {
      setallComprobantes(response.data);
    });
  }
  useEffect(() => {
    getallComprobantes();
  }, []);
  const detalle = allComprobantes?.filter((e) => e.id == idDeta);

  const fomulario = () => {
    if(detalle.length !== 0){
        return (
            <UpdateForm
            key={detalle[0]?.id}
            id={detalle[0]?.id}
            vaucher= {detalle[0]?.vaucher}
            sequence= {detalle[0]?.sequence}
            type= {detalle[0]?.type}
            name= {detalle[0]?.name}
            state= {detalle[0]?.state}
            restartSequence= {detalle[0]?.restartSequence}
            automatic= {detalle[0]?.automatic}
             />
        )
    }

  }

  return (
      <>
    {fomulario()}
    </>
  )
}

export default updateFormView;