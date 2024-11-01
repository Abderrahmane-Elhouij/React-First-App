import React, { useState } from "react";

function Pc(props) {
  const { id, reft, marque, prix, description } = props;
  const setPanier = props.setPanier;
  const panier = props.panier;
  const stylePc = {
    border: "5px solid blue",
    backgroundColor: "pink",
    marginBottom: "10px",
    padding: "20px",
  };

  function Ajoueterpanier() {
    setPanier([
      ...panier,
      {
        id: id,
        ref: reft,
        marque: marque,
        prix: prix,
        description: description,
      },
    ]);
  }
  return (
    <li style={stylePc}>
      ref: {reft}, marque :{marque}, description{description}, prix:{prix}{" "}
      <br />
      <button onClick={Ajoueterpanier}>Ajouter au panier</button>
    </li>
  );
}

const ListPc = () => {
  const ListPc = [
    {
      id: 1,
      refe: "ref1",
      marque: "Toshiba",
      prix: 15000,
      description: "PC Portable Gamer TOSHIBA",
    },
    {
      id: 2,
      refe: "ref2",
      marque: "ACER",
      prix: 5000,
      description: "Pc Portable Chromebook Acer",
    },
    {
      id: 3,
      refe: "ref3",
      marque: "HUAWEI",
      prix: 17000,
      description: "PC Portable Gamer - HUAWEI",
    },
  ];

  const [panier, setPanier] = useState([]);
  const styleListPC = {
    border: "5px solid red",
    padding: "10px",
    width: "600px",
  };
  return (
    <div style={styleListPC}>
      <h1>Liste des PCs</h1>
      <ul style={{ listStyleType: "none", padding: "10px" }}>
        {ListPc.map((Pcs) => (
          <Pc
            key={Pcs.id}
            ref={Pcs.reft}
            marque={Pcs.marque}
            prix={Pcs.prix}
            description={Pcs.description}
            setPanier={setPanier}
            panier={panier}
          />
        ))}
      </ul>
      <ul>
        {panier.length === 0 ? (
          <h1>Votre panier est vide</h1>
        ) : (
          <div>
            <h2>lists des articles de votre panier sont:</h2>
            <ul style={{ listStyleType: "none", padding: "20px" }}>
              {panier.map((item) => (
                <li
                  style={{
                    border: "5px solid blue",
                    backgroundColor: "pink",
                    marginBottom: "10px",
                    padding: "20px",
                  }}
                  key={item.id}
                >
                  ref: {item.ref}, marque: {item.marque}, description:
                  {item.description}, prix: {item.prix}
                </li>
              ))}
            </ul>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ListPc;
