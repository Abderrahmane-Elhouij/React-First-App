import React, { Component } from "react";

class Commande extends Component {
  render() {
    const { nom, date, montant, etat } = this.props;
    return (
      <>
        <h1>Liste commande</h1>
        <ul>
          <li>{nom}</li> 
          <li>{date}</li>
          <li>{montant}</li>
          <li>{etat}</li>
        </ul>
      </>
    );
  }
}

function ListeCommande({commandes}) {
  return (
    <>
      {commandes.map((commande,index) => (
        <Commande
          key={index}
          nom={commande.nom}
          date={commande.date}
          montant={commande.montant}
          etat={commande.etat}
        />
      ))}
    </>
  );
}

export default ListeCommande;
