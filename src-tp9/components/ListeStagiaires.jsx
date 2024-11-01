import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListeStagiaires() {
  const [stagiaires, setStagiaires] = useState([]);

  useEffect(() => {
    const fetchStagiaires = async () => {
      const response = await axios.get('http://localhost:3001/api/stagiaires');
      setStagiaires(response.data);
    };

    fetchStagiaires();
  }, []);

  return (
    <>
      <h1>Liste des stagiaires</h1>
      {stagiaires.map((stagiaire) => (
        <div key={stagiaire.id}>
          <p>{stagiaire.nom}</p>
          <p>{stagiaire.prenom}</p>
          <img src={stagiaire.image} alt={stagiaire.nom} />
        </div>
      ))}
    </>
  );
}

export default ListeStagiaires;
