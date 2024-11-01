import React, { useState, useEffect } from "react";
import FormVoiture from "./components/composant1";
import Search from "./components/composant3";
import axios from "axios";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/salaries")
      .then((response) => {
        setSalaries(response.data);
      })
      .catch((error) => error);
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form-voiture" element={<FormVoiture salaries= {salaries} />} />
        <Route path="/form-voiture" element={<Search services={salaries} />} />
      </Routes>
    </BrowserRouter>
  );
}
