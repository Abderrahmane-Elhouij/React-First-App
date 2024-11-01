import React from "react";

const Click = () => {
  const handleClick = () => { 
    console.log("Hello Abdo");
  };

  const handleClickAgain = (name, e) => {
    console.log("Hello " + name, e.target);
  };

  return (
    <>
      <h1>Hello</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={(e) => handleClickAgain("Hbira", e)}>Click again</button>
    </>
  );
};

export default Click;
