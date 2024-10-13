import React, { useState, useRef, useEffect } from 'react';
import { Dropdown } from "flowbite-react";
import { FaMusic } from 'react-icons/fa'; // Pacote react-icons para o ícone de música
import { FaHeadphones } from 'react-icons/fa'; // Ícone de fones de ouvido


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Estado para monitorar se a música está tocando
  const audioRef = useRef(null); // Referência para o elemento de áudio
  const [showTooltip, setShowTooltip] = useState(false); // Estado para controlar a visibilidade do tooltip




  const handleAudioPlay = () => {
    setIsPlaying(true);
  };

  const handleAudioPause = () => {
    setIsPlaying(false);
  };





  return (
    <nav className="transparent-nav sticky top-0 z-40 backdrop-filter backdrop-blur-xl border-b border-gray-500">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-3 pb-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/img/As_casas_Logo-removebg.png" style={{ width: '180px', height: '50px' }} className="pl-1" alt="Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center space-x-4">
            <a href="#"><img src="img/instagram.png" alt="Logo Rede Social 1" className="h-7 transform transition-transform duration-300 hover:scale-110" /></a>
            <a href="#"><img src="img/youtube.png" alt="Logo Rede Social 2" className="h-7 transform transition-transform duration-300 hover:scale-110" /></a>
            <div className="flex items-center space-x-1"  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
              {/* Ícone de música, visível quando o player não estiver visível */}
              <FaHeadphones
              className={`text-2xl cursor-pointer transform transition duration-300 ${isPlaying ? 'animate-bounce text-blue-700' : 'text-black'} hover:scale-110`} 
            />

              {/* Player de áudio, oculto visualmente quando não está em hover, mas ainda ativo */}
             <audio
              ref={audioRef}
              controls
              autoPlay={true}
              className={`fixed top-14 transform -translate-x-1/2 bg-gray-800 text-white rounded-full p-1 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'} w-64 sm:w-72 md:w-80`} 
              onPlay={handleAudioPlay}
              onPause={handleAudioPause}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="midia/testemusic.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            </div>          
            {/* Adicione mais logos de redes sociais conforme necessário */}
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a data-popover-target="popover-1" href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110" aria-current="page">Mapa</a>
              <div data-popover id="popover-1" role="tooltip" class="absolute z-10 invisible inline-block w-56 text-sm text-gray-600 transition-opacity duration-300 ease-in-out bg-white border rounded-lg shadow-lg opacity-0 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-800">
                  <div class="px-3 py-2 bg-gray-200 border-b border-gray-300 rounded-t-lg ">
                      <h3 class="font-bold text-lg text-gray-900 dark:text-white">Mapa</h3>
                  </div>
                  <div class="px-2 py-1">
                      <p class="leading-relaxed text-sm text-center ">Pagina principal onde se encontra o mapa e algumas informações</p>
                  </div>
                  <div class="absolute w-3 h-3 bg-white border border-gray-300 transform rotate-45 -top-1 dark:bg-gray-900 dark:border-gray-900" data-popper-arrow></div>
              </div>
            </li>
            <li>
              <a data-popover-target="popover-2" href="/inventario" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110">Inventário</a>
            </li>
            <li>
              <a data-popover-target="popover-3" href="/depoimentos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110">Depoimentos</a>
            </li>
            <li>
              <a data-popover-target="popover-3" href="/sobre" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110">Sobre nós</a>
            </li>
          </ul>
        </div>
      </div>
      



    <div id="toast-default" class="fixed flex  top-25 right-5 items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
            <FaHeadphones
              className={`text-2xl cursor-pointer transform transition duration-300 ${isPlaying ? 'animate-bounce text-blue-700' : 'text-black'} hover:scale-110`} 
            />
            <span class="sr-only">Fire icon</span>
        </div>
        <div class="ms-3 text-sm font-normal">Dê play ou pause a musica no simbolo</div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close" id="close-toast">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>



      

    </nav>
  );
};

export default NavBar;
