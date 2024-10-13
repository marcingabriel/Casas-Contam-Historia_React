// src/routes/Inventario.jsx
import React, { useState } from 'react';
import {Component} from '../components/CarouselInv';
import CasasGaleria from '../components/CasasGaleria';
import useAnimateOnScroll from '../components/Animation';


const Inventario = () => {
  useAnimateOnScroll();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal ">


      <div className="animate carousel relative container mt-14 mx-auto max-w-screen-2xl opacity-0" >
        <div className="carousel-inner relative overflow-hidden w-full">
          <Component></Component>
        </div>
      </div>
 

  


      <section className="bg-white  py-8 ">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1 animate-left opacity-0">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <h1 className="text-center custom-font tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-3xl">Galeria</h1>
              <div className="relative ">
                <input 
                  type="text" 
                  id="filtroBairroInput" 
                  className="p-2 pl-10 border border-gray-300 rounded-md mb-4" 
                  placeholder="Pesquisar bairro..." 
                  value={searchTerm} 
                  onChange={handleSearch} 
                />
                <svg className="absolute top-3 left-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor">
                  <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                </svg>
              </div>
              <div className="flex items-center" id="store-nav-content">
                <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                  <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
          <div className="container mx-auto">
            <div className="z-35 container mx-auto mt-4">
              
              <CasasGaleria></CasasGaleria>
              {/* Aqui você pode importar e usar o componente Galeria, passando os dados filtrados */}
              {/* <Galeria searchTerm={searchTerm} /> */}
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inventario;
