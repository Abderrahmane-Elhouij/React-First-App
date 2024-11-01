import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getProduct = async () => {
      const data = await fetch("https://fakestoreapi.com/products/" + id);
      const response = await data.json();
      setProduct(response);
    };
    getProduct();
  }, [id]);
  const AjouterPanier = (e) => {
    dispatch({
      type: "ajouter",
      payload: product.id
    });
    navigate("/panier");
  };
  return (
    <div>
      <Link to={"/panier"}>Panier</Link>
      <h1>Single Product</h1>
      {product && (
        <div>
          <img
            src={product.image}
            alt={`${product.title}`}
            width={200}
          />
          <h3>{product.title}</h3>
          <h5>{product.price} $</h5>
          <h5>{product.description}</h5>
          <h5>{product.category}</h5>
          <button onClick={()=>AjouterPanier(product.id)}>Ajouter au panier</button>
        </div>
      )}
    </div>
  );
};

export default Product;
