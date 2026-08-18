import React, { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

import styles from "./Section.module.css";

function Section({
  title,
  endpoint,
  showAll = true,
  isSongSection = false,
}) {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [showCarousel, setShowCarousel] = useState(true);

  // Fetch albums/songs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://qtify-backend.labs.crio.do${endpoint}`
        );

        setData(response.data);
      } catch (error) {
        console.error(`Error fetching ${title}:`, error);
      }
    };

    fetchData();
  }, [endpoint, title]);

  // Fetch genres only for Songs section
  useEffect(() => {
    if (!isSongSection) {
      return;
    }

    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/genres"
        );

        setGenres(response.data.data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, [isSongSection]);

  const handleGenreChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  // Filter songs based on selected genre
  const filteredData = isSongSection
    ? selectedGenre === "all"
      ? data
      : data.filter((song) => song.genre.key === selectedGenre)
    : data;

  return (
    <section
        className={`${styles.section} ${
            isSongSection ? styles.songSection : ""
        }`}
    >
        <div className={styles.header}>
            <h2>{title}</h2>

            {showAll && !isSongSection && (
            <button
                className={styles.collapseButton}
                onClick={() => setShowCarousel((prev) => !prev)}
            >
                {showCarousel ? "Show All" : "Collapse"}
            </button>
            )}
        </div>

        {isSongSection && (
            <Tabs
            value={selectedGenre}
            onChange={handleGenreChange}
            className={styles.tabs}
            >
            <Tab value="all" label="All" />

            {genres.map((genre) => (
                <Tab
                key={genre.key}
                value={genre.key}
                label={genre.label}
                />
            ))}
            </Tabs>
        )}

        {isSongSection ? (
            <Carousel
            data={filteredData}
            renderComponent={(song) => (
                <Card
                image={song.image}
                likes={song.likes}
                title={song.title}
                isSong
                />
            )}
            />
        ) : showCarousel ? (
            <Carousel
            data={data}
            renderComponent={(album) => (
                <Card
                image={album.image}
                follows={album.follows}
                title={album.title}
                />
            )}
            />
        ) : (
            <div className={styles.grid}>
            {data.map((album) => (
                <Card
                key={album.id}
                image={album.image}
                follows={album.follows}
                title={album.title}
                />
            ))}
            </div>
        )}
        </section>
  );
}

export default Section;