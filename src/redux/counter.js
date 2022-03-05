import { createStore } from "redux";

// action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

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

// initialStates

const initialStates = {
  count: 0,
};

// reducers
export const reducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + payload,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - payload,
      };
    }
    case RESET: {
      return {
        count: initialStates.count,
      };
    }
    default: {
      return state;
    }
  }
};

// store

const store = createStore(reducer);

export default store;
