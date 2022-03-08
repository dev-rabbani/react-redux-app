// initialStates

import { DECREMENT, INCREMENT, RESET } from "./action-types";

const initialStates = {
  count: 0,
};

// reducers
const reducer = (state = initialStates, { type, payload }) => {
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

export default reducer;
