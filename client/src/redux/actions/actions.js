import { FILTER, ORDER } from "./types";

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
