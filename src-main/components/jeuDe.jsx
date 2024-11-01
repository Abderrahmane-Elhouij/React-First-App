import React, { Component } from "react";

export default class JeuDe extends Component {
  constructor(props) { 
    super(props);
    this.state = { face: null, compteur: 0, end: false };
  }

  jouer = () => {
    let faceVal = Math.floor(Math.random() * 6 + 1);
    this.setState({
      face: faceVal,
      compteur: this.state.compteur + 1,
      end: false,
    });
    if (faceVal === this.props.faceCorrect) 
        this.setState({ end: true });
  };

  initial = () => {
    this.setState({ face: null, compteur: 0, end: false });
  };

  render() {
    return (
      <div className="text-center">
        <img
          src={
            this.state.face == null
              ? "jeuDeImg/De.PNG"
              : `jeuDeImg/face${this.state.face}.PNG`
          }
          alt=""
          style={{ width: '200px', height: '200px' }}
        />
        <h1 className="mt-4">Jeu de Dé &#127922;</h1>
        <p className="mt-4">Face : {this.state.face}</p>
        <p>Nombre d'essais : {this.state.compteur}</p>
        {this.state.end ? (
          <div className="mt-4">
            <p>Bravo! Vous avez trouvé la face cachée &#129395; &#x1F973;</p>
            <button className="btn btn-primary" onClick={this.initial}>
              Initialiser
            </button>
          </div>
        ) : (
          <button className="btn btn-primary mt-4" onClick={this.jouer}>
            Jouer
          </button>
        )}
      </div>
    );
  }
}
