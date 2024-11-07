import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DrawerComponent } from './Drawer';
import useAnimateOnScroll from '../components/Animation';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/slider.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export function Slider({ casas, quantidadeCasas }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCasa, setSelectedCasa] = useState(null);
  const [casasRenderizadas, setCasasRenderizadas] = useState(5); // Renderiza 5 inicialmente
  const [loading, setLoading] = useState(Array(quantidadeCasas).fill(true)); // Estado para controle do loading

  useAnimateOnScroll();

  const openDrawer = (casa) => {
    setSelectedCasa(casa);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Função para renderizar mais casas ao navegar
  const handleSlideChange = (swiper) => {
    if (swiper.activeIndex >= casasRenderizadas - 2 && casasRenderizadas < quantidadeCasas) {
      setCasasRenderizadas(casasRenderizadas + 5); // Incrementa em blocos de 5
    }
  };

  const handleImageLoad = (index) => {
    const updatedLoading = [...loading];
    updatedLoading[index] = false;
    setLoading(updatedLoading);
  };

  return (
    <div>
      <div className="containerSlider animate-up opacity-0">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          loopFillGroupWithBlank={true}
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
                          text-lg font-bold text-gray-900 flex
                          bg-white w-7 h-7 pt-4 p-1">${index + 1}</span>`,
            type: 'bullets',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          onSlideChange={handleSlideChange}
        >
          {[...Array(quantidadeCasas)].map((_, index) => (
            <SwiperSlide key={index}>
              {(index < 5 || index >= quantidadeCasas - 5 || index < casasRenderizadas) && casas[index] ? (
                <div className="relative slide-content">
                  {loading[index] && (
                    <div className="spinner absolute inset-0 flex items-center justify-center">
                      <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
                    </div>
                  )}
                  <LazyLoadImage
                    src={casas[index].casa}
                    effect="blur"
                    placeholderSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+"
                    className={`block w-full cursor-pointer transition-opacity duration-700 ease-in-out transform hover:opacity-90 hover:scale-110 lazy-load-image-background ${loading[index] ? 'opacity-0' : 'opacity-100'}`}
                    afterLoad={() => handleImageLoad(index)}
                    onClick={() => openDrawer(casas[index])}
                    title="Clique para ver mais informações"
                  />
                  <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-40 px-2 py-1 text-sm">{casas[index].endereco}</p>
                </div>
              ) : (
                <div className="invisible" /> // Slide invisível para manter a estrutura do pagination
              )}
            </SwiperSlide>
          ))}

          <div className="slider-controler flex justify-between items-center">
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
