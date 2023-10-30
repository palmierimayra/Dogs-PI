import { FILTER, ORDER, LOAD_DOGS } from "./types";
import axios from 'axios';

export const loadDogs = () => {
  return async (dispatch) => {
      const response = await axios.get('http://localhost:3001/dogs');
      dispatch({
        type: LOAD_DOGS,
        payload: response.data,
      });
  };
};

export const filterCards = (temperament) => {
  return {
    type: FILTER,
    payload: temperament,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

