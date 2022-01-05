import { createStore } from 'redux';

const store = createStore(() => {
  return {
    id: 1,
    name: 'Loja Parme',
    description: 'sjkajksa asjkajks asjkajsk',
    latitude: `-27.2092052`,
    longitude: `-49.6401092`,
  }
});

export default store;