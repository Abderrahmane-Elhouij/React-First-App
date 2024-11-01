import axios from "axios";
import React, { useState, useEffect } from "react";

const ListStgs = () => {
  const [stagiaires, setStagiaires] = useState([]);

  useEffect(() => {
    const fetchStagiaires = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/stagiaire");
        setStagiaires(response.data);
      } catch (error) {
        console.error("Error fetching stagiaires:", error);
      }
    };

    fetchStagiaires();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Liste des stagiaires :</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((stagiaire, index) => (
            <tr key={index}>
              <td>{stagiaire.nom}</td>
              <td>{stagiaire.prenom}</td>
              <td>
                {stagiaire.image && (
                  <img
                    src={stagiaire.image}
                    alt={`${stagiaire.nom}`}
                    width={90}
                    height={90}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStgs;
