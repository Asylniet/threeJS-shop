import React from "react";

const ChooseColorButton = ({ color, onButtonClick, chosenColor }) => {
  return (
    <button
      className={`chooseColorButton ${color === chosenColor && "active"}`}
      style={{ backgroundColor: color }}
      onClick={() => onButtonClick(color)}
    ></button>
  );
};

export default ChooseColorButton;
