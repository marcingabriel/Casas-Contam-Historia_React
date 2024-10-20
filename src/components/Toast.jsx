import { useState, useEffect, useContext } from 'react';
import { FaHeadphones } from 'react-icons/fa';
import { AudioContext } from './AudioContext'; // Importar o contexto

const ToastComponent = () => {
  const [isVisible, setIsVisible] = useState(true); // Controla a visibilidade do toast
  const { isPlaying } = useContext(AudioContext); // Usar o contexto
  const [progress, setProgress] = useState(0); // Controla o progresso da barra
  

// Função para simular a barra de progresso
    useEffect(() => {
    if (progress < 100) {
        const interval = setInterval(() => {
            setProgress(prev => prev + 1); // Incrementa o progresso
        }, 30); // 30ms para cada incremento, ajustável para controlar a velocidade

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
        } else {
        setIsVisible(false); // Fecha o toast quando o progresso atinge 100%
        }
    }, [progress]);

  if (!isVisible) return null; // Se não estiver visível, retorna null para remover o toast da tela

  return (
    <div
    id="toast-default"
    className="fixed flex flex-col top-25 right-5 items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
    role="alert"
  >
    <div className="flex items-center">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
        <FaHeadphones className="text-2xl cursor-pointer" />
        <span className="sr-only">Fire icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">Dê play ou pause o som no símbolo</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Close"
        onClick={() => setIsVisible(false)} // Fecha o toast manualmente
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1l6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
    
    {/* Barra de progresso */}
    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 dark:bg-gray-700">
      <div
        className="bg-blue-900 h-1.5 rounded-full dark:bg-blue-500"
        style={{ width: `${progress}%` }} // Controla o progresso da barra
      ></div>
    </div>
  </div>
);
};

export default ToastComponent;
