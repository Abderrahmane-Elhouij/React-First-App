// App.js

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [image, setImage] = useState("");
  const [stagiaires, setStagiaires] = useState([]);

  useEffect(() => {
    fetchStagiaires();
  }, []);

  const fetchStagiaires = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/stagiaires");
      setStagiaires(response.data);
    } catch (error) {
      console.error("Error fetching stagiaires:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nom", nom);
    formData.append("prenom", prenom);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:3000/api/stagiaires", formData);
      fetchStagiaires();
      setNom("");
      setPrenom("");
      setImage("");
    } catch (error) {
      console.error("Error adding stagiaire:", error);
    }
  };

  return (
    <div>
      <h1>Application de Gestion des Stagiaires</h1>
      <form onSubmit={handleSubmit}>
        <label>Nom:</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <br />
        <br />
        <label>Prénom:</label>
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <br />
        <br />
        <label>Image:</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />
        <br />
        <br />
        <input type="submit" value="Ajouter stagiaire" />
      </form>
      <h1>Listes des stagiaires:</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((stagiaire) => (
            <tr key={stagiaire.id}>
              <td>{stagiaire.nom}</td>
              <td>{stagiaire.prenom}</td>
              <td>
                <img src={stagiaire.image} alt={stagiaire.nom} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
