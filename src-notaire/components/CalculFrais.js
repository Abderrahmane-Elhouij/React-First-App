import React, { useState } from "react";
import { connect } from "react-redux";
import "./CalculFraisStyle.css";

const CalculFrais = ({ dispatch }) => {
  const [montantVente, setMontantVente] = useState("");
  const [droitsEnregistrement, setDroitsEnregistrement] = useState("");
  const [conservationFonciere, setConservationFonciere] = useState("");
  const [fraisDossier, setFraisDossier] = useState("");
  const [honorairesNotaire, setHonorairesNotaire] = useState("");
  const [tvaHonoraires, setTvaHonoraires] = useState("");
  const [totalCalcul, setTotalCalcul] = useState("");

  const calculateFrais = () => {
    const droitsEn = 0.04 * parseFloat(montantVente);
    const conservation = 0.015 * parseFloat(montantVente) + 200;
    const honorairesNotaire = 0.0125 * parseFloat(montantVente);
    const tvaHonoraires = 0.1 * honorairesNotaire;

    const totalCalcul =
      droitsEn + conservation + 1500 + honorairesNotaire + tvaHonoraires;

    dispatch({
      type: "AJOUTER_SIMULATION",
      payload: {
        id: montantVente,
        droitsEn,
        conservation,
        date: new Date(),
        total: totalCalcul.toFixed(2),
      },
    });

    setDroitsEnregistrement(droitsEn.toFixed(2));
    setConservationFonciere(conservation.toFixed(2));
    setFraisDossier("1500");
    setHonorairesNotaire(honorairesNotaire.toFixed(2));
    setTvaHonoraires(tvaHonoraires.toFixed(2));
    setTotalCalcul(totalCalcul.toFixed(2));
  };

  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Montant de vente du bien:</th>
              <th>
                <input
                  name="montantVente"
                  type="text"
                  id="montantVente"
                  placeholder="Montant de vente"
                  value={montantVente}
                  onChange={(e) => setMontantVente(e.target.value)}
                />
              </th>
              <th>
                <button
                  className="btn btn-sm btn-success"
                  onClick={calculateFrais}
                >
                  Calculer
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Droits d'enregistrement (4% de prix de vente):</td>
              <td>{droitsEnregistrement}</td>
            </tr>
            <tr>
              <td>Conservation foncière (1,5% de prix de vente + 200DH):</td>
              <td>{conservationFonciere}</td>
            </tr>
            <tr>
              <td>Frais de dossier (timbres, copies...) :</td>
              <td>{fraisDossier}</td>
            </tr>
            <tr>
              <td>Honoraires du notaire :</td>
              <td>{honorairesNotaire}</td>
            </tr>
            <tr>
              <td>TVA sur les honoraires du notaire (10%) :</td>
              <td>{tvaHonoraires}</td>
            </tr>
            <tr>
              <td>Total=</td>
              <td>{totalCalcul}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default connect()(CalculFrais);
