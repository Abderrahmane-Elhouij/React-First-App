import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCountry } from './store';

function Q5() {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [population, setPopulation] = useState('');

  const handleAddCountry = () => {
    dispatch(
      addCountry({
        name: 'Nom du pays',
        continent: 'Continent',
        surfaceArea: 'Superficie',
        image: 'URL image',
        indepYear: 'Année indépendance',
        population: 'Population totale',
        cities: [
          {
            name: city,
            district: 'Province/Région',
            population: population,
            capital: true,
          },
        ],
      })
    );
    setCity('');
    setPopulation('');
  };

  return (
    <div id="q5">
      <h2>Q5</h2>
      <form onSubmit={handleAddCountry}>
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Nom de la ville"
          required
        />
        <input
          type="number"
          value={population}
          onChange={e => setPopulation(e.target.value)}
          placeholder="Population"
          required
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default Q5;
