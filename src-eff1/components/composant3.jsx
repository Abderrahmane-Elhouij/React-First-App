import React, { useState } from "react";

const Search = ({ services }) => {
  const [searchInput, setSearchInput] = useState("");

  const findService = services.filter((item) =>
    item.service.nomser.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Rechercher un service"
      />
      <ul>
        {findService.map((item, index) => (
          <li key={index}>
            <p>
              Nom: {item.nomsal} Prenom: {item.prenomsal}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Search;
