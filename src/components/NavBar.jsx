import React, { useState, useRef, useEffect, useContext } from 'react';
import { FaHeadphones } from 'react-icons/fa'; // Ícone de fones de ouvido
import { AudioContext } from './AudioContext'; // Importar o contexto
import ToastComponent from '../components/Toast'


const NavBar = () => {
  const { isPlaying, playAudio, pauseAudio, setIsControlsVisible } = useContext(AudioContext); // Usar o contexto
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const [showTooltip, setShowTooltip] = useState(false); // Estado para controlar a visibilidade do tooltip

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   const handleMouseEnter = () => {
    setIsControlsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsControlsVisible(false);
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
            <div className="flex items-center space-x-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
              <FaHeadphones
                className={`text-2xl cursor-pointer transform transition duration-300 ${
                  isPlaying ? 'animate-bounce text-blue-700' : 'text-black'
                } hover:scale-110`}
                onClick={isPlaying ? pauseAudio : playAudio} // Alternar reprodução/pausa
              />
            </div>          
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
              <div id="popover-1" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600 max-w-60 transition-opacity duration-300 ease-in-out">
                <p className="leading-relaxed text-sm text-center ">Pagina principal onde se encontra o mapa interativo e algumas informações.</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
            <li>
              <a data-popover-target="popover-2" href="/inventario" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110">Inventário</a>
              <div id="popover-2" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600 max-w-60 transition-opacity duration-300 ease-in-out">
                <p className="leading-relaxed text-sm text-center ">Um inventário artístico e histórico sobre as casas. </p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
            <li>
              <a data-popover-target="popover-3" href="/depoimentos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110">Depoimentos</a>
              <div id="popover-3" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600 max-w-60 transition-opacity duration-300 ease-in-out">
                <p className="leading-relaxed text-sm text-center ">Depoimentos com informações relevantes sobre as história de algumas casas.</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
            <li>
              <a data-popover-target="popover-4" href="/sobre" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110">Sobre nós</a>
              <div id="popover-4" role="popover-3" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600 max-w-60 transition-opacity duration-300 ease-in-out">
                <p className="leading-relaxed text-sm text-center ">Sobre os participantes do projeto e contato.</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/*<ToastComponent></ToastComponent> */}





      

    </nav>
  );
};

export default NavBar;
