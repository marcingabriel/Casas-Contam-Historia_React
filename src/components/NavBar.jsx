import React, { useState, useRef } from 'react';
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
            {/* Ícone de música, visível quando o player não estiver visível */}
            <FaHeadphones
              className={`text-2xl text-black cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out ${!isHovered && 'block'} md:text-3xl`} // Responsividade
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}            
            />

            {/* Player de áudio, oculto visualmente quando não está em hover, mas ainda ativo */}
            <audio
              ref={audioRef}
              controls
              autoPlay={true}
              className={`bg-gray-800 text-white rounded-full p-2 mt-2 ${isHovered ? 'visible' : 'invisible'} w-64 sm:w-72 md:w-80`} // Largura responsiva
              onPlay={handleAudioPlay}
              onPause={handleAudioPause}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="midia/testemusic.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
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
              <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110" aria-current="page">Mapa</a>
            </li>
            <li>
              <a href="/inventario" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110">Inventário</a>
            </li>
            <li>
              <a href="/depoimentos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110">Depoimentos</a>
            </li>
            <li>
              <a href="/sobre" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cinza md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition-transform duration-300 hover:scale-110">Sobre nós</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
