import React from "react";
import styles from "./LeftArrow.module.css";
import leftArrow from "../../assets/left-arrow.svg";

function LeftArrow({ onClick }) {
  return (
    <button
      className={styles.arrow}
      onClick={onClick}
      aria-label="Previous"
    >
      <img src={leftArrow} alt="Previous" />
    </button>
  );
}

export default LeftArrow;