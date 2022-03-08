import { DECREMENT, INCREMENT, RESET } from "./action-types";

// action creators
export const counterIncrement = (payload) => {
  return {
    type: INCREMENT,
    payload: payload,
  };
};

export const counterDecrement = (payload) => {
  return {
    type: DECREMENT,
    payload: payload,
  };
};

export const counterReset = () => {
  return {
    type: RESET,
  };
};
