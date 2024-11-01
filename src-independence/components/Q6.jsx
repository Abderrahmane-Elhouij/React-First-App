import React, { useState } from "react";
import { useSelector } from "react-redux";

function Q6() {
  const countries = useSelector((state) => state.countries);
  const [populationFilter, setPopulationFilter] = useState("");
  const [continentFilter, setContinentFilter] = useState("");

  const filteredByPopulation = populationFilter
    ? countries.filter(
        (country) => country.population > parseInt(populationFilter)
      )
    : countries;

  const filteredByContinent = continentFilter
    ? countries.filter((country) => country.continent === continentFilter)
    : countries;

  return (
    <div id="q6">
      <h2>Q6</h2>
      <div>
        <label htmlFor="populationFilter">Filtrer par population :</label>
        <input
          type="number"
          id="populationFilter"
          value={populationFilter}
          onChange={(e) => setPopulationFilter(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="continentFilter">Filtrer par continent :</label>
        <select
          id="continentFilter"
          value={continentFilter}
          onChange={(e) => setContinentFilter(e.target.value)}
        >
          <option value="">Tous les continents</option>
          <option value="Europe">Europe</option>
          <option value="Asie">Asie</option>
          <option value="Amérique">Amérique</option>
        </select>
      </div>
      {filteredByPopulation.map((country) => (
        <div key={country.code}>
          <h3>{country.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Q6;
