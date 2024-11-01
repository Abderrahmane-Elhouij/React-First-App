import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AfficheHistorique=()=>{
    const listHistorique = useSelector(state => state.historique)
     
    const {id} =useParams() 
    const find = listHistorique.find((e)=>e.id=== id);
    return (
        <div>
            <h1> single historique</h1>
            {find ? 
            <h2>id:{find.id} ||| operation:{find.operation}</h2>   
            : <h2>accun historque trouve</h2>    
        }
        </div>   
    )
}

export default AfficheHistorique;