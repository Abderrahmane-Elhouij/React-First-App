import { createStore } from 'redux';

const initState = {
  ListeSimulation: [],
};

const simulationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'AJOUTER_SIMULATION':
      return {
        ...state,
        ListeSimulation: [...state.ListeSimulation, action.payload],
      };
    case 'VIDER_SIMULATIONS':
      return {
        ...state,
        ListeSimulation: [],
      };
    default:
      return state;
  }
};

const store = createStore(simulationReducer);

export default store;
