import React, { useState } from "react";

function TextInput() {
  const [input, setInput] = useState("");

  return (
    <>
      <input type="text" onChange={(elt) => setInput(elt.target.value)} />
      <div>Texte saisi : {input}</div>
    </>
  );
}

export default TextInput;
