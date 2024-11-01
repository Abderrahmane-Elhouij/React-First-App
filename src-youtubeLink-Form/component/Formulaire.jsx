import React, { useState } from "react";
import axios from "axios";

const Formulaire = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result });
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataString =
      "nom=" +
      formData.nom +
      "&prenom=" +
      formData.prenom +
      "&image=/pics/" +
      formData.image.name;

    try {
      await axios.post("http://localhost:3000/api/stagiaire", formDataString, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      setFormData({ nom: "", prenom: "", image: null });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Ajouter des stagiaires :</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Nom :
          </label>
          <input
            type="text"
            className="form-control"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prenom" className="form-label">
            Prenom :
          </label>
          <input
            type="text"
            className="form-control"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image :
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        {formData.image && (
          <img
            src={formData.image}
            alt={`Profile de ${formData.nom}`}
            className="img-thumbnail"
            width={150}
            height={150}
          />
        )}
        <div className="mt-3">
          <button type="submit" className="btn btn-primary me-2">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulaire;
