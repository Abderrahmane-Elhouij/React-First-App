import { useState } from "react";

const InputNmae = () => {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <input type="text" onChange={event =>setInputValue(event.target.value)} /><br />
      <button onClick={()=>setName(inputValue)}>Click</button><br />
      {name && <p>Hello {name} !</p>}
    </>
  );
};

export default InputNmae;
