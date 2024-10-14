import React, { createContext, useState, useRef, useEffect } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(
    JSON.parse(localStorage.getItem('isPlaying')) || false
  );
  const [currentTime, setCurrentTime] = useState(
    Number(localStorage.getItem('currentTime')) || 0
  );

  const [volume, setVolume] = useState(
    Number(localStorage.getItem('volume')) || 1 // 1 é o volume máximo
  );
  const audioRef = useRef(null);

  // Efeito para ajustar o estado do áudio ao carregar a página
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime; // Definir o tempo atual do áudio
      audioRef.current.volume = volume; // Definir o volume do áudio

      // Somente tocar o áudio se ele não estiver pausado
      const storedIsPlaying = JSON.parse(localStorage.getItem('isPlaying'));
      if (storedIsPlaying) {
        audioRef.current.play();
      }
    }
  }, [audioRef, volume]);

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

   // Função para atualizar o volume do áudio
   const updateVolume = (newVolume) => {
    setVolume(newVolume);
    localStorage.setItem('volume', newVolume); // Salvar o volume no localStorage
    if (audioRef.current) {
      audioRef.current.volume = newVolume; // Aplicar o novo volume
    }
  };

  const [isControlsVisible, setIsControlsVisible] = useState(false);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        playAudio,
        pauseAudio,
        currentTime,
        volume,
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

       {/* Controle de volume */}
       <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => updateVolume(e.target.value)} // Atualiza o volume com o valor do controle
        className="volume-slider z-50 fixed top-12"
      />
    </AudioContext.Provider>
  );
};
