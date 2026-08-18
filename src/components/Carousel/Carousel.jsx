import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import LeftArrow from "../LeftArrow/LeftArrow";
import RightArrow from "../RightArrow/RightArrow";

import styles from "./Carousel.module.css";

function Carousel({ data, renderComponent }) {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigation = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  useEffect(() => {
    if (!swiperRef.current || data.length === 0) {
      return;
    }

    // Recalculate Swiper after API data has been rendered
    swiperRef.current.update();

    updateNavigation(swiperRef.current);
  }, [data.length]);

  return (
    <div className={styles.carousel}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;

          if (data.length > 0) {
            updateNavigation(swiper);
          }
        }}
        onSlideChange={updateNavigation}
        onResize={updateNavigation}
        spaceBetween={24}
        slidesPerView={7}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
          1440: {
            slidesPerView: 7,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      {!isBeginning && (
        <LeftArrow
          onClick={() => swiperRef.current?.slidePrev()}
        />
      )}

      {!isEnd && (
        <RightArrow
          onClick={() => swiperRef.current?.slideNext()}
        />
      )}
    </div>
  );
}

export default Carousel;