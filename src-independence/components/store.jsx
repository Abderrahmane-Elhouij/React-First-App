import { createStore } from 'redux';

const initialState = {
  countries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNTRY':
      return {
        ...state,
        countries: [...state.countries, action.payload],
      };
    case 'UPDATE_POPULATION':
      return {
        ...state,
        countries: state.countries.map(country =>
          country.code === action.payload.code
            ? { ...country, population: action.payload.population }
            : country
        ),
      };
    default:
      return state;
  }
};

const addCountry = country => ({
  type: 'ADD_COUNTRY',
  payload: country,
});

const updatePopulation = (code, population) => ({
  type: 'UPDATE_POPULATION',
  payload: { code, population },
});

const store = createStore(reducer);

export { store, addCountry, updatePopulation };
