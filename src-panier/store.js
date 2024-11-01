import { createStore } from "redux";

const PanierReducer = (state = { panier: [] }, action) => {
  if (action.type === "ajouter") {
    return {
      ...state,
      panier: [...state.panier, action.payload],
    };
  } else if (action.type === "supprimer") {
    const newPanier = state.panier.filter(
      (number) => number !== action.payload
    );
    return { ...state, panier: newPanier };
  } else {
    return state;
  }
};
const store = createStore(PanierReducer);
export default store;
