import React from "react";

function Membre(props) {
  return (
    <table> 
      <tr>
        <td>Nom Complet:</td>
        <td>{props.nomcomplet}</td>
      </tr>
      <tr>
        <td>Adresse:</td>
        <td>{props.addresse}</td>
      </tr>
      <tr>
        <td>Avatar:</td>
        <td>
          <img
            src={props.avatar}
            alt={props.nomcomplet}
            className="img-thumbnail"
            style={{ width: '200px', height: '200px'}}
          />
        </td>
      </tr>
    </table>
  );
}

const membres = [
  {
    id: 1,
    nomcomplet: "zaher mechbouk",
    addresse: "xxxxxxxxxxxxxxxxx",
    avatar: "img/zm.jpg",
  },
  {
    id: 2,
    nomcomplet: "aissam elazouzi",
    addresse: "xxxxxxxxxxxxxxxxxxxx",
    avatar: "img/ae.jpg",
  },
];

function Membres() {
  return (
    <>
      {membres.map((elt) => (
        <Membre
          key={elt.id}
          nomcomplet={elt.nomcomplet}
          addresse={elt.addresse}
          avatar={elt.avatar}
        />
      ))}
    </>
  );
}

export default Membres;
