import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Panier = () => {
  let panier = useSelector((state) => state.panier);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      const url = "https://fakestoreapi.com/products";
      const fetchData = await fetch(url);
      const response = await fetchData.json();
      const ddata = panier.map((e) => response.find((p) => e === p.id));
      const totalPrice = ddata.reduce((t, item) => {
        return t + item.price;
      }, 0);
      setData(ddata);
      setTotal(totalPrice);
    };
    getProduct();
  }, [panier]);
  const suprimer = (i) => {
    dispatch({
      type: "supprimer",
      payload: i,
    });
  };
  return (
    <>
      <Link to={"/products"}>Products</Link>
      <h1>Total Prix : {total} $</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((e, i) => (
          <div
            key={i}
            style={{
              margin: "10px",
              padding: "5px",
              border: "1px solid red",
              maxWidth: "230px",
            }}
          >
            <img src={e.image} alt={`${e.title}`} width={200} />
            <h3>{e.title}</h3>
            <h4>Price : {e.price} $</h4>
            <h4>Categorie : {e.category}</h4>
            <h4>Prix Total : {e.price}</h4>
            <button type="button" onClick={() => suprimer(e.id)}>
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Panier;
