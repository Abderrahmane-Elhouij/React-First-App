import React, { useState } from 'react';
import axios from 'axios';

function FormulaireStagiaire() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('prenom', prenom);
    formData.append('image', image);

    await axios.post('http://localhost:3001/api/stagiaires', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Rafraîchir la liste des stagiaires
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Ajouter un stagiaire</h1>
      <label htmlFor="nom">Nom:</label>
      <input type="text" id="nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      <br />
      <br />
      <label htmlFor="prenom">Prénom:</label>
      <input type="text" id="prenom" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      <br />
      <br />
      <label htmlFor="image">Image:</label>
      <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      <br />
      <br />
      <input type="submit" value="Ajouter stagiaire" />
    </form>
  );
}

export default FormulaireStagiaire;
