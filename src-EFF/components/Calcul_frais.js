import React from "react";

const Calcul_frais = () => {
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Montant de vente du blen:</th>
              <th>
                <input
                  name="title"
                  type="text"
                  id="title"
                  placeholder="Title"
                />
              </th>
              <th>
                <button className="btn btn-sm btn-success">Calculer</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Droits d'enregistrement (4% de prix de vente):</td>
              <td></td>
            </tr>
            <tr>
              <td>Conservation fonciere (1,5% de prix de vente + 200DH):</td>
              <td></td>
            </tr>
            <tr>
              <td>Frais de dossier (timbres, copies...) :</td>
              <td></td>
            </tr>
            <tr>
              <td>
                honoraires du notaire (1,25% du prix de vente dans ce cas):
              </td>
              <td></td>
            </tr>
            <tr>
              <td>TVA sur les honoraires du notaire (10%) :</td>
              <td></td>
            </tr>
            <tr>
              <td>TOTAL=</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calcul_frais;
