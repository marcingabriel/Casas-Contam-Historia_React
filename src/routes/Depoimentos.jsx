import React, { useEffect } from 'react';
import exibirDepoimentos from '../../scripts/depoimentos';
import { depoimentos } from '../../scripts/depoimentos'; // Supondo que 'depoimentos' seja exportado como um objeto ou array
import '../assets/style.css'
import useAnimateOnScroll from '../components/Animation';
import { HR } from "flowbite-react";

const Depoimentos = () => {
  useAnimateOnScroll();
  useEffect(() => {
    // Utiliza os depoimentos importados diretamente
    exibirDepoimentos(depoimentos, 'depoimentos-container',  'container-modal');
  }, []); // O array vazio [] assegura que o useEffect só execute uma vez, ao montar o componente

  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold text-center text-gray-700 mt-14  opacity-0 animate ">Depoimentos</h1> 
        <HR.Icon />
        <span className="absolute inset-0 mt-8 ml-8 w-1/5 h-64 rounded-full  flex items-center justify-center text-gray-500 opacity-20 z-0"> 
                <svg className="h-24 w-24" viewBox="0 0 409.294 409.294" fill="currentColor">
                    <path d="m0 204.647v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941v-58.471c-96.728 0-175.412 78.684-175.412 175.412z"></path>
                    <path d="m409.294 87.706v-58.471c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941z"></path>
                </svg>
        </span>
    
    </div>

      <div className="" id="container-modal"> </div>
      <section className="relative py-8" id="carousel_bf66">
        <div className="container mx-auto relative z-10" >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 animate-up" id="depoimentos-container">
            {/* Aqui dentro será inserido o conteúdo dos depoimentos */}   
          </div>
        </div>

        <div className="mt-2 mr-24 w-11/12 h-64 rounded-full flex justify-end text-gray-500 opacity-20">
          <svg className="h-24 w-24 rotate-180" viewBox="0 0 409.294 409.294" fill="currentColor">
            <path d="m0 204.647v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941v-58.471c-96.728 0-175.412 78.684-175.412 175.412z"></path>
            <path d="m409.294 87.706v-58.471c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941z"></path>
          </svg>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </section>
    </div>
  );
};

export default Depoimentos;
