import React from 'react';
import { useSelector } from 'react-redux';

function Q3() {
  const countries = useSelector(state => state.countries);

  return (
    <div id="q3">
      <h2>Q3</h2>
      {countries.map(country => (
        <div key={country.code}>
          <h3>{country.name}</h3>
          <p>Continent: {country.continent}</p>
          <p>Surface Area: {country.surfaceArea}</p>
          <p>Population: {country.population}</p>
          <img src={country.image} alt={country.name} />
        </div>
      ))}
    </div>
  );
}

export default Q3;
