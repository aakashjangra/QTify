import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          `https://qtify-backend.labs.crio.do${endpoint}`
        );

        setAlbums(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbums();
  }, [endpoint]);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button className={styles.collapseButton}>
          {title === "Top Albums" ? "Collapse" : "Show All"}
        </button>
      </div>

      <div className={styles.grid}>
        {albums.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            follows={album.follows}
            title={album.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Section;