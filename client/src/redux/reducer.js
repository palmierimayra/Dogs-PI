import { FILTER, ORDER, LOAD_DOGS, LOAD_TEMP } from "./actions/types";

const initialState = {
  allDogs: [],
  allTemp: [],
  currentPage: 1,
  dogsPerPage: 8, 
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case LOAD_DOGS: {
      return {
        ...state,
        allDogs: payload,
      };
    }
    case LOAD_TEMP: {
      return {
        ...state,
        allTemp: payload,
      };
    }

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
