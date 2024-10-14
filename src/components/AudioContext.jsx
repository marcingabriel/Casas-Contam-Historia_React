import React, { createContext, useState, useRef, useEffect } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    Number(localStorage.getItem('currentTime')) || 0 // Recuperar o tempo atual do localStorage
  );
  const audioRef = useRef(null);

  // Ao iniciar o componente, definir o tempo atual armazenado e manter o estado de reprodução
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime; // Definir o tempo inicial da música
    }
  }, [audioRef]);

  // Função para tocar áudio e salvar o estado de reprodução
  const playAudio = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  // Função para pausar áudio e salvar o estado de reprodução
  const pauseAudio = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  // Função para atualizar o tempo atual
  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
    localStorage.setItem('currentTime', audioRef.current.currentTime); // Armazenar o tempo atual no localStorage
  };

 // Novo estado para controlar a visibilidade dos controles
 const [isControlsVisible, setIsControlsVisible] = useState(false);

  return (
    <AudioContext.Provider
      value={{ isPlaying, playAudio, pauseAudio, currentTime, setCurrentTime, audioRef, updateTime,isControlsVisible, setIsControlsVisible,}}
    >
      {children}
      {/* Player de áudio global */}
      <audio
        ref={audioRef}
        controls
        autoPlay={true}
        preload="auto"
        onMouseEnter={() => setIsControlsVisible(true)} // Manter controles visíveis quando o mouse estiver sobre eles
        onMouseLeave={() => setIsControlsVisible(false)}
        style={{
          opacity: isControlsVisible ? 1 : 0,
          pointerEvents: isControlsVisible ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
        className="fixed top-12 right-20 bg-gray-800 text-white rounded-full p-1 w-64 sm:w-72 md:w-80 z-50"
        src="midia/testemusic.mp3"
        type="audio/mp3"
        onTimeUpdate={updateTime} // Atualizar o tempo ao longo da execução
      />
    </AudioContext.Provider>
  );
};
