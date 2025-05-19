import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperSlide.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchSedato } from "../../Redux/SerialsEpisod/SerialsEpisod";

export default function Serial1() {
  const { sedato } = useSelector((state) => state.sedato);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSedato());
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper swiper1 md:w-[100%]"
      >
        {sedato?.map((elem) => {
          return (
            <SwiperSlide className="swiper-slide1 rounded-lg" key={elem.id}>
              <img src={elem.img} className="rounded-lg" alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
