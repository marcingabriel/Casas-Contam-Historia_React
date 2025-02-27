import React, { useState, useRef, useEffect, useContext } from 'react';
import { FaHeadphones } from 'react-icons/fa'; // Ícone de fones de ouvido
import { AudioContext } from './AudioContext'; // Importar o contexto
import ToastComponent from '../components/Toast';
import '../assets/contraste.css';

const NavBar = () => {
  const { isPlaying, playAudio, pauseAudio, setIsControlsVisible } = useContext(AudioContext); // Usar o contexto
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.body.classList.toggle('high-contrast', !isHighContrast);
  };

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
    <nav className={`transparent-nav sticky top-0 z-40 backdrop-filter backdrop-blur-xl border-b ${isHighContrast ? 'bg-black bg-opacity-80 border-white' : 'bg-transparent border-gray-500'}`}>

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-3 pb-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse" tabIndex="0">
          <img src="/img/As_casas_Logo-removebg.png" style={{ width: '180px', height: '50px' }} className="pl-1" alt="Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center space-x-4">
            {/* Botão de alto contraste */}
            <a href="#" onClick={toggleContrast} tabIndex="0" aria-label="Ativar/Desativar alto contraste">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="high-contrast-icon h-7 w-7 transform transition-transform duration-300 hover:scale-110"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 010-16v16z" />
              </svg>
            </a>

            <a href="https://www.instagram.com/ascasascontamhistoria/" target="_blank" tabIndex="0" aria-label="Logo Instagram">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="high-contrast-icon h-7 w-7 transform transition-transform duration-300 hover:scale-110"
            >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"/>
            </svg>

            </a>





            <div
              className="flex items-center space-x-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tabIndex="0"
            >
              <FaHeadphones
                className={`high-contrast-icon text-2xl cursor-pointer transform transition duration-300 ${
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
            tabIndex="0"
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
              <a data-popover-target="popover-1" href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110" aria-current="page" tabIndex="0">
                Mapa
              </a>
              <div id="popover-1" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600 max-w-60 transition-opacity duration-300 ease-in-out">
                <p className="leading-relaxed text-sm text-center ">Pagina principal onde se encontra o mapa interativo e algumas informações.</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
            <li>
              <a data-popover-target="popover-2" href="/inventario" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110" tabIndex="0">
                Inventário
              </a>
              <div id="popover-2" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600 max-w-60 transition-opacity duration-300 ease-in-out">
                <p className="leading-relaxed text-sm text-center ">Um inventário artístico e histórico sobre as casas. </p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
            <li>
              <a data-popover-target="popover-3" href="/depoimentos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110" tabIndex="0">
                Depoimentos
              </a>
              <div id="popover-3" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600 max-w-60 transition-opacity duration-300 ease-in-out">
                <p className="leading-relaxed text-sm text-center ">Depoimentos com informações relevantes sobre as história de algumas casas.</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
            <li>
              <a data-popover-target="popover-4" href="/sobre" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110" tabIndex="0">
                Sobre nós
              </a>
              <div id="popover-4" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600 max-w-60 transition-opacity duration-300 ease-in-out">
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
