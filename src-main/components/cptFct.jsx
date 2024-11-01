import React, { useState } from 'react';

function CptFct() {
  const tab = ["premier", "deuxieme", "troisieme"];
  const [elements, setElements] = useState(tab);

  const handleRemoveClick = (indexToRemove) => {
    // Create a new array without the element at the specified index
    const updatedElements = elements.filter((_, index) => index !== indexToRemove);
    setElements(updatedElements);
  };

  return (
    <ul>
      {elements.map((elt, index) => (
        <li key={index}>
          {elt}
          <input
            type="button"
            value="supprimer"
            onClick={() => handleRemoveClick(index)}
          />
        </li>
      ))}
    </ul>
  );
}

export default CptFct;
