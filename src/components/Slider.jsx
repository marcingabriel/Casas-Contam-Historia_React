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
        <h2 className="text-center custom-font tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-2xl">{fachada}</h2>
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
          {casas.map(casa => (
            <SwiperSlide key={casa.endereco}>
              <div className="relative slide-content">
                <img src={casa.desenho} className="block w-full cursor-pointer transition-opacity duration-300 hover:opacity-90 transform hover:scale-110" onClick={() => openDrawer(casa)} title="Clique para ver mais informações"/>
                <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-40 px-2 py-1 text-sm">{casa.endereco}</p>
              </div>
            </SwiperSlide>
          ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow ml-8">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination "></div>
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
