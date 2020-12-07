import React from "react";
import styles from "./styles.module.scss";

export const Slide = ({ color, children }) => {
  const customStyle = {
    backgroundColor: color ? color : "#c8edfc",
  };
  return (
    <div className={styles.slide} style={customStyle}>
      {children}
    </div>
  );
};
