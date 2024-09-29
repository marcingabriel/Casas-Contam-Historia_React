import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/slider.css' 

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Slider() {
  return (
    <div className="containerSlider">
      <h1 className="text-center custom-font tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-3xl">Fachada 1</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
        <div className="relative slide-content">
          <img src="img/desenhos/1.jpg" alt="slide_image" className="block w-full cursor-pointer transition-opacity duration-300 hover:opacity-90 transform hover:scale-110" />
          <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-40 px-2 py-1 text-sm">Beautiful Flower 2</p>
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="relative slide-content">
            <img src="img/desenhos/2.jpg" alt="slide_image" className="cursor-pointer transition-opacity duration-300 hover:opacity-90 transform hover:scale-110" />
            <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-40 px-2 py-1 text-sm">Beautiful Flower 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative slide-content">
            <img src="img/desenhos/4.jpg" alt="slide_image" className="cursor-pointer transition-opacity duration-300 hover:opacity-90 transform hover:scale-110" />
            <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-40 px-2 py-1 text-sm">Beautiful Flower 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative slide-content">
            <img src="img/desenhos/4.jpg" alt="slide_image" className="cursor-pointer transition-opacity duration-300 hover:opacity-90 transform hover:scale-110" />
            <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-40 px-2 py-1 text-sm">Beautiful Flower 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative slide-content">
            <img src="img/desenhos/6.jpg" alt="slide_image" />
            <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-40 px-2 py-1 text-sm">Beautiful Flower 2</p>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}


export default Slider;