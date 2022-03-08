import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterContext } from "../../context-api/counter-context";
import {
  counterDecrement,
  counterIncrement,
  counterReset,
} from "../../redux/counter/action-creator";
import ActionButton from "./ActionButton";

const Counter = () => {
  // react-redux hooks stuff
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const { count } = counter;

  // useContext
  const counterValue = useContext(counterContext);
  return (
    <div className="counter">
      <h2 className="title">React Redux Counter App</h2>
      <div className="counter-box">
        <div className="inner">
          <div className="count-value"> Counter value From Redux = {count}</div>
          <div className="count-value">
            {" "}
            Counter value from context Api = {counterValue}
          </div>
          <div className="action-btn-wrapper">
            <ActionButton
              btnText="Increment"
              btnVariant="btn-primary"
              btnHandler={() => dispatch(counterIncrement(10))}
            />
            <ActionButton
              btnText="Decrement"
              btnVariant="btn-success"
              btnHandler={() => dispatch(counterDecrement(5))}
            />
            <ActionButton
              btnText="Reset"
              btnVariant="btn-danger"
              btnHandler={() => dispatch(counterReset())}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
