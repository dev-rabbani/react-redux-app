import React from "react";

const ActionButton = ({ btnText, btnVariant, btnHandler }) => {
  return (
    <button className={`btn ${btnVariant}`} onClick={btnHandler}>
      {btnText}
    </button>
  );
};

export default ActionButton;
