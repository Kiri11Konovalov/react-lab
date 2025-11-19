// Добавлен ref к элементу video для управления воспроизведением
// Добавлены обработчики onPlay и onPause для синхронизации состояния с событиями видео

import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  // Создаем ref для доступа к элементу video
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    // Управляем воспроизведением видео через ref
    if (nextIsPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
    setIsPlaying(nextIsPlaying);
  }
  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="250"
        ref={videoRef}
        // Синхронизируем состояние с событием onPlay
        onPlay={() => setIsPlaying(true)}
        // Синхронизируем состояние с событием onPause
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
