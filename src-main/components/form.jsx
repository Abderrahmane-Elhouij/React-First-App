import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{name}</p>
    </>
  );
};

export default Form;
