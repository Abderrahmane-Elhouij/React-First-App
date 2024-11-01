import React from "react";
import GestionStg from "./component/gestion";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Youtube from "./component/Youtube";

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">Formulaire</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/partie2">Youtube</Link>
      <Routes>
        <Route path="/" element={<GestionStg />} />
        <Route path="/partie2" element={<Youtube />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
