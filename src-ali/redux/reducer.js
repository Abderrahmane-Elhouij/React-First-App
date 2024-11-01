
import { SOME, SUBSTRACTION, MULTIPLICATION, DIVISION, CALCULE } from './actions';

const initialState = {
  Historique:[],
  id:0
};

const ClacReducer = (state = initialState, action) => {

  let t = false;
  while(!t){
    state.Historique.map(e=>{
      if(e.id == state.id){
        t=true;
      }
    })
    if(t){
      state.id++;
      t=false;
    }else{
      break;
    }
  }
  switch (action.type) {
    case CALCULE:
      return { ...state,
        Historique: [
          ...state.Historique,
          {
            id: state.id,
            operation: action.payload.op + " = " + eval(action.payload.op),
          },
        ],
      }
    case SOME:
      return { ...state,
        Historique: [
          ...state.Historique,
          {
            id: state.id,
            operation: action.payload.num1 +" + "+ action.payload.num2 +" = "+ (parseInt(action.payload.num1) + parseInt(action.payload.num2)),
          },
        ],
      }
    case SUBSTRACTION:
      return { ...state,
        Historique: [
          ...state.Historique,
          {
            id: state.id,
            operation: action.payload.num1 +" - "+ action.payload.num2 +" = "+ (action.payload.num1 - action.payload.num2),
          },
        ],
      }
    case MULTIPLICATION:
      return { ...state,
        Historique: [
          ...state.Historique,
          {
            id: state.id,
            operation: action.payload.num1 +" x "+ action.payload.num2 +" = "+ (action.payload.num1 * action.payload.num2),
          },
        ],
      }
    case DIVISION:
      return { ...state,
        Historique: [
          ...state.Historique,
          {
            id: state.id,
            operation: action.payload.num1 +" / "+ action.payload.num2 +" = "+ (action.payload.num1 / action.payload.num2),
          },
        ],
      }
    default:
      return state;
  }
};

export default ClacReducer;