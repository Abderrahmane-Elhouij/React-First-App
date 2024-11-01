import React from "react";
import "./Acceuil.css";
import { useNavigate } from "react-router-dom";


const Acceuil = () => {
  const navigate=useNavigate();
  const f1 =() =>{
    navigate('/login')
  }
  return (
    <body>
      <div className="container">
        <div className="top-half">
          <img src="imgProjet/Logo Ofppt.jpg" alt="logo" className="img1" />
          <p className="ofppt-paragraph">
            Benvenue à L'Office de la formation professionnelle et de la
            promotion du travail - Votre <br /> Passerelle vers l'Excellence
            Professionnelle avec l'OFPPT
          </p>
        </div>
        <div className="bottom-half">
          <div className="divFormateur">
            <p className="PForamteur">
              Formateur{" "}
              <img src="imgProjet/EcronF.svg" alt="" className="img3" />
            </p>
            <div className="infoF">
              <p>Consultation du planning</p>
              <p>Historique des rapports</p>
              <p>Rapport de la formation</p>
            </div>
            <button type="submit" id="C1" onClick={f1}>
              Connexion
            </button>
          </div>

          <div className="divAdmin">
            <p className="PAdmin">
              Administrateur{" "}
              <img src="imgProjet/EcronA.svg" alt="" className="img4" />
            </p>
            <div className="infoA">
              <p>Gestion des utilisateurs</p>
              <p>Planification des formations</p>
              <p>suivi les formations </p>
              <p>Rapports</p>
            </div>
            <button type="submit" id="C2" onClick={f1}>
              Connexion
            </button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default  Acceuil