import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import './ColorBox.scss'
ColorBox.propTypes = {};

const getrandomColor = () => {
  const COLOR_LIST = ["green", "black", "blue", "yellow", "orange", "red"];
  const randomIndex = Math.trunc(Math.random() * 6);
  return COLOR_LIST[randomIndex];
};
function ColorBox() {
  const handleBoxClick = () => {
    //   get randomcolor -> setCOlor
    const newColor = getrandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  };
  const [color, setColor] = useState(() => {
    const initialColor = localStorage.getItem("box_color") || "red";
    return initialColor;
  });
  return (
    <div
      className="color-box"
      style={{ background: color, color: "white" }}
      onClick={handleBoxClick}
    >
    </div>
  );
}

export default ColorBox;
