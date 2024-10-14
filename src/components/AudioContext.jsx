import React, { createContext, useState, useRef, useEffect } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(
    JSON.parse(localStorage.getItem('isPlaying')) || false
  );
  const [currentTime, setCurrentTime] = useState(
    Number(localStorage.getItem('currentTime')) || 0
  );
  const audioRef = useRef(null);

  // Efeito para ajustar o estado do áudio ao carregar a página
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime; // Definir o tempo atual do áudio

      // Somente tocar o áudio se ele não estiver pausado
      const storedIsPlaying = JSON.parse(localStorage.getItem('isPlaying'));
      if (storedIsPlaying) {
        audioRef.current.play();
      }
    }
  }, [audioRef]);

  // Função para tocar o áudio e salvar o estado no localStorage
  const playAudio = () => {
    setIsPlaying(true);
    localStorage.setItem('isPlaying', true); // Salvar o estado de "tocando"
    audioRef.current.play();
  };

  // Função para pausar o áudio e salvar o estado no localStorage
  const pauseAudio = () => {
    setIsPlaying(false);
    localStorage.setItem('isPlaying', false); // Salvar o estado de "pausado"
    audioRef.current.pause();
  };

  // Função para atualizar o tempo do áudio
  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
    localStorage.setItem('currentTime', audioRef.current.currentTime); // Salvar o tempo atual
  };

  const [isControlsVisible, setIsControlsVisible] = useState(false);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        playAudio,
        pauseAudio,
        currentTime,
        setCurrentTime,
        audioRef,
        updateTime,
        isControlsVisible,
        setIsControlsVisible,
      }}
    >
      {children}
      {/* Player de áudio global */}
      <audio
        ref={audioRef}
        controls
        autoPlay={false} // Desabilitar autoplay para evitar conflitos
        preload="auto"
        onMouseEnter={() => setIsControlsVisible(true)}
        onMouseLeave={() => setIsControlsVisible(false)}
        style={{
          opacity: isControlsVisible ? 1 : 0,
          pointerEvents: isControlsVisible ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
        className="fixed top-12 right-20 bg-gray-800 text-white rounded-full p-1 w-64 sm:w-72 md:w-80 z-50"
        src="midia/testemusic.mp3"
        type="audio/mp3"
        onTimeUpdate={updateTime}
        onEnded={() => setIsPlaying(false)} // Garantir que o estado volte a falso ao fim da música
      />
    </AudioContext.Provider>
  );
};
