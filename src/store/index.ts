import { createStore } from 'redux';
import { ICordenateState } from './modules/Cordenate/types';
import rootReducer from './rootReducer';

export interface IState {
  store: ICordenateState;
}

const store = createStore(rootReducer)

export default store;