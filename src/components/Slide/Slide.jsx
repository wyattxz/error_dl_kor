import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slide() {
  return (
    <>
    <div className='w-full h-[500px] py-16 relative
                    md:h-[900px]
                     xl:h-[1000px] xl:py-0 xl:w-[60%] xl:m-auto xl:rounded-3xl xl:border-4 xl:border-black/50  xl:mt-20 xl:overflow-hidden'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className='absolute bg-gradient-to-t to-pink-400 from-gray-200 px-5 z-50 top-5 left-5 w-[90%] h-[20%] rounded-3xl shadow-2xl shadow-black/70
                        md:top-16 md:left-20 md:w-[80%] md:px-10
                        xl:left-64 xl:w-[60%]'>
            <h1 className='text-5xl text-white/50 font-bold relative
                        md:text-8xl 
                        xl:px-10'>
              <span className='text-purple-400'>S</span>
              <span className='text-white/70'>
                hop
                <span className='text-purple-400'>p</span>
                ing
              </span>
              <span className='text-3xl text-white/70 absolute top-7 right-2
              md:text-6xl md:top-16
              xl:text-7xl'> With </span> 
             <span className='absolute top-10 left-32 text-6xl
                              md:text-8xl md:top-24 md:left-64
                              xl:top-36 xl:left-80'>
               <span className='text-purple-400 '>M</span>
              <span className='text-white/90'>e</span>
             </span>
            </h1>
        </div>
        
          <SwiperSlide>
          <img src="/Card/card1.jpg" alt="" className='w-full h-full object-cover '/>
        </SwiperSlide>
       
        <SwiperSlide>
          <img src="/Card/card4.jpg" alt="" className='w-full h-full object-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Card/card5.jpg" alt="" className='w-full h-full object-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Card/card6.jpg" alt="" className='w-full h-full object-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Card/card7.jpg" alt="" className='w-full h-full object-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Card/card8.jpg" alt="" className='w-full h-full object-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Card/card3.jpg" alt="" className='w-full h-full object-cover'/>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
