import React from "react";

export default function ResultatList(props) {
  return (
    <div className="Child">
      <h1>composant ResultatList</h1>
      {props.resultats.length === 0 ? (
        <p>pas de résultats</p>
      ) : (
        <div className="list">
          <ul>
            {props.resultats.map((item) => (
              <li key={item.nom}>
                <p>Nom: {item.nom}</p>
                <p>Prénom: {item.prenom}</p>
                <p>Âge: {item.age}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
