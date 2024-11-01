import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { actions } from "./store";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [load, setLoad] = useState();

  // const increment = () => {
  //   dispatch(actions.increment());
  // };

  // const decrement = () => {
  //   dispatch(actions.decrement());
  // };

  // const addBy = () => {
  //   dispatch(actions.addBy(10));
  // };

  const increment = () => {
    dispatch({
      type: "INC",
      payload: parseInt(load),
    });
  };

  const decrement = () => {
    dispatch({
      type: "DEC",
      payload: parseInt(load),
    });
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <label>Selectionez un pas:</label>
      <input type="number" onChange={(e) => setLoad(e.target.value)} />
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}
