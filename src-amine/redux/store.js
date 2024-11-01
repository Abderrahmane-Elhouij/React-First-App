import { createStore } from "redux";

const OperationRED = (state = { historique: [], id: 0 }, action) => {
  switch (action.type) {
    case "calculer":
      let t = false;
      while (!t) {
        state.historique.map((e) => {
          if (e.id === state.id) {
            t = true;
          }
        });
        if (t) {
          state.id++;
          t = false;
        } else {
          break;
        }
      }

      return {
        ...state,
        historique: [
          ...state.historique,
          {
            id: state.id,
            operation: action.payload.op + "=" + eval(action.payload.op),
          },
        ],
      };
    case "vide":
      return { historique: [] };
    default:
      return state;
  }
};
const store = createStore(OperationRED);

export default store;
