import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  counterDecrement,
  counterIncrement,
  counterReset,
} from "../../redux/counter";

const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  const { count } = counter;
  return (
    <div className="counter">
      <h2 className="title">React Redux Counter App</h2>
      <div className="counter-box">
        <div className="inner">
          <div className="count-value"> Counter value = {count}</div>
          <div className="action-btn-wrapper">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(counterIncrement(10))}
            >
              Increment
            </button>
            <button
              className="btn btn-success"
              onClick={() => dispatch(counterDecrement(5))}
            >
              Decrement
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(counterReset())}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
