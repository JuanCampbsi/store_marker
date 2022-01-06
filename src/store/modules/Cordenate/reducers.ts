import { Reducer } from "redux";
import { ICordenateState } from "./types";


const INITIAL_STATE : ICordenateState = {
  items: []
}

const Cordenate: Reducer<ICordenateState> = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'ADD_STORE_TO_MARKER':{
      const { store } = action.payload;      

      return {
        ...state,
          items: [
            ...state.items,
            {
              store,
              quantity:1
            }
          ]
      };
    }
    default: {
      return state;
    }
  }

}

export default Cordenate;