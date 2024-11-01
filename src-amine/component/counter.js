import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CalculeOperation = () => {
  const [operation, setOperation] = useState();

  const oplist = useSelector((state) => state.historique);
  const dispatch = useDispatch();

  const calculer = () => {
    dispatch({ type: "calculer", payload: { op: operation } });
  };
  const vide = () => {
    dispatch({ type: "vide" });
  };
  return (
    <div>
      ecrire l'operation :{" "}
      <input type="text" onChange={(e) => setOperation(e.target.value)} />
      <button onClick={() => calculer()}>Calcler</button>
      <button onClick={() => vide()}>vider</button>
      <p>
        {oplist.map((e, i) => (
          <h3 key={i}>
            <Link to={`/AfficheHistorique/${e.id}`}>
              id:{e.id} Operation : {e.operation}
            </Link>
          </h3>
        ))}
      </p>
    </div>
  );
};

export default CalculeOperation;
