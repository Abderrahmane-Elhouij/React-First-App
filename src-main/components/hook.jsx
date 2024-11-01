import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button> 
    </>
  );
}

export default Example;