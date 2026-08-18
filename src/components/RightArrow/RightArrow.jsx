import React from "react";
import styles from "./RightArrow.module.css";
import rightArrow from "../../assets/right-arrow.svg";

function RightArrow({ onClick }) {
  return (
    <button
      className={styles.arrow}
      onClick={onClick}
      aria-label="Next"
    >
      <img src={rightArrow} alt="Next" />
    </button>
  );
}

export default RightArrow;