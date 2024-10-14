import React, { createContext, useState, useRef, useEffect } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(
    JSON.parse(localStorage.getItem('isPlaying')) || false
  );
  const [currentTime, setCurrentTime] = useState(
    Number(localStorage.getItem('currentTime')) || 0
  );

  const [volume, setVolume] = useState(() => {
    const storedVolume = Number(localStorage.getItem('volume'));
    return storedVolume >= 0 && storedVolume <= 1 ? storedVolume : 1; // Garante que o valor inicial esteja correto
  });
  
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
      audioRef.current.volume = volume;

      const storedIsPlaying = JSON.parse(localStorage.getItem('isPlaying'));
      if (storedIsPlaying) {
        audioRef.current.play();
      }
    }
  }, [audioRef]);

  const playAudio = () => {
    setIsPlaying(true);
    localStorage.setItem('isPlaying', true);
    audioRef.current.play();
  };

  const pauseAudio = () => {
    setIsPlaying(false);
    localStorage.setItem('isPlaying', false);
    audioRef.current.pause();
  };

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
    localStorage.setItem('currentTime', audioRef.current.currentTime);
  };

  const handleVolumeChange = () => {
    const newVolume = Math.min(1, Math.max(0, audioRef.current.volume));
    setVolume(newVolume);
    localStorage.setItem('volume', newVolume);
  };

  const [isControlsVisible, setIsControlsVisible] = useState(false);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        playAudio,
        pauseAudio,
        volume,
        handleVolumeChange,
        currentTime,
        setCurrentTime,
        audioRef,
        updateTime,
        isControlsVisible,
        setIsControlsVisible,
      }}
    >
      {children}
      <audio
        ref={audioRef}
        controls
        autoPlay={false}
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
        onEnded={() => setIsPlaying(false)}
        onVolumeChange={handleVolumeChange}
      />
    </AudioContext.Provider>
  );
};
