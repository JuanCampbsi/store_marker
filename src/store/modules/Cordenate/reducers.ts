import { Reducer } from "redux";
import { ICordenateState } from "./types";
import produce from 'immer';


const INITIAL_STATE : ICordenateState = {
  items: []
};

const Cordenate: Reducer<ICordenateState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {    
    switch(action.type){
        case 'ADD_STORE_TO_MARKER':{
          const { store } = action.payload;             
            draft.items.push({
              store,
              quantity:1
            })         
        }
        break;
        
        default: {
          return draft;
        }
      }
  });
}

export default Cordenate;