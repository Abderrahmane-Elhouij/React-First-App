import { createStore } from "redux";


const OperationRED =(state ={historique:[],id:0}, action)=>{
    
    switch(action.type){
        
        case  'calculer':
            while (state.historique.some(e => e.id === state.id)) {
                state.id++;
            }
            return {...state,historique : [...state.historique,
                {
                    id:state.id,
                    operation: action.payload.op + "=" + eval(action.payload.op)
                }
            ] }
        case 'vide':
            return {historique:[]}
        default:
            return state
    }
}
const store = createStore(OperationRED)

export default store;





















 // let t = false;
            // while(!t){
            //     state.historique.map(e=>{
            //     if(e.id == state.id){
            //         t=true;
            //     }
            //     })
            //     if(t){
            //     state.id++;
            //     t=false;
            //     }else{
            //     break;
            //     }
            // }
            // let found = false;

            // for (const e of state.historique) {
            //     if (e.id === state.id) {
            //         found = true;
            //         break;
            //     }
            // }

            // if (found) {
            //     state.id++;
            // }