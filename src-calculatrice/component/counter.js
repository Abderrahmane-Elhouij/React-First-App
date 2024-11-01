import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { Link } from "react-router-dom";

const CalculeOperation = () => {
  const [operation, setOperation] = useState("");

  const oplist = useSelector((state) => state.historique);
  const dispatch = useDispatch();

  const calculer = () => {
    dispatch({ type: "calculer", payload: { op: operation } });
  };
  const appendToOperation = (value) => {
    setOperation((prevOperation) => prevOperation + value);
  };
  const vide = () => {
    dispatch({ type: "vide" });
  };
  return (
    <div>
      ecrire l'operation : {operation}
      <p>
        <button onClick={() => appendToOperation("1")}>1</button>
        <button onClick={() => appendToOperation("2")}>2</button>
        <button onClick={() => appendToOperation("3")}>3</button>
      </p>
      <p>
        <button onClick={() => appendToOperation("4")}>4</button>
        <button onClick={() => appendToOperation("5")}>5</button>
        <button onClick={() => appendToOperation("6")}>6</button>
      </p>
      <p>
        <button onClick={() => appendToOperation("7")}>7</button>
        <button onClick={() => appendToOperation("8")}>8</button>
        <button onClick={() => appendToOperation("9")}>9</button>
      </p>
      <p>
        <button onClick={() => appendToOperation("*")}>x</button>
        <button onClick={() => appendToOperation("-")}>-</button>
        <button onClick={() => appendToOperation("+")}>+</button>
        <button onClick={() => appendToOperation("%")}>%</button>
      </p>
      <button onClick={() => calculer()}>Calcler</button>
      <button onClick={() => vide()}>vider</button>
      <p>
        {oplist.map((e, i) => (
          // <h3 key={i}>id:{e.id}  Operation : {e.operation}</h3>
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
