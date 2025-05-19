import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../Css/style.css";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchSliders } from "../../Redux/Slider/SliderSlice";
import Slide from "./Slide";

export default function Sliders() {
  const { sliders } = useSelector((state) => state.sliders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSliders());
  }, []);
  return (
    <div className="relative  top-10 bg-cover">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade, Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-[100%] md:h-[80vh] bg-cover"
      >
        {sliders?.map((elem) => {
          return (
            <SwiperSlide key={elem.id}>
              <img src={elem.img} className="brightness-50 images" />
            </SwiperSlide>
          );
        })}
      <Slide/>
      </Swiper>
    </div>
  );
}
