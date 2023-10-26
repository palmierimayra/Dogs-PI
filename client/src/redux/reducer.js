import { FILTER, ORDER } from "./actions/types";

const initialState = {
  allDogs: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case FILTER: {
      const filtroTLista = state.allDogs.filter(
        (dog) => dog.temperament === payload
      );
      return {
        ...state,
        allDogs: filtroTLista,
      };
    }

    case ORDER:
      let dogs = state.allDogs;
      let order = dogs.sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        } else if (payload === "D") {
          return b.id - a.id;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        allDogs: order,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
