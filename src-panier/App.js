import React from "react";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Components/Product";
import Panier from "./Components/Panier";
import Products from "./Components/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
