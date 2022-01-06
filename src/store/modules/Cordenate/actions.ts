import { ICordenate } from "./types";


export function AddCordenateToStore(store : ICordenate){
  return {
    type: 'ADD_STORE_TO_MARKER',
    payload: {
      store
    }
  }
}