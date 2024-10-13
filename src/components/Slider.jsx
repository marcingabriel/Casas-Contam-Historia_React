import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DrawerComponent } from './Drawer';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/slider.css' 


import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export function Slider({ casas, fachada }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCasa, setSelectedCasa] = useState(null);

  const openDrawer = (casa) => {
    setSelectedCasa(casa);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <div className="containerSlider">
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
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => `
            <span class="${className} 
                        text-lg font-bold text-gray-900  flex
                        bg-white w-7 h-7 pt-4 p-1  ">${index + 1}</span>`,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {casas.map(casa => (
          <SwiperSlide key={casa.endereco}>
            <div className="relative slide-content">
              <img
                src={casa.casa}
                className="block w-full cursor-pointer transition-opacity duration-300 hover:opacity-90 transform hover:scale-110"
                onClick={() => openDrawer(casa)}
                title="Clique para ver mais informações"
              />
              <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-40 px-2 py-1 text-sm">{casa.endereco}</p>
            </div>
          </SwiperSlide>
        ))}
        
        <div className="slider-controler flex justify-between items-center ">
          <div className="swiper-button-prev slider-arrow text-white">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-pagination text-white text-base"></div>
          <div className="swiper-button-next slider-arrow text-white">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>




      </div>

      {selectedCasa && (
        <DrawerComponent
          isOpen={isDrawerOpen}
          handleClose={closeDrawer}
          desenho={selectedCasa.desenho}
          casa={selectedCasa.casa}
          endereco={selectedCasa.endereco}
          bairro={selectedCasa.bairro}
          mapa={selectedCasa.mapa}
        />
      )}

    </div>
  );
}
