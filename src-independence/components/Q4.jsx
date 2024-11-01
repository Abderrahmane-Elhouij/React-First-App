import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Q4() {
  const countries = useSelector(state => state.countries);
  const [selectedYear, setSelectedYear] = useState(null);

  const filteredCountries = selectedYear
    ? countries.filter(country => country.indepYear === selectedYear)
    : countries;

  return (
    <div id="q4">
      <h2>Q4</h2>
      <div>
        {Array.from(new Set(countries.map(country => country.indepYear))).map(year => (
          <button key={year} onClick={() => setSelectedYear(year)}>
            {year}
          </button>
        ))}
      </div>
      {filteredCountries.map(country => (
        <div key={country.code}>
          <h3>{country.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Q4;
