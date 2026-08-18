import React from "react";
import Chip from "@mui/material/Chip";

import styles from "./Card.module.css";

function Card({
  image,
  follows,
  likes,
  title,
  isSong = false,
}) {
  const count = isSong ? likes : follows;
  const label = isSong ? "Likes" : "Follows";

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={title}
          className={styles.image}
        />

        <div className={styles.followContainer}>
          <Chip
            label={`${count} ${label}`}
            className={styles.chip}
          />
        </div>
      </div>

      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;