import React, { useState } from "react";

function ChercheBar(props) {
  const [char, SetChar] = useState({
    nom: "",
    prenom: "",
    age: "",
  });

  function onChercheSubmitBar(event) {
    event.preventDefault();
    props.onChercheSubmit(char);
  }

  return (
    <div className="Child">
      <form onSubmit={(event) => onChercheSubmitBar(event)}>
        <h2>composant ChercheBar</h2>
        <div>
          <label>Nom:</label>
          <input
            type="text"
            value={char.nom}
            onChange={(event) => SetChar({ ...char, nom: event.target.value })}
          />
        </div>
        <div>
          <label>Prénom:</label>
          <input
            type="text"
            value={char.prenom}
            onChange={(event) =>
              SetChar({ ...char, prenom: event.target.value })
            }
          />
        </div>
        <div>
          <label>Âge:</label>
          <input
            type="text"
            value={char.age}
            onChange={(event) => SetChar({ ...char, age: event.target.value })}
          />
        </div>
        <button type="submit">Chercher</button>
      </form>
    </div>
  );
}

function ResultatList(props) {
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

const list = [
  { nom: "Elmsoudi", prenom: "Omar", age: 18 },
  { nom: "Chkil", prenom: "Ahmed", age: 34 },
  { nom: "Brada", prenom: "Aziz", age: 24 },
  { nom: "Hdo", prenom: "Ilyass", age: 38 },
  { nom: "Elhdad", prenom: "Aziz", age: 38 },
];

export default function Resultat() {
  const [resChar, setResChar] = useState({
    nom: "",
    prenom: "",
    age: "",
  });
  const [resultas, setResultas] = useState([]);

  function onChercher(char) {
    setResChar(char);
    setResultas(
      list.filter((item) => {
        return (
          item.nom.includes(char.nom) &&
          item.prenom.includes(char.prenom) &&
          (char.age === "" || item.age.toString() === char.age)
        );
      })
    );
  }

  return (
    <div>
      <h1>Composant App</h1>
      <ChercheBar onChercheSubmit={onChercher} />
      <div>
        <p>
          le nom:
          <span style={{ color: "rgb(36, 44, 33)", fontWeight: "bold" }}>
            {resChar.nom}
          </span>
        </p>
        <p>
          le prenom:
          <span style={{ color: "rgb(36, 44, 33)", fontWeight: "bold" }}>
            {resChar.prenom}
          </span>
        </p>
        <p>
          l'âge:
          <span style={{ color: "rgb(36, 44, 33)", fontWeight: "bold" }}>
            {resChar.age}
          </span>
        </p>
      </div>
      <ResultatList resultats={resultas} />
    </div>
  );
}
