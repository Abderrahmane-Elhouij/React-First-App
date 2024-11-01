import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url = "https://fakestoreapi.com/products";
      const data = await fetch(url);
      const response = await data.json();
      setData(response);
    };
    getData();
  }, []);
  return (
    <div>
      <Link to={"/panier"}>Panier</Link>
      <h1>List of Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((p, i) => (
          <Link to={`/product/${p.id}`} key={i}>
            <div
              style={{
                margin: "10px",
                padding: "5px",
                border: "1px solid red",
                maxWidth: "230px",
              }}
            >
              <img src={p.image} alt={p.title} width={200} height={200} />
              <b>Title : {p.title}</b>
              <br />
              <b>Prix : {p.price} $</b>
              <br />
              <b>Categorie : {p.category}</b>
              <br />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
