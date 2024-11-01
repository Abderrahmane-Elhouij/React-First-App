import React, { Component } from "react";

export default class Compteur extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      debut: props.debut,
      fin: props.fin,
      pas: props.pas,
      compteur: props.debut,
      resultat: "",
    };
  }

  Initialiser() {
    this.setState({
      compteur: this.props.debut,
      resultat: "",
    });
  }

  Jouer() {
    const { compteur, pas, fin } = this.state;
    if (compteur - pas < fin) {
      this.setState({
        compteur: fin,
        resultat: "Fin du jeu",
      });
    } else {
      this.setState({
        compteur: compteur - pas,
        resultat: `Compteur est: ${compteur - pas}`,
      });
    }
  }

  render() {
    return (
      <>
        <p>Pas: {this.state.pas}</p>
        <p>Début: {this.state.debut}</p>
        <p>Fin: {this.state.fin}</p>
        <button onClick={this.Jouer.bind(this)}>Jouer</button>
        {/* <button onClick={()=> this.Jouer}>Jouer</button> */}
        <button onClick={this.Initialiser.bind(this)}>Initialiser jeu</button>
        <p>{this.state.resultat}</p>
      </>
    );
  }
}
