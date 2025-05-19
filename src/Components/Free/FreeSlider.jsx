import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Movie.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../Redux/Free/FreeSlice';

export default function FreeSlider() {
    const {films}=useSelector((state)=>state.films);
    const dispatch=useDispatch();
    console.log(films);
    useEffect(()=>{
        dispatch(fetchFilms());
    },[]);
  
  return (
    <>
      <Swiper
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={20}

        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper swiper2"
      >
        {films?.map((elem)=>{
        return <SwiperSlide className='swiper-slide2' key={elem.id}><img src={elem.img} alt="" /></SwiperSlide>
        })}
      </Swiper>
    </>
  );
}
