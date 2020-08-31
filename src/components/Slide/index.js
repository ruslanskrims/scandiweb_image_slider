import React from "react";
import "./styles.css";

export const Slide = ({ id, url }) => {
  return (
    <div className="item" key={id}>
      <div
        className="item-image"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
    </div>
  );
};
