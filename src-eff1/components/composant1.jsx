import React, { useState } from "react";

const FormVoiture = ({ salaries }) => {
  const [matricule, setMaricule] = useState("");
  const [marque, setMarque] = useState("");
  const [date, setDate] = useState("");
  const [couleur, setCouleur] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h1>Gestion Voitures</h1>
        <label htmlFor="">Matricule</label>
        <input type="text" onChange={(e) => setMaricule(e.target.value)} />{" "}
        <br />
        <label htmlFor="">Marque</label>
        <select name="" id="" onChange={(e) => setMarque(e.target.value)}>
          <option value="toyota">Toyota</option>
          <option value="dacia">Dacia</option>
          <option value="mercedes">Mercedes</option>
        </select>
        <label htmlFor="">Date de mise en circulation</label>
        <input type="date" onChange={(e) => setDate(e.target.value)} /> <br />
        <label htmlFor="">Couleur</label>
        <input type="text" onChange={(e) => setCouleur(e.target.value)} />{" "}
        <br />
        <button type="submit">Confirmer</button>
      </form>

      {submitted && (
        <>
          <h1>Recapitulatif des informations:</h1>
          <p>Matricule: {matricule}</p>
          <br />
          <p>Marque: {marque}</p>
          <br />
          <p>Date de mise en circulation: {date}</p>
          <br />
          <p>Couleur: {couleur}</p>
        </>
      )}

      <h1>Liste des salaries</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Fonction</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((salary, index) => (
            <tr key={index}>
              <td>{salary.nomsal}</td>
              <td>{salary.prenomsal}</td>
              <td>{salary.fonction}</td>
              <td>{salary.service.nomser}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FormVoiture;
