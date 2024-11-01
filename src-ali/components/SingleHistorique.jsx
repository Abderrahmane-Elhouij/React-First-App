import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



const SingleHistorique = () => {

    const [historique, setHistorique] = useState();

    let { id } = useParams();

    const historiqueList = useSelector(state => state.Historique);

    const find = historiqueList.find(e=>e.id == id);


  return (
    <div>
        <h1>Single Historique page</h1>
        {find ? 
                <h2>Id : {find.id} ||| Operation : {find.operation}</h2>
            :   <h2>Historique avec ce Id n'exists pas</h2>}
        
    </div>
  )
}

export default SingleHistorique