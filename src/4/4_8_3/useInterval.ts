import { useEffect } from 'react';

// Пользовательский хук useInterval
export function useInterval(onTick: () => void, delay: number | null) {
 useEffect(() => {
    if (delay === null) {
      return; // Не устанавливаем интервал, если delay равен null
    }
    
    const id = setInterval(onTick, delay);
    return () => clearInterval(id);
  }, [onTick, delay]);
}